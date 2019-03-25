import React from 'react';
import Text from '../Text/Text';
import View from '../View/View';
import getStyles from './styles/Badge/styles';

export default (props) => {
	let { size, theme, content, fontSize } = props;
	if (!content) return null;
	const styles = getStyles(theme || 'red', size || 's');

	return (
		<View style={styles.content}>
			{size !== 's' && (
				<Text style={[ styles.text, { fontSize: fontSize || 10 } ]}>{content > 99 ? '99+' : content}</Text>
			)}
		</View>
	);
};
