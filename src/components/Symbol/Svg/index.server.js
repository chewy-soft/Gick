import React from 'react';
import sources from './source';

export default (props) => {
	const { size, svg, name } = props;
	const svg_name = sources[svg] || name || 'logo_s';
	return <img style={{ height: size, width: size }} src={svg_name} />;
};
