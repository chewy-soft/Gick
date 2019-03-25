import { StyleSheet } from 'react-native';
import defaultStyle from './styles.default';
import _ from 'lodash';
import c from '../../../lib/css';

const diff = {
	tabs: {
		boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.36)'
	},
	menus: {
		borderRadius: 6,
		paddingVertical: 6
	},
	list: { paddingVertical: 6, paddingHorizontal: 12 },
	selectBox: { width: 180 },
	previewButton: { marginRight: 12 },
	channelNavItem: (process.env.RESOLUTION == 'mobile' && { ...c.padding_r(0), paddingRight: 8 }) || {
		...c.padding_r(12)
	}
};

export default StyleSheet.create(_.merge(defaultStyle, diff));
