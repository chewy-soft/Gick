import React from 'react';
import { Text } from 'react-native';

export default (props) => (
	<Text
		{...props}
		style={[
			{
				fontFamily: `"varela_roundregular", "Whitney", "Helvetica Neue",
  "Helvetica","Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, Roboto,
  Ubuntu, "Microsoft YaHei", "微软雅黑", "Meiryo UI",
  "Material Design Icons", "FontAwesome", "Arial", "sans-serif"`
			},
			props.style
		]}
	>
		{props.children}
	</Text>
);
