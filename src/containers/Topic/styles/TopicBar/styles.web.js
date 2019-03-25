import { StyleSheet } from 'react-native';
import defaultStyles from './styles.default';
import _ from 'lodash';
import colors from '../../../../colors';

const diff = {
	bar: { minHeight: 70 },
	contianer: {
		borderRadius: 6,
		paddingHorizontal: 6,
		paddingVertical: 4,
		minHeight: 40,
		marginHorizontal: 4
	},
	picker: { padding: 12, paddingBottom: 36, backgroundColor: colors.background, height: 282 },
	inputContent: {
		marginHorizontal: 6,
		paddingLeft: 10
	},
	infoContent: { height: 21, maxHeight: 21 },
	add: { width: 26, height: 26, borderRadius: 13 },
	line: { marginBottom: 8 },
	startInfo: { marginTop: 2, marginLeft: 2 }
};

export default StyleSheet.create(_.merge(defaultStyles, diff));

export const css_input = {
	cursor: 'pointer',
	position: 'absolute',
	height: 40,
	width: 44,
	maxWidth: 44,
	bottom: 20,
	left: 4,
	zIndex: 1,
	overflow: 'hidden',
	opacity: 0
};
