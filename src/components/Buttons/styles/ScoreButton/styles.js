import { StyleSheet } from 'react-native';
import defaultStyle from './styles.default';
import _ from 'lodash';

const diff = {
	scoreEdit: {
		opacity: 0.2,
		bottom: 6,
		right: 0
	}
};

const sizes = {
	s: {
		edit: { width: 36, height: 36, borderRadius: 3 },
		score: { fontSize: 14 }
	},
	m: {
		edit: { width: 52, height: 52, borderRadius: 4 },
		score: { fontSize: 19 }
	}
};

export const getStyles = (size) => {
	let styles = {};
	styles = _.merge(styles, defaultStyle, diff, sizes[size]);
	return StyleSheet.create(styles);
};

export const params = {
	iconSize: 22
};
