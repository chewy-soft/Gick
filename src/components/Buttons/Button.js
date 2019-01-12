import React from 'react';
import Text from '../Text/Text';
import Symbol from '../Symbol';
import View from '../View/View';
import { getStyles, getParams } from './styles/Button/styles';
import HoverView from '../View/HoverView';

export default (props) => {
	const { theme, onPress, content, disabled, icon, size, iconColor } = props;
	const defaultTheme = disabled ? 'disabledTheme' : 'blue';
	const styles = getStyles(theme || defaultTheme, size || 'm');
	const params = getParams(size || 'm');

	return (
		<View style={styles.content}>
			<HoverView hoverColor={(disabled && 'disabledTheme') || theme || 'blue'}>
				<View style={styles.inside} onPress={onPress} disabled={disabled}>
					{icon !== undefined &&
					icon !== null && (
						<View style={[ styles.icon, content && styles.iconPad ]}>
							<Symbol name={icon} color={iconColor || '#fff'} size={params.iconSize} />
						</View>
					)}
					{icon === null && <View style={styles.null} />}
					<Text style={styles.text}>{content}</Text>
				</View>
			</HoverView>
		</View>
	);
};
