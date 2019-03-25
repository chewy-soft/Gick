import colors from '../../../../colors';
import { StyleSheet } from 'react-native';
import defaultStyle from './styles.default';
import _ from 'lodash';

const diff = {
	scoreEdit: {
		opacity: 0.1
	}
};

const sizes = {
	s: {
		edit: { width: 36, height: 36, borderRadius: 3 },
		score: { fontSize: 12 }
	},
	m: {
		edit: { width: 52, height: 52, borderRadius: 6 },
		score: { fontSize: 20 }
	}
};

export const getStyles = (size) => {
	let styles = {};
	styles = _.merge(styles, defaultStyle, diff, sizes[size]);
	return StyleSheet.create(styles);
};

export const params = {
	iconSize: 34
};
