import React from 'react';
import Text from '../../components/Text/Text';
import View from '../../components/View/View';
import colors from '../../colors';
import NavBar from '../../components/ToolBar/NavBar';
import Symbol from '../../components/Symbol';
import User from '../../containers/User/User';
import _ from 'lodash';
import Report from '../../pages/Report';
import Badge from '../../components/Badges/Badge';
import HandlerContext from '../../context/HandlerContext';

const styles = {
	container: {
		position: 'relative',
		height: '100vh',
		width: '100vw'
	},
	header: { zIndex: 999 },
	logo: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	home: { fontSize: 16, paddingLeft: 12, color: '#aaa', fontWeight: 'bold' },
	center: {
		backgroundColor: colors.basic,
		flex: 1,
		height: 'calc(100% - 66px)',
		flexDirection: 'row'
	},
	footer: { zIndex: 1 },
	left: { flexShrink: 0, width: 390, maxWidth: '100%' },
	middle: { flex: 1 },
	right: { flexShrink: 0, width: 320, maxWidth: '100%' },
	badge: { position: 'absolute', left: 38, top: 4 },
	user: { flex: 1, width: 184, paddingHorizontal: 12 }
};

class LayoutWeb extends React.Component {
	static contextType = HandlerContext;

	shouldComponentUpdate(nextProps, nextState) {
		return (
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
		const { LeftComponent, RightComponent, MiddleComponent, Footer, isLogin, me, unread } = this.props;
		const { t, router, openModal } = this.context;

		let menus = [];
		menus.push(
			{
				key: 'search',
				icon: 'search',
				onPress: router.toSearch,
				tips: '搜索'
			},
			{
				key: 'create',
				icon: 'plusBox',
				onPress: () => openModal('channel_create', { type: 'channel_create', value: { ...this.props } }),
				tips: '新建'
			}
		);
		if (!isLogin)
			menus.push({
				key: 'login',
				title: '登入',
				onPress: router.toLogin
			});

		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<NavBar
						logo={
							<View style={styles.logo} onPress={router.toTop}>
								<Symbol name="logo_s" size={28} />
								<Text style={styles.home}>HOME</Text>
							</View>
						}
						items={menus}
						right={
							isLogin && (
								<View>
									<User size="s" id={me._id} style={styles.user} onPress={(e) => router.toMyPage()} />
									<View style={styles.badge}>{unread && <Badge size="s" content=" " />}</View>
								</View>
							)
						}
					/>
				</View>
				<View style={styles.center}>
					<View style={styles.left}>
						<LeftComponent router={router} />
					</View>
					<View style={styles.middle}>
						<MiddleComponent router={router} />
					</View>
					<View style={styles.right}>
						<RightComponent router={router} />
					</View>
				</View>
				<View style={styles.footer}>{Footer}</View>
			</View>
		);
	}
}

export default LayoutWeb;
