import { StyleSheet } from 'react-native';
import _ from 'lodash';
import defaultStyle from './styles.default';

const diff = {
	roundCover: { paddingLeft: 20 },
	square_name: {
		height: 118,
		width: 210
	},
	image_square: { width: 210, height: 118, flex: 0, flexBasis: 'auto' },
	image_round: { width: 118, height: 118, borderRadius: 59, flex: 0, flexBasis: 'auto' },
	name_font: { fontSize: 56 }
};

export default StyleSheet.create(_.merge(defaultStyle, diff));

export const params = {
	round: 140,
	square: 210
};
