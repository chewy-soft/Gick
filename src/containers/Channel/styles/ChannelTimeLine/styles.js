import defaultStyles, { themes } from './styles.default';
import { StyleSheet } from 'react-native';
import _ from 'lodash';

const diff = { cell: { paddingBottom: 20 } };

export default (getStyles = (theme) => {
	let styles = {};
	styles = _.merge(styles, defaultStyles, diff, themes[theme]);
	return StyleSheet.create(styles);
});
