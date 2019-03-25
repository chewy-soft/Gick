import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';
import css from '../../lib/css';
import BasicBackground from '../Paper/BasicBackground';
import Symbol from '../Symbol';

const styles = StyleSheet.create({
	container: { width: '100vw', height: '100vh', flex: 0, flexBasis: 'auto', ...css.flex_center },
	textContent: { marginTop: 60, alignItems: 'center' },
	title: { marginLeft: 12, fontSize: 26, color: '#fff', fontWeight: 'bold', letterSpacing: 2 },
	subTitle: { color: '#aaa', letterSpacing: 1, fontSize: 16, marginTop: 20 },
	load: { paddingBottom: 40 },
	titleContent: { ...css.flex_row_center, ...css.margin_r('15%'), width: '100%' }
});

export default (props) => (
	<BasicBackground style={styles.container}>
		<View style={{ ...css.flex_row }}>
			<Text style={[ styles.title, styles.load ]}>LOADING...</Text>
		</View>
		<ActivityIndicator size="large" />
		{process.env.RESOLUTION !== 'mobile' && (
			<View style={styles.textContent}>
				<View style={styles.titleContent}>
					<Symbol name="logo_m" size={46} />
					<Text style={styles.title}>Gick桌游-找到更多好玩的 !</Text>
				</View>
				<Text style={styles.subTitle}>Play with Analog ・ アナログゲームの世界へ</Text>
			</View>
		)}
		{process.env.RESOLUTION == 'mobile' && (
			<View style={styles.textContent}>
				<Symbol name="logo_m" size={60} />
				<Text style={[ styles.title, { paddingTop: 20 } ]}>Gick桌游</Text>
				<Text style={styles.title}>找到更多好玩的 !</Text>
				<Text style={styles.subTitle}>Play with Analog</Text>
				<Text style={styles.subTitle}>アナログゲームの世界へ</Text>
			</View>
		)}
	</BasicBackground>
);
