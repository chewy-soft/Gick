import React from 'react';
import Svg from './Svg';
import mapping from './mappings';
import MateIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default (props) => {
	const { name, size, color } = props;
	if (mapping[name]) {
		return (
			<MateIcon
				name={(name !== undefined && mapping[name]) || 'link'}
				size={size || 30}
				color={color || '#fff'}
			/>
		);
	}

	return <Svg svg={(name !== undefined && name) || 'monster'} {...props} />;
};
