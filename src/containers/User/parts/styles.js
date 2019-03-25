import { StyleSheet } from 'react-native';
import _ from 'lodash';

const defaultStyles = {};

const sizes = {
	s: { inside: { height: 33, marginTop: 0 } },
	m: {},
	xl: {},
	xxl: {},
	xxxl: {}
};

export default (size) => {
	let styles = {};
	styles = _.merge(styles, defaultStyles, sizes[size]);
	return StyleSheet.create(styles);
};
