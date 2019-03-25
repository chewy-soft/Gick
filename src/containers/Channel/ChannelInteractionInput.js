import _ from "lodash";
import React from "react";
import Text from "../../components/Text/Text";
import Alert from "../../components/Alert";
import Input from "../../components/TextField/Input";
import Button from "../../components/Buttons/Button";
import styles from "./styles/ChannelInteractionInput/styles";
import View from "../../components/View/View";
import HandlerContext from "../../context/HandlerContext";
import Loader from "../../components/Loader";

const initialState = {
  interaction: undefined,
  rating: undefined,
  comment: undefined,
  error: undefined
};
export default class ChannelInteractionInput extends React.Component {
  static contextType = HandlerContext;

  _mount = true;

  state = initialState;
  componentWillUnmount = () => (this._mount = false);

  onChangeComment = comment => {
    this.setState({ comment: comment, error: undefined });
  };

  onChangeRating = rating => {
    this.setState({
      rating: rating,
      comment: undefined,
      error: undefined
    });
  };

  onChangeRatingAndSave = rating => {
    this.setState({
      rating: rating,
      comment: undefined,
      error: undefined
    });
    this.onSaveWithoutComment(rating);
  };

  onError = error => {
    this.setState({ error, rating: undefined });
  };

  isSaved = () => {
    const { interaction } = this.props;
    const { rating, comment } = this.state;
    if (_.isNil(interaction)) return false;
    return interaction.rating == rating && interaction.comment == comment;
  };

  onSave = async (rating, comment) => {
    const { id } = this.props;
    const { updateInteraction } = this.context;
    try {
      const response = await updateInteraction(id, rating, comment);
    } catch (error) {
      console.log(error);
      this.onError(error);
    }
  };

  onSaveWithoutComment = async rating => {
    const { id } = this.props;
    const { updateInteraction } = this.context;
    try {
      const response = await updateInteraction(id, rating, null);
    } catch (error) {
      this.onError(error);
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !_.isEqual(this.props.interaction, nextProps.interaction) ||
      this.state !== nextState
    );
  }

  componentDidUpdate(preProps) {
    if (!_.isEqual(this.props.interaction, preProps.interaction)) {
      this.setState(this.props.interaction || initialState);
    }
    this.props.onResize && this.props.onResize();
  }
  componentDidMount() {
    if (this.props.interaction === undefined) {
      this.loadInteraction(this.props.id);
    }
    if (this.props.interaction) {
      this.setState(this.props.interaction);
    }
  }
  loadInteraction = async id => {
    const interaction = await this.context.getInteraction(id);
    if (this._mount) this.setState(interaction);
  };
  render() {
    const { theme, interaction } = this.props;
    const { error, rating, comment } = this.state;
    const { router } = this.context;

    return (
      <View
        style={
          (rating == 0 || rating == 10) && !this.isSaved()
            ? styles.boarderWarning
            : null
        }
      >
        <View style={styles.score}>
          {theme !== "simple" && (
            <View style={styles.button} elevation={2}>
              <Button
                size="l"
                icon="good"
                content="推荐"
                theme={(rating == 10 && "lightOrange") || "transparent"}
                onPress={() => rating !== 10 && this.onChangeRating(10)}
              />
            </View>
          )}
          {theme !== "simple" && (
            <View style={styles.button} elevation={2}>
              <Button
                size="l"
                icon="unlike"
                content="不推荐"
                theme={(rating == 0 && "lightOrange") || "transparent"}
                onPress={() => rating !== 0 && this.onChangeRating(0)}
              />
            </View>
          )}
          <View style={styles.button} elevation={2}>
            <Button
              size="l"
              icon="fullHeart"
              content="有点意思"
              theme={(rating == 9 && "lightOrange") || "transparent"}
              onPress={() => rating !== 9 && this.onChangeRatingAndSave(9)}
            />
          </View>
          <View style={styles.button} elevation={2}>
            <Button
              size="l"
              icon="bad"
              content="不喜欢"
              theme={(rating == 1 && "lightOrange") || "transparent"}
              onPress={() => rating !== 1 && this.onChangeRatingAndSave(1)}
            />
          </View>
        </View>
        {(rating == 0 || rating == 10) && (
          <View>
            <View style={styles.comment}>
              <Input
                type="text"
                placeholder="您的测评可以为其他用户提供更多实用的信息"
                onChange={this.onChangeComment}
                defaultValue={comment || ""}
                maxLength={1000}
                numberOfLines={2}
              />
            </View>
            <View style={styles.footer}>
              <View style={styles.info}>
                {!interaction && (
                  <Text style={styles.text}>
                    您认为有什么优点或缺点？您是否会推荐给他人？可以写下您的看法。注意保持礼貌并遵守
                    <Text style={styles.link} onPress={router.toBasicRule}>
                      《规则及指引》
                    </Text>
                  </Text>
                )}
                {interaction && (
                  <Text style={styles.text}>
                    需要更新之前的测评吗？您可以在原有测评上追加或更新最近的新看法。
                  </Text>
                )}
              </View>
              <Button
                theme="noStyle"
                content="跳过"
                icon="jump"
                size="s"
                onPress={() => this.onSaveWithoutComment(rating)}
              />
              <Button
                icon="send"
                content="发送"
                theme="darkGreen"
                onPress={() => this.onSave(rating, comment)}
              />
            </View>
          </View>
        )}
        {error && <Alert type="error" message={"error"} visible={true} />}
      </View>
    );
  }
}
