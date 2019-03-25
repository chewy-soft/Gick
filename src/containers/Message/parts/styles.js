import { StyleSheet } from 'react-native';
import _ from 'lodash';

const themes = {
	left: { menu: { right: 4 }, createInfo: { justifyContent: 'flex-start' } },
	right: { menu: { left: 4 }, createInfo: { justifyContent: 'flex-end' } },
	center: { menu: { right: 4 }, createInfo: { justifyContent: 'flex-start' } }
};

const defualtStyle = {
	menu: {
		position: 'absolute',
		flexDirection: 'row',
		top: 4
	},
	createInfo: {
		flexDirection: 'row',
		marginBottom: 2,
		alignItems: 'center',
		flex: 0,
		flexBasis: 'auto'
	},
	userName: { marginHorizontal: 4 },
	createAt: { color: '#aaa', fontSize: 12, lineHeight: 12 * 1.5 }
};

export default (theme) => {
	var styles = {};
	styles = _.merge(styles, defualtStyle, themes[theme]);
	return StyleSheet.create(styles);
};

export const styles = StyleSheet.create({
	avatar: { width: 33, height: 33, overflow: 'hidden', marginTop: 18, marginLeft: 8 }
});
