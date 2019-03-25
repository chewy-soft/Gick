import defaultStyles, { themes } from './styles.default';
import { StyleSheet } from 'react-native';
import _ from 'lodash';

const diff = {
	cell: { paddingBottom: 20 },
	badgeContent: { marginBottom: 4 },
	channelCard: { height: 240 },
	channelConnected: { height: 240 },
	log: { fontSize: 16, maxWidth: 586 }
};

export default (theme) => {
	let styles = {};
	styles = _.merge(styles, defaultStyles, diff, themes[theme]);
	return StyleSheet.create(styles);
};
