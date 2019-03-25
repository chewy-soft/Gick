import defaultStyle from './styles.default';
import { StyleSheet } from 'react-native';
import _ from 'lodash';

const diff = {
	score: { fontSize: 14 },
	suffix: { paddingLeft: 2 },
	more: { backgroundColor: '#171717' }
};
export default StyleSheet.create(_.merge(defaultStyle, diff));

const sizes = {
	xs: { channelListContent: { ...c.padding_r(12) } },
	l: {
		channelList: { height: 87 },
		channelListContent: { ...c.padding_r(8) },
		channelListC: {
			marginLeft: 8,
			height: 64
		},
		channelListT: { fontSize: 12, marginRight: 4 },
		channelName: { fontSize: 16 },
		channelDes: { fontSize: 14 }
	},
	xxl: {
		channelList: { height: 98 },
		channelListContent: { ...c.padding_r(12) },
		channelListC: {
			marginLeft: 12,
			height: 87
		},
		channelListT: { fontSize: 14, marginRight: 6 },
		channelName: { fontSize: 18 },
		channelDes: { fontSize: 16, width: 400 }
	}
};

export const getSize = (size) => {
	let styles = {};
	styles = _.merge(styles, defaultStyle, diff, sizes[size]);
	return StyleSheet.create(styles);
};
