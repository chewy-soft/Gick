// import React from 'react';
// import Text from '../Text/Text';
// import { StyleSheet } from 'react-native';
// import NavBar from '../../components/ToolBar/NavBar';
// import NavItem from '../../components/ToolBar/NavItem';
// import Avatar from '../../components/Avatar';
// import SimulationSearchBar from '../Search/SimulationSearchBar';
// import View from '../../components/View/View';
// import DropDown from '../../components/DropDown';
// import Symbol from '../../components/Symbol';

// const styles = StyleSheet.create({
// 	logo: {
// 		fontSize: 14,
// 		fontWeight: 'bold',
// 		letterSpacing: 1,
// 		paddingLeft: 4,
// 		color: 'rgba(255,255,255,.8)'
// 	},
// 	itemContent: { flexDirection: 'row', flex: 1, alignItems: 'center' },
// 	items: {
// 		flexDirection: 'row',
// 		width: 100,
// 		alignItems: 'center',
// 		position: 'relative'
// 	},
// 	more: {
// 		position: 'absolute',
// 		right: 10,
// 		top: 6
// 	}
// });

// export default (props) => {
// 	const { router, me, isLogin, t } = props;
// 	return (
// 		<NavBar
// 			logo={
// 				<View onPress={router.toTop}>
// 					<Text style={styles.logo}>Gick</Text>
// 				</View>
// 			}
// 			component={
// 				<View style={styles.itemContent}>
// 					<SimulationSearchBar
// 						placeholder="搜搜看"
// 						onPress={() =>
// 							router.toSearch({
// 								type: 'boardgame',
// 								onSelect: (boardgame) => router.toChannel(boardgame._id)
// 							})}
// 					/>
// 					<View style={styles.items}>
// 						<NavItem icon="addOutLine" onPress={router.toChannelCreate} />
// 						<View
// 							style={{
// 								width: 50,
// 								flexDirection: 'row',
// 								alignItems: 'center'
// 							}}
// 						>
// 							{isLogin && (
// 								<NavItem
// 									noticeSize="s"
// 									onPress={(e) => router.toMyPage()}
// 									content={<Avatar size="xs" id={me && me.avatar} />}
// 								/>
// 							)}
// 							{!isLogin && <NavItem onPress={router.toLogin} icon="login" />}
// 						</View>
// 					</View>
// 				</View>
// 			}
// 		/>
// 	);
// };
