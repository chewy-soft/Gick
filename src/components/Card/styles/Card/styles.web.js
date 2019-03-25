import defaultStyle from './styles.default';
import { StyleSheet } from 'react-native';
import c from '../../../../lib/css';
import _ from 'lodash';

const diff = {
	boxShadow: {
		...c.absolute,
		zIndex: -2,
		boxShadow: '0 15px 10px rgba(0, 0, 0, 0.7)',
		bottom: 15,
		width: '50%',
		height: '20%'
	},
	left: { left: 5, transform: [ { rotate: '-3deg' } ] },
	right: { right: 5, transform: [ { rotate: '3deg' } ] },
	shadow: { boxShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' },
	title: { height: 48 }
};

const sizes = {
	l: {
		title: { fontSize: 18, lineHeight: 24 },
		description: { fontSize: 14 }
	},
	m: {
		title: { fontSize: 14, lineHeight: 18 },
		description: { fontSize: 12 }
	}
};

export default (size) => {
	let styles = {};
	styles = _.merge(styles, defaultStyle, diff, sizes[size]);
	return StyleSheet.create(styles);
};
