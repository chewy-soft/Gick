import React from 'react';
import { StyleSheet, Text } from 'react-native';
import View from '../View/View';
import styles from './styles/SquareButton/styles';
import Symbol from '../Symbol';
import HoverView from '../View/HoverView';

export default (props) => {
	const { onPress, content, theme, icon, iconColor, hoverColor } = props;
	let button;
	switch (theme) {
		case 'moss':
			button = styles.moss;
			break;
		case 'lightMoss':
			button = styles.mossHover;
			break;
		case 'lightGray':
			button = styles.grayHover;
			break;
		case 'gray':
		default:
			button = styles.gray;
			break;
	}
	button = StyleSheet.flatten([ styles.container, button ]);
	return (
		<View style={button} onPress={onPress}>
			<HoverView hoverColor={hoverColor}>
				{icon && <Symbol name={icon} color={iconColor || 'white'} size={26} />}
				{content && <Text style={styles.text}>{content}</Text>}
			</HoverView>
		</View>
	);
};
