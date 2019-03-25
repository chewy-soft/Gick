import defaultStyles from './styles.default';
import { StyleSheet } from 'react-native';
import _ from 'lodash';
import c from '../../../../lib/css';

const sizes = {
	s: {
		previewContent: { height: 50, width: '100%' },
		image: { height: 50, width: '100%' },
		imageBack: { height: 50 },
		imageAdd: { height: 50, width: 50 },
		extension: { maxWidth: 50, maxHeight: 50 }
	},
	m: {
		previewContent: { width: 100, height: 100 },
		image: { height: 100, width: 100 },
		imageAdd: { height: 100, width: 100 },
		extension: { maxWidth: 100, maxHeight: 100 },
		imageBack: { width: 100, height: 100 },
		button: { marginTop: 12 }
	},
	l: {
		previewContent: { width: 200, height: 200 },
		image: { height: 200, width: 200 },
		imageAdd: { height: 200, width: 200 },
		extension: { maxWidth: 200, maxHeight: 200 },
		imageBack: { width: 200, height: 200 },
		button: { marginTop: 22 }
	}
};
const diff = {
	previewContent: {
		...c.margin(6, 8)
	},
	delete: { right: -4, top: -4 },
	imageAdd: {
		cursor: 'pointer',
		...c.margin(6, 8)
	}
};

export const getStyles = (size) => {
	let styles = {};
	styles = _.merge(styles, defaultStyles, diff, sizes[size]);
	return StyleSheet.create(styles);
};

const params = {
	m: { add: 18 },
	l: { add: 70 }
};

export const getParams = (size) => _.merge(params[size]);
