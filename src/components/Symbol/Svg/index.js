import React from 'react';
import { Image } from 'react-native';
import sources from './source';

export default (props) => {
	const { size, svg, height, width, name } = props;
	const svg_name = sources[svg] || name || 'logo_s';
	return (
		<Image
			style={{ height: height || size, width: width || size }}
			source={{ uri: `${svg_name}` }}
			resizeMode={'contain'}
		/>
	);
};
