import React from 'react';
import LinearGradientView from '../View/LinearGradientView';

export default (props) => {
	const { theme, style } = props;
	const themes = {
		blue: {
			start: '#484C50',
			end: '#040B11'
		},
		black: {
			start: '#4d4d4d',
			end: '#000'
		}
	};
	const _theme = themes[theme || 'black'];
	return (
		<LinearGradientView start={_theme.start} end={_theme.end} style={[ style, { flex: 1 } ]}>
			{props.children}
		</LinearGradientView>
	);
};
