import defaultStyles from './styles.default';
import { themes, defaultParams } from './styles.default';
import { StyleSheet } from 'react-native';
import _ from 'lodash';

const diff = {
	content: {
		paddingRight: 8
	},
	avatar: {
		paddingRight: 8
	}
};

const sizes = {
	xxs: {
		avatar: { marginTop: 0 },
		text: {
			fontSize: 12
		},
		sub: {
			fontSize: 13
		},
		downSub: {
			fontSize: 12
		}
	},
	xs: {
		avatar: { marginTop: 0 },
		text: {
			fontSize: 14
		},
		sub: {
			fontSize: 14
		},
		downSub: {
			fontSize: 13
		}
	},
	s: {
		avatar: { marginTop: 0 },
		text: {
			fontSize: 14
		},
		sub: {
			fontSize: 14
		},
		downSub: {
			fontSize: 13
		}
	},
	m: {
		text: {
			fontSize: 16
		},
		sub: {
			fontSize: 15
		},
		downSub: {
			fontSize: 14
		}
	},
	xxxl: {
		text: { fontSize: 18 }
	}
};

export const getStyles = (size, theme) => {
	let styles = {};
	styles = _.merge(styles, defaultStyles, diff, sizes[size]);
	styles = _.merge(styles, themes[theme]);
	return StyleSheet.create(styles);
};

const paramsDiff = {
	dark: { icon: 22 },
	light: { icon: 22 }
};
const paramsSizes = {
	xxs: {
		icon: 14
	},
	xs: {
		icon: 18
	},
	s: {
		icon: 22
	},
	m: {
		icon: 24
	},
	xxxl: {
		icon: 32
	}
};

export const getParams = (size, theme) => {
	let params = _.merge(defaultParams, paramsDiff);
	params = _.merge(params, paramsSizes[size]);
	return _.merge(params[theme]);
};
