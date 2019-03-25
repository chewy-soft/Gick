import React from "react";
import { View } from "react-native";
import Loader from "../../components/Loader";
import EmptyEditContent from "../../components/Static/EmptyEditContent";
import Error500 from "../../components/Static/Error500";
import Interaction from "./Interaction";
import Elasticsearch from "../../elasticsearch/elasticsearch";
import _ from "lodash";
import styles from "./styles/styles";
import HandlerContext from "../../context/HandlerContext";

const initialState = {
  hits: undefined,
  total: undefined,
  error: undefined,
  page: 1
};

export default class Interactions extends React.Component {
  static contextType = HandlerContext;

  state = initialState;
  search = undefined;
  _sizePerPage = 10;

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.channel_id !== nextProps.channel_id ||
      this.props.filter !== nextProps.filter ||
      this.state !== nextState
    );
  }

  componentDidMount() {
    this.doSearch();
  }

  componentDidUpdate(preProps, preState) {
    if (
      this.props.channel_id !== preProps.channel_id ||
      this.props.filter !== preProps.filter
    ) {
      this.doSearch();
    }
  }
  nextSearch = async () => {
    const { page, total } = this.state;
    if (page * this._sizePerPage >= total) {
      this._setState({ hits: undefined, page: 1 });
      this.doSearch();
    } else {
      this._setState({ hits: undefined, page: page + 1 });
      try {
        const result = await this.search.search();
        const hits = _.map(result.hits.hits, hit => ({
          _id: hit._id,
          ...hit._source
        }));
        const total = result.hits.total;
        this._setState({
          hits: hits,
          total: total
        });
      } catch (error) {
        this._setState({ error });
      }
    }
  };
  doSearch = async () => {
    const { channel_id } = this.props;
    const { token } = this.context;
    if (!channel_id) return;
    if (this.search) this.search.delete();
    const filter = this.props.filter ? [this.props.filter] : [];
    this.search = new Elasticsearch(token)
      .setIndex("interactions")
      .setQuery({
        bool: {
          filter: [
            { term: { channel_id: channel_id } },
            { terms: { rating: [0, 10] } },
            ...filter
          ]
        }
      })
      .setSize(this._sizePerPage);

    this._setState({ hits: undefined });

    try {
      const result = await this.search.search();
      const hits = _.map(result.hits.hits, hit => ({
        _id: hit._id,
        ...hit._source
      }));
      const total = result.hits.total;
      this._setState({
        hits: hits,
        total: total,
        error: false
      });
    } catch (error) {
      console.log(error);
      this._setState({ error });
    }
    return this.search;
  };

  _setState(value) {
    !this._unmount && this.setState(value);
  }

  componentWillUnmount() {
    this._unmount = true;
  }

  render() {
    const { channel_id, me, reviewInteraction } = this.props;
    const { hits, error } = this.state;
    const { t } = this.context;
    if (error) return <Error500 />;

    if (hits === undefined)
      return (
        <View style={styles.content}>
          <Loader />
        </View>
      );
    if (_.size(hits) == 0)
      return (
        <View style={styles.content}>
          <EmptyEditContent />
        </View>
      );

    return hits.map(interaction => (
      <Interaction
        me={me}
        interaction={interaction}
        reviewInteraction={reviewInteraction}
        key={interaction._id}
      />
    ));
  }
}
