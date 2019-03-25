import _ from 'lodash';
import colors from '../../../../colors';
import { StyleSheet } from 'react-native';

const defaultStyles = {
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: undefined,
		overflow: 'hidden'
	},
	shadow: { boxShadow: '0 2px 2px 2px rgba(0,0,0,.4)' },
	content: {
		fontSize: 12,
		marginTop: -3,
		color: '#fff'
	},
	inside: { flex: 1, alignItems: 'center', justifyContent: 'center' }
};

export const sizes = {
	xl: {
		button: {
			width: 79,
			height: 79,
			borderRadius: 39
		}
	},
	l: {
		button: {
			width: 60,
			height: 60,
			borderRadius: 30
		}
	},
	m: {
		button: {
			width: 50,
			height: 50,
			borderRadius: 25
		}
	},
	ms: {
		button: {
			width: 46,
			height: 46,
			borderRadius: 23
		}
	},
	s: {
		button: {
			width: 39,
			height: 39,
			borderRadius: 20
		}
	},
	xs: {
		button: {
			width: 26,
			height: 26,
			borderRadius: 13
		}
	}
};

export const themes = {
	black: {
		button: { backgroundColor: 'rgba(255,255,255,.1)' }
	},
	dark: { button: { backgroundColor: colors.background } },
	orange: {
		button: { backgroundColor: colors.lightOrange }
	},
	lightOrange: { button: { backgroundColor: colors.orange } },
	darkBlue: {
		button: { backgroundColor: '#68768A' }
	},
	lightBlue: {
		button: { backgroundColor: '#80CBC4' }
	},
	red: {
		button: { backgroundColor: colors.lightRed }
	},
	wechat: {
		button: { backgroundColor: colors.success }
	},
	qq: {
		button: { backgroundColor: colors.lightBlue }
	},
	weibo: {
		button: { backgroundColor: 'orange' }
	},
	white: {
		button: { backgroundColor: '#ccc' }
	},
	moss: {
		button: { backgroundColor: colors.moss }
	},
	green: {
		button: { backgroundColor: colors.normalGreen }
	},
	blue: {
		button: { backgroundColor: '#7289da' }
	},
	gray: { button: { backgroundColor: 'rgba(255,255,255,.1)' } },
	transparent: {
		button: {
			backgroundColor: 'rgba(255,255,255,.1)'
		}
	},
	disable: {
		button: {
			backgroundColor: 'rgba(255,255,255,.2)'
		}
	}
};

export const getStyles = (theme, size) => {
	let styles = {};
	styles = _.merge(styles, defaultStyles, themes[theme]);
	styles = _.merge(styles, sizes[size]);
	return StyleSheet.create(styles);
};

const paramsSize = {
	xl: { icon: 38 },
	l: { icon: 32 },
	m: { icon: 26 },
	ms: { icon: 24 },
	s: { icon: 22 },
	xs: { icon: 14 }
};

const themeLeng = [
	'black',
	'darkBlue',
	'orange',
	'lightOrange',
	'lightBlue',
	'red',
	'wechat',
	'qq',
	'weibo',
	'white',
	'moss'
];
const defaultColor = (theme) => {
	if (indexOf(themeLeng[theme]) !== 0) {
		return { color: '#fff' };
	}
};

const paramsColor = {
	darkBlue: {
		hover: colors.basic
	},
	disable: {
		color: '#aaa',
		hover: '#aaa'
	},
	transparent: { color: '#aaa' }
};

export const getParams = (theme, size) => {
	let params = {};
	params = _.merge(params, defaultColor[theme], paramsColor[theme]);
	params = _.merge(params, paramsSize[size]);
	return params;
};
