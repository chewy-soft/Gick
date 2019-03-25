import { StyleSheet } from 'react-native';
import c from '../../../../lib/css';
import _ from 'lodash';

const defaultStyle = {
	loader: { ...c.flex_row_center },
	loaderInfo: { marginLeft: 8 },
	loaderTitle: { color: '#fff', fontSize: 16 },
	loaderSub: { color: '#aaa', fontSize: 14 }
};

const sizes = {
	xs: {
		loader: { height: 48, paddingLeft: 18, paddingRight: 8 }
	},
	s: {
		loader: { height: 48, paddingLeft: 18, paddingRight: 8 }
	},
	l: { loader: { height: 78, ...c.padding_r(8) } }
};

export default (size) => {
	let styles = {};
	styles = _.merge(styles, defaultStyle, sizes[size]);
	return StyleSheet.create(styles);
};
