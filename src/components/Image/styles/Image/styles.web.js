import { StyleSheet } from 'react-native';
import _ from 'lodash';
import c from '../../../../lib/css';
import colors from '../../../../colors';

const sizes = {
	small: { image: { width: 78, height: 78 } },
	middle: { image: { width: 270, height: 280 } },
	medium: { image: { width: 155, height: 155 } },
	tiny: { image: { width: 50, height: 50 } },
	card_small: { image: { width: 128, height: 85 } },
	auto: { image: { flex: 0, flexBasis: 'auto' } }
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
			backgroundColor: colors.basic,
			width: '100%',
			height: '100%'
		},
	};
	styles = _.merge(styles, sizes[size]);
	return StyleSheet.create(styles);
};

const params = {
	middle: { error: 118, leftTop: 96, bottom: 64, top: 76 },
	medium: { error: 90, leftTop: 96, bottom: 64, top: 76 },
	small: { error: 30, leftTop: 96, bottom: 64, top: 76 },
	tiny: { error: 25, leftTop: 96, bottom: 64, top: 76 },
	card_small: { error: 50, leftTop: 96, bottom: 64, top: 76 },
	auto: { error: 50, leftTop: 96, bottom: 64, top: 76 }
};

export const getParams = (size) => {
	return params[size];
};
