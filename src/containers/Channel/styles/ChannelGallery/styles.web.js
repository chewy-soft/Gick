import { StyleSheet } from 'react-native';
import _ from 'lodash';
import defaultStyle from './styles.default';

const diff = {
	content: { height: 225 },
	content_m: { height: 152 },
	panelTitle: { fontSize: 16 },
	type_title: { fontSize: 16, marginBottom: 12 },
	centerWrap: { marginBottom: 120 }
};

export default StyleSheet.create(_.merge(defaultStyle, diff));

export const params = {
	delete: 36
};
