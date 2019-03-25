import React from 'react';
import Text from '../Text/Text';
import Symbol from '../Symbol';
import View from '../View/View';
import { getStyles, getParams } from './styles/Button/styles';
import HoverView from '../View/HoverView';

export default (props) => {
	const { theme, onPress, content, disabled, icon, size, iconColor, shape, component } = props;
	const defaultTheme = disabled ? 'disabledTheme' : 'blue';
	const styles = getStyles(theme || defaultTheme, size || 'm');
	const params = getParams(size || 'm');

	return (
		<View style={[ styles.content, shape == 'square' && styles.square ]} onPress={onPress} disabled={disabled}>
			<HoverView hoverColor={(disabled && 'flat') || theme || 'blue'}>
				<View style={styles.inside}>
					{icon !== undefined &&
					icon !== null && (
						<View style={[ styles.icon, content && styles.iconPad ]}>
							<Symbol name={icon} color={iconColor || '#fff'} size={params.iconSize} />
						</View>
					)}
					{icon === null && <View style={styles.null} />}
					{!component && <Text style={styles.text}>{content}</Text>}
					{component}
				</View>
			</HoverView>
		</View>
	);
};
