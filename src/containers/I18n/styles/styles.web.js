import defaultStyles from './styles.default';
import { StyleSheet } from 'react-native';
import _ from 'lodash';

const diff = {
	descriptionValue: { paddingTop: 2, lineHeight: 20 },
	widgetInside: { paddingTop: 6 }
};

export default StyleSheet.create(_.merge(defaultStyles, diff));
