import React from 'react';
import View from '../../components/View/View';
import styles from './styles/styles';
import List from '../../components/List';
import colors from '../../colors';
import _ from 'lodash';

export default (props) => {
	const menus = [];
	menus.push(
		{
			key: 'wechat',
			icon: 'wechat',
			color: colors.weixin,
			label: '微信',
			onPress: props.showShareQR
		},
		{
			key: 'wechat',
			icon: 'wechat',
			color: colors.lightGreen,
			label: '朋友圈',
			onPress: props.showShareQR
		},
		{
			key: 'qq',
			icon: 'qq',
			color: colors.qq,
			label: 'QQ',
			onPress: () => alert('share to qq(id)')
		},
		{
			key: 'weibo',
			icon: 'weibo',
			color: colors.weibo,
			label: '微博',
			onPress: () => alert('share to weibo(id)')
		}
	);
	return (
		<View style={styles.menus}>
			{_.map(menus, (menu) => (
				<List
					text={menu.label}
					key={menu.key}
					icon={menu.icon}
					theme="light"
					size="s"
					iconColor={menu.color}
					style={styles.list}
					onPress={menu.onPress}
				/>
			))}
		</View>
	);
};
