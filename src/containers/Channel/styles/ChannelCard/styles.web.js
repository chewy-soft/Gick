import defaultStyles from './styles.default';
import { StyleSheet } from 'react-native';
import _ from 'lodash';

const diff = {
	live: {
		boxShadow: '2px 2px 4px rgba(0,0,0,.4)'
	},
	owner: {
		top: -48,
		zIndex: 1,
		width: 53,
		height: 53
	},
	timer: { width: 90 },
	noimage: { height: 200 },
	inside: { maxWidth: 232 }
};
export default StyleSheet.create(_.merge(defaultStyles, diff));

export const params = {
	width: 240,
	icon: 44
};
