import { StyleSheet } from 'react-native';
import colors from '../../../../colors';
import _ from 'lodash';

const themes = {
	left: { content: { marginRight: 'auto', borderTopLeftRadius: 0 } },
	right: {
		container: { justifyContent: 'flex-end', flexDirection: 'row' },
		content: { marginLeft: 'auto', borderTopRightRadius: 0 }
	},
	center: { content: { backgroundColor: 'transparent', paddingLeft: 0 } }
};

const defualtStyle = {
	content: {
		padding: 8,
		backgroundColor: colors.normalGray,
		flex: 0,
		flexBasis: 'auto',
		borderRadius: 6
	},
	container: { flex: 1, padding: 12 }
};

export default (theme) => {
	var styles = {};
	styles = _.merge(styles, defualtStyle, themes[theme]);
	return StyleSheet.create(styles);
};
