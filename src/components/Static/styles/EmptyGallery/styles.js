import { StyleSheet } from 'react-native';
import defaultStyle, { themes } from './styles.default';
import _ from 'lodash';

const diff = {
	empty: {
		paddingVertical: 18
	},
	info: { width: '94%' },
	panelTab: {
		paddingBottom: 8,
		fontSize: 14
	},
	subInfo: {
		paddingVertical: 8,
		paddingHorizontal: 4,
		fontSize: 14
	},
	dividerText: {
		marginVertical: 12,
		paddingHorizontal: 4,
		fontSize: 18
	}
};

export default getStyle = (theme) => {
	let styles = {};
	styles = _.merge(styles, defaultStyle, diff, themes[theme]);
	return StyleSheet.create(styles);
};
