import React from 'react';
import { View } from 'react-native';

export default (props) => {
	if (props.customize) {
		return <div style={props.customize}>{props.children}</div>;
	}
	return (
		<View
			style={[
				props.style,
				{
					backgroundImage: `linear-gradient(${(props.theme == 'topToBottom' && 'to bottom') ||
						'to bottom right'}, ${props.start},${props.end})`
				}
			]}
		>
			{props.children}
		</View>
	);
};
