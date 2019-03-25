import React from 'react';
import { Platform } from 'react-native';
import View from '../../components/View/View';
import Footer from './Footer';
import colors from '../../colors';

const styles = {
	layout: {
		width: '100vw',
		position: 'relative',
		height: '100vh',
		backgroundColor: colors.background
	},
	full: { flex: 1 }
};

export default (props) => {
	if (Platform.OS == 'web') {
		return (
			<View style={styles.layout}>
				{props.children}
				<Footer position="loginPage" />
			</View>
		);
	} else {
		return props.children;
	}
};
