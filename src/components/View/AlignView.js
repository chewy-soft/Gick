import React from 'react';
import View from './View';

const sides = {
	right: { side: { marginLeft: 'auto', width: '100%' } },
	left: { side: {} },
	center: { side: {} },
	default: { side: {} }
};

export default (props) => {
	const { maxWidth, align } = props;
	const styles = sides[align || 'default'];

	return (
		<View style={[ styles.side, { maxWidth: maxWidth || '100%' } ]} {...props}>
			{props.children}
		</View>
	);
};
