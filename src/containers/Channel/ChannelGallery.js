import _ from 'lodash';
import React from 'react';
import View from '../../components/View/View';
import Text from '../../components/Text/Text';
import styles from './styles/ChannelGallery/styles';
import Gallery from '../../components/Gallery';
import Loader from '../../components/Loader';
import * as lib from '../../lib/util';
import ChannelSimpleCard from './parts/ChannelSimpleCard';
import HandlerContext from '../../context/HandlerContext';

class ChannelGallery extends React.Component {
	static contextType = HandlerContext;

	onLoad = (page) => {
		const { channels, onSelect, columns, theme, size, customize_style } = this.props;
		const { t } = this.context;

		if (!channels) return null;
		const columnCount = columns || 4;
		if (_.size(channels) <= columnCount) {
			var items = channels;
		} else {
			const offset = (page - 1) * columnCount;
			var items = lib.rotationSlice(channels, offset, columnCount);
		}

		const type = this.props.type || 'keyword';
		const { content, card } = customize_style || {};
		let _css = (size == 'm' && styles.content_m) || styles.content;
		_css = [ _css, content ];
		return (
			<View style={_css}>
				{_.map(items, (channel, index) => (
					<View style={card} key={index}>
						<ChannelSimpleCard
							size={size}
							channel={channel}
							onPress={() => onSelect(channel)}
							theme={theme}
							type={type}
							t={t}
						/>
					</View>
				))}
			</View>
		);
	};

	shouldComponentUpdate(nextProps, nextState) {
		return this.props.channels !== nextProps.channels;
	}

	render() {
		const { channels, interval, style, columns, empty, renderHeader, error } = this.props;
		const { t } = this.context;

		const column_count = columns || 3;
		const pages = Math.ceil(_.size(channels) / column_count);
		if (channels === undefined) return <Loader style={style} />;
		if (error) return <Text style={{ color: '#fff' }}>wait error info</Text>;
		if (_.size(channels) == 0) return empty || null;
		return (
			<View style={style}>
				{renderHeader && renderHeader()}
				<Gallery
					onLoad={this.onLoad}
					interval={interval || 5000}
					numberOfPages={pages}
					arrowStyle={{ top: 36 }}
				/>
			</View>
		);
	}
}

export default ChannelGallery;
