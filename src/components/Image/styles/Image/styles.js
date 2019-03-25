import { StyleSheet } from 'react-native';
import _ from 'lodash';
import c from '../../../../lib/css';

const sizes = {
	small: { image: { width: 68, height: 68 } },
	middle: { image: { width: 155, height: 155 } },
	tiny: { image: { width: 50, height: 50 } },
	card_small: { image: { width: 128, height: 85 } },
	auto: { image: {} }
};

export const getStyles = (size) => {
	let styles = {
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			overflow: 'hidden'
		},
		background: { flex: 1, ...c.flex_center, width: '100%' },
		backgroundBlur: {
			opacity: 0.8
		},
		children: { ...c.absolute_full },
		loader: {
			...c.absolute_full,
			justifyContent: 'center',
			alignItems: 'center'
		},
		error: {
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: 'rgba(0,0,0,.2)'
		},
	};
	styles = _.merge(styles, sizes[size]);
	return StyleSheet.create(styles);
};

const params = {
	middle: { svg: 155, leftTop: 96, bottom: 64, top: 76 },
	small: { svg: 68, leftTop: 96, bottom: 64, top: 76 },
	tiny: { svg: 50, leftTop: 96, bottom: 64, top: 76 },
	card_small: { svg: 60, leftTop: 96, bottom: 64, top: 76 },
	auto: { svg: 90, leftTop: 96, bottom: 64, top: 76 }
};

export const getParams = (size) => {
	return params[size];
};
