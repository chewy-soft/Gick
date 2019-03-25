import React from 'react';
import Text from '../Text/Text';
import { getStyles, getParams } from './styles/styles';
import Avatar from '../Avatar';
import View from '../View/View';
import HoverView from '../View/HoverView';
import Symbol from '../Symbol';
import _ from 'lodash';

export default (props) => {
	const { onPress, avatar, online, sub, text, downSub, theme, size, style, icon, iconColor, wrap } = props;
	const themes = {
		light: { theme: 'light', state: 'light', hover: 'blue' },
		blue: { theme: 'blue', state: 'blue', hover: 'black' },
		dark: { theme: 'lightBlue', state: 'lightBlue' },
		default: { theme: 'dark', state: 'blue', hover: 'gray' }
	};
	const styles = getStyles(size || 'm', themes[theme] || 'dark');
	const params = getParams(size || 'm', themes[theme] || 'dark');

	return (
		<HoverView hoverColor={(!_.isNil(onPress) && themes[theme || 'default'].hover) || 'falt'} theme="list">
			<View style={[ styles.container, style ]} onPress={onPress}>
				{avatar && (
					<View style={styles.avatar}>
						<Avatar
							id={avatar}
							theme={themes[theme || 'default'].state}
							size={size}
							online={online}
							{...props}
						/>
					</View>
				)}
				{icon && (
					<View style={styles.avatar}>
						<Symbol name={icon} size={params.icon || 22} color={iconColor || params.iconColor} />
					</View>
				)}
				<View style={styles.content}>
					{sub !== '' &&
					sub && (
						<Text style={styles.sub} numberOfLines={1}>
							{sub}
						</Text>
					)}
					{text !== '' &&
					text && (
						<Text style={styles.text} numberOfLines={1}>
							{text}
						</Text>
					)}
					{downSub !== '' &&
					downSub && (
						<Text style={styles.downSub} numberOfLines={wrap ? undefined : 1}>
							{downSub}
						</Text>
					)}
				</View>
			</View>
		</HoverView>
	);
};
