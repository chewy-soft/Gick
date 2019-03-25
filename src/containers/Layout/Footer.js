import React from 'react';
import colors from '../../colors';
import { StyleSheet, Text, View, Image } from 'react-native';
import ExternalLinkView from '../../components/View/ExternalLinkView';
import beian from '../../fonts/base64/beian.png';
import HandlerContext from '../../context/HandlerContext';
import Minimized from '../../containers/TaskBar/Minimized';

const styles = StyleSheet.create({
	footer: {
		marginTop: 'auto',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: colors.background,
		borderTopWidth: 1,
		borderColor: '#4A4C48',
		height: 41,
		justifyContent: 'flex-end'
	},
	mainFooter: { height: 41, justifyContent: 'flex-end' },
	lawInfo: { marginRight: 'auto' },
	beian: { width: 20, height: 20 },
	loginPage: {
		position: 'absolute',
		justifyContent: 'center',
		paddingTop: 4,
		bottom: 0,
		height: 22,
		left: 0,
		right: 0,
		zIndex: 1,
		borderTopWidth: 0,
		flex: 1,
		flexWrap: 'wrap',
		backgroundColor: 'rgba(0,0,0,.4)'
	},
	link: {
		color: 'rgba(255,255,255,.6)',
		paddingHorizontal: 8,
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 13
	},
	bar: {
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
		marginLeft: process.env.RESOLUTION !== 'mobile' && 390,
		marginRight: process.env.RESOLUTION !== 'mobile' && 320
	}
});

const MainPage = (props) => (
	<View style={[ styles.footer, styles.mainFooter ]}>
		<View style={styles.bar}>
			<Minimized
				message={props.mytopic.message}
				active={props.mytopic.active}
				onPress={
					props.mytopic.active ? (
						() => props.router.toChannel(props.mytopic.active)
					) : (
						() => props.router.toTopicCreate()
					)
				}
				badge={props.mytopic.unread_count}
			/>
		</View>
	</View>
);

const LoginPage = (props) => (
	<View style={[ styles.footer, styles.loginPage ]}>
		<View>
			<ExternalLinkView url="http://www.chewy-soft.cn/">
				<Text style={styles.link}>Copyright © 2019 Chewy Soft 版权所有</Text>
			</ExternalLinkView>
		</View>
		<View>
			<ExternalLinkView url="http://www.miitbeian.gov.cn/">
				<Text style={styles.link}>沪ICP备16034954号-3</Text>
			</ExternalLinkView>
		</View>
		<View style={{ flexDirection: 'row' }}>
			<Image source={beian} style={styles.beian} />
			<ExternalLinkView url="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402004138">
				<Text style={styles.link}>沪公网安备 31010402004138号</Text>
			</ExternalLinkView>
		</View>
	</View>
);

export default class Footer extends React.Component {
	static contextType = HandlerContext;
	render() {
		const { router } = this.context;
		if (this.props.position == 'loginPage') {
			return <LoginPage {...this.props} />;
		} else {
			return <MainPage {...this.props} router={router} />;
		}
	}
}
