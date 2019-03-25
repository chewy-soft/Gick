import React from 'react';
import { ScrollView, Platform, View } from 'react-native';
import ScrollFooter from './parts/ScrollFooter';

export default (props) => {
	const { style, taps, horizontal, underLine } = props;

	if (Platform.OS == 'web') {
		return (
			<div
				style={{
					overflowY: 'overlay',
					overflowY: 'scroll',
					overflowX: 'hidden',
					width: '100%',
					height: '100%'
				}}
			>
				<View style={style} {...props}>
					{props.children}
					{underLine && <ScrollFooter />}
				</View>
			</div>
		);
	}
	return (
		<ScrollView
			keyboardShouldPersistTaps={taps || 'never'}
			style={style}
			horizontal={horizontal}
			contentContainerStyle={style}
			{...props}
		>
			{props.children}
			{underLine && <ScrollFooter />}
		</ScrollView>
	);
};
