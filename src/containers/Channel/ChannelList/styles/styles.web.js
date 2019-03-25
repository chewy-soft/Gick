import defaultStyle from './styles.default';
import { StyleSheet } from 'react-native';
import c from '../../../../lib/css';
import _ from 'lodash';

const diff = {
	score: { fontSize: 16 },
	suffix: { paddingLeft: 6 }
};
export default StyleSheet.create(_.merge(defaultStyle, diff));

const sizes = {
	xs: {
		channelList: { height: 48 },
		channelListContent: { ...c.padding_r(18) },
		channelListC: { marginLeft: 8 },
		notice: { paddingRight: 12 }
	},
	s: {
		channelList: { height: 48 },
		channelListContent: { ...c.padding_r(18) },
		channelListC: { marginLeft: 8 },
		notice: { paddingRight: 12 }
	},
	l: {
		channelList: { height: 87 },
		channelListContent: { ...c.padding_r(8) },
		channelListC: {
			marginLeft: 8,
			height: 64
		},
		channelListT: { fontSize: 12, marginRight: 4 },
		channelName: { fontSize: 16 },
		channelDes: { fontSize: 14 },
		notice: { paddingRight: 26 }
	},
	xxl: {
		channelList: { height: 98, maxWidth: 400 },
		channelListContent: { ...c.padding_r(12) },
		channelListC: {
			marginLeft: 12,
			height: 87
		},
		channelListT: { fontSize: 14, marginRight: 6 },
		channelName: { fontSize: 18 },
		channelDes: { fontSize: 16 },
		notice: { paddingRight: 26 }
	}
};

export const getSize = (size) => {
	let styles = {};
	styles = _.merge(styles, defaultStyle, diff, sizes[size]);
	return StyleSheet.create(styles);
};
