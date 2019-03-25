import React from 'react';
import View from './View';

export default (props) => (
	<View {...props} style={[ { flex: 1 }, props.style ]}>
		{props.children}
	</View>
);
