import React from 'react';
import { StyleSheet } from 'react-native';
import View from '../../components/View/View';
import colors from '../../colors';
import NavBar from '../../components/ToolBar/NavBar';
import Symbol from '../../components/Symbol';
import User from '../../containers/User/User';
import _ from 'lodash';
import ChannelCreate from '../../pages/Channel/ChannelCreate';
import Report from '../../pages/Report';
import Badge from '../../components/Badges/Badge';
import HandlerContext from '../../context/HandlerContext';

const styles = StyleSheet.create({
	container: {
		height: '100vh',
		width: '100vw'
	},
	logo: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	header: { height: 40 },
	badge: { position: 'absolute', right: 18, top: 4 },
	user: { flex: 1, paddingHorizontal: 12 },
	avatar: { maxWidth: 54, overflow: 'hidden' },
	center: {
		backgroundColor: colors.basic,
		flex: 1
	}
});

class LayoutMobile extends React.Component {
	static contextType = HandlerContext;
	state = { createBoardGame: undefined };

	shouldComponentUpdate(nextProps, nextState) {
		return (
			this.state.createBoardGame !== nextState.createBoardGame ||
			this.props.modal !== nextProps.modal ||
			this.props.isLogin !== nextProps.isLogin ||
			this.props.me !== nextProps.me ||
			this.props.unread !== nextProps.unread
		);
	}
	onCreateChannel = async (data) => {
		const channel = await this.context.createChannel(data);
		this.setState({ createBoardGame: false });
		this.context.router.toChannel(channel._id);
		this.context.closeModal('channel_create');
	};
	render() {
		const { Component, Footer, isLogin, me, unread } = this.props;
		const { t, router, closeModal, openModal, theme, modal } = this.context;

		let menus = [];
		menus.push(
			{
				key: 'search',
				icon: 'search',
				onPress: router.toSearch
			},
			{
				key: 'create',
				icon: 'plusBox',
				onPress: () => openModal('channel_create')
			}
		);
		if (!isLogin)
			menus.push({
				key: 'login',
				icon: 'login',
				onPress: router.toLogin
			});

		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<NavBar
						logo={
							<View style={styles.logo} onPress={router.toTop}>
								<Symbol name="logo_s" size={28} />
							</View>
						}
						items={menus}
						right={
							isLogin && (
								<View style={styles.avatar}>
									<User size="s" id={me._id} style={styles.user} onPress={(e) => router.toMyPage()} />
									<View style={styles.badge}>{unread && <Badge size="s" content=" " />}</View>
								</View>
							)
						}
					/>
				</View>
				<View style={styles.center}>
					<Component router={router} />
				</View>
				{theme !== 'chat' && <View>{Footer}</View>}
			</View>
		);
	}
}

export default LayoutMobile;
