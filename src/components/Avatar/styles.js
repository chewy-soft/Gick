import { StyleSheet } from 'react-native';
import colors from '../../colors';
import _ from 'lodash';
import c from '../../lib/css';

const defaultStyles = {
	onlineState: {
		...c.absolute,
		bottom: 0,
		right: 0,
		zIndex: 1,
		borderWidth: 2,
		borderColor: undefined
	},
	border: {
		borderWidth: undefined,
		borderColor: undefined
	},
	badge: {
		...c.absolute,
		zIndex: 1
	},
	image: { overflow: 'hidden', ...c.flex_center },
	name: { ...c.flex_center },
	name_font: {
		color: '#fff',
		fontSize: undefined,
		fontWeight: 'bold'
	}
};

const svgSizes = {
	xxs: {
		svg: 20,
		title: 16
	},
	xs: {
		svg: 24,
		title: 20
	},
	s: {
		svg: 33,
		title: 24
	},
	m: {
		svg: 53,
		title: 36
	},
	l: {
		svg: 68,
		title: 44
	},
	xl: {
		svg: 78,
		title: 50
	},
	xxl: {
		svg: 68,
		title: 60
	},
	xxxl: {
		svg: 108,
		title: 60
	}
};

const themes = {
	lightBlue: {
		onlineState: { borderColor: '#6D798A' },
		border: { borderColor: '#fff' }
	},
	blue: {
		onlineState: { borderColor: '#2f3136' },
		border: { borderColor: '#fff' }
	},
	dark: {
		image: { backgroundColor: colors.background },
		onlineState: { borderColor: colors.background },
		border: { borderColor: colors.background }
	},
	light: {
		image: { backgroundColor: '#fff' },
		onlineState: { borderColor: '#fff' },
		border: { borderColor: '#fff' }
	}
};

export const getParams = (size) => svgSizes[size];

const sizes = {
	xxs: {
		image: { width: 20, height: 20, borderRadius: 10 },
		badge: { right: -4, top: -3 },
		onlineState: {
			height: 6,
			width: 6,
			borderRadius: 3,
			borderWidth: 1
		},
		border: { borderWidth: 1 },
		name_font: { fontSize: 12 }
	},
	xs: {
		image: { width: 24, height: 24, borderRadius: 12 },
		badge: { right: -4, top: -3 },
		onlineState: {
			height: 9,
			width: 9,
			right: -2,
			borderRadius: 9,
			borderWidth: 1
		},
		border: { borderWidth: 1 },
		name_font: { fontSize: 14 }
	},
	s: {
		image: { width: 33, minHeight: 33, height: 33, borderRadius: 17 },
		badge: { right: -8, top: -1 },
		onlineState: {
			height: 11,
			width: 11,
			borderRadius: 11
		},
		border: { borderWidth: 2 },
		name_font: { fontSize: 18 }
	},
	m: {
		image: { width: 50, height: 50, borderRadius: 25 },
		badge: { right: -12, top: -2 },
		onlineState: {
			height: 18,
			width: 18,
			borderRadius: 18,
			right: -4
		},
		border: { borderWidth: 2 },
		name_font: { fontSize: 28 }
	},
	l: {
		image: { width: 68, height: 68, borderRadius: 34 },
		badge: { right: -14, top: -3 },
		onlineState: {
			height: 23,
			width: 23,
			borderRadius: 23
		},
		border: { borderWidth: 3 },
		name_font: { fontSize: 42 }
	},
	xl: {
		image: { width: 78, height: 78, borderRadius: 39 },
		badge: { right: -16, top: -3 },
		onlineState: {
			height: 26,
			width: 26,
			borderRadius: 26,
			borderWidth: 3
		},
		border: { borderWidth: 3 },
		name_font: { fontSize: 48 }
	},
	xxl: {
		image: { width: 98, height: 98, borderRadius: 49 },
		badge: { right: -16, top: -3 },
		onlineState: {
			display: 'none'
		},
		border: { borderWidth: 3 },
		name_font: { fontSize: 52 }
	},
	xxxl: {
		image: { width: 118, height: 118, borderRadius: 59 },
		badge: { right: -16, top: -3 },
		onlineState: {
			display: 'none'
		},
		border: { borderWidth: 4 },
		name_font: { fontSize: 56 }
	}
};

export const onlineState = {
	online: { onlineState: { backgroundColor: colors.success } },
	offline: { onlineState: { backgroundColor: colors.normalGray } }
};

export const getStyles = (size, online, theme) => {
	let styles = {};
	styles = _.merge(styles, defaultStyles, sizes[size]);
	styles = _.merge(styles, onlineState[online]);
	styles = _.merge(styles, themes[theme]);
	return StyleSheet.create(styles);
};
