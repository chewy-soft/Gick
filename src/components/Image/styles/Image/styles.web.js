import { StyleSheet } from 'react-native';
import _ from 'lodash';
import c from '../../../../lib/css';

const sizes = {
	small: { image: { width: 78, height: 78 } },
	middle: { image: { width: 270, height: 280 } },
	tiny: { image: { width: 50, height: 50 } },
	card_small: { image: { width: 128, height: 85 } }
};

export const getStyles = (size) => {
	let styles = {
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			overflow: 'hidden'
		},
		background: { flex: 1, ...c.flex_center, width: '100%', overflow: 'hidden' },
		backgroundBlur: {
			width: '110%',
			height: '110%',
			margin: '-5%',
			filter: 'blur(20px)'
		},
		children: { ...c.absolute_full, ...c.flex_center },
		loader: {
			...c.absolute_full,
			minHeight: 20,
			minWidth: 20,
			justifyContent: 'center',
			alignItems: 'center',
			flex: 1
		},
		error: {
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: 'rgba(0,0,0,.2)'
		},
		monster: {
			...c.absolute,
			opacity: 0.4
		},
		leftTop: {
			top: -2,
			left: -16,
			transform: [ { rotate: '10deg' } ]
		},
		leftBottom: {
			bottom: -16,
			left: 21,
			transform: [ { rotate: '-15deg' } ]
		},
		rightTop: {
			bottom: 0,
			right: 32,
			transform: [ { rotate: '-10deg' } ]
		},
		rightBottom: {
			top: 18,
			right: 3,
			transform: [ { rotate: '-80deg' } ]
		},
		top: {
			left: 120,
			top: -10,
			transform: [ { rotate: '180deg' } ]
		}
	};
	styles = _.merge(styles, sizes[size]);
	return StyleSheet.create(styles);
};

const params = {
	middle: { svg: 250, leftTop: 96, bottom: 64, top: 76 },
	small: { svg: 78, leftTop: 96, bottom: 64, top: 76 },
	tiny: { svg: 50, leftTop: 96, bottom: 64, top: 76 },
	card_small: { svg: 60, leftTop: 96, bottom: 64, top: 76 },
	auto: { svg: 90, leftTop: 96, bottom: 64, top: 76 }
};

export const getParams = (size) => {
	return params[size];
};
