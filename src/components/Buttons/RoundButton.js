import React from 'react';
import Text from '../Text/Text';
import View from '../View/View';
import { getParams, getStyles } from './styles/RoundButton/styles';
import Symbol from '../Symbol';
import HoverView from '../View/HoverView';

export default (props) => {
	const { icon, iconColor, size, theme, onPress, content, opacity, component, shadow } = props;
	const params = getParams(theme || 'blue', size || 'm');
	const styles = getStyles(theme || 'blue', size || 'm');

	return (
		<View onPress={onPress} style={[ styles.button, shadow && styles.shadow ]} activeOpacity={opacity || 0.2}>
			<HoverView hoverColor={theme || 'blue'}>
				{icon && <Symbol name={icon} color={iconColor || params.color} size={params.icon} />}
				{content && <Text style={styles.content}>{content}</Text>}
				{component && component}
			</HoverView>
		</View>
	);
};
