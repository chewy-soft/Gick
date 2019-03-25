import React from 'react';
import { FlatList, View } from 'react-native';
import DefaultFooter from './parts/ScrollFooter';
import DefaultLoader from '../Loader';

export default class InfiniateScrollView extends React.Component {
	margin = 0;
	minViewable = 10;

	state = {
		startIndex: 0,
		endIndex: 10
	};

	viewabilityConfig = {
		waitForInteraction: false,
		minimumViewTime: 10,
		viewAreaCoveragePercentThreshold: 50
	};
	onViewableItemChanged = (info) => {
		let { viewableItems, changed } = info;
		if (viewableItems.length == 0) {
			return;
		}
		if (viewableItems.length >= this.minViewable) {
			let startIndex = viewableItems[0].index - this.margin;
			let endIndex = viewableItems[viewableItems.length - 1].index + this.margin;

			this.setState({
				startIndex: startIndex,
				endIndex: endIndex
			});
		} else {
			let startIndex = viewableItems[0].index - this.margin;
			let endIndex = viewableItems[0].index + this.minViewable;
			this.setState({
				startIndex: startIndex,
				endIndex: endIndex
			});
		}
	};

	onLoad = () => {
		const { onLoad, hasMore, loading } = this.props;
		if (hasMore && !loading) {
			onLoad();
		}
	};

	renderItem = ({ item, index }) => {
		const Loader = this.props.Loader || DefaultLoader;
		if (this.state.startIndex <= index && index <= this.state.endIndex) return this.props.renderItem(item);
		else
			return (
				<View style={{ height: this.props.itemHeight }}>
					<Loader />
				</View>
			);
	};

	componentDidMount() {
		const { data, onLoad, hasMore, loading } = this.props;
		if ((data === undefined || data.length == 0) && !loading && hasMore) {
			onLoad();
		}
	}

	componentDidUpdate() {
		const { data, onLoad, hasMore, loading } = this.props;
		if ((data === undefined || data.length == 0) && !loading && hasMore) {
			onLoad();
		}
	}

	render() {
		let { data, Footer, keyExtractor, loading, hasMore, Empty } = this.props;
		Footer = Footer || DefaultFooter;
		if (data === undefined) return <DefaultLoader />;
		if (data.length == 0 && !hasMore && !loading)
			return <View style={{ flex: 1 }}>{Empty ? <Empty /> : null}</View>;

		return (
			<FlatList
				data={data}
				renderItem={this.renderItem}
				keyExtractor={keyExtractor}
				onEndReached={this.onLoad}
				onEndThreshold={0}
				ListFooterComponent={(props) => <Footer {...this.props} />}
				onViewableItemsChanged={this.onViewableItemChanged}
				// viewabilityConfig={this.viewabilityConfig}
			/>
		);
	}
}
