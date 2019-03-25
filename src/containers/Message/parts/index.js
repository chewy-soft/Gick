import React from 'react';
import View from '../../../components/View/View';
import HoverView from '../../../components/View/HoverView';
import Symbol from '../../../components/Symbol';
import TimeFormat from '../../../components/Text/TimeFormat';
import UserName from '../../User/UserName';
import User from '../../User/User';
import getTheme, { styles } from './styles';

export const Menu = (props) => {
	const menus = [ { icon: 'edit', onPress: () => {} } ];
	const styles = getTheme(props.theme || 'left');
	return (
		<View style={styles.menu}>
			{_.map(menus, (i) => (
				<View onPress={i.onPress} key={i.icon}>
					<HoverView theme="message_menu">
						<Symbol name="edit" color="#fff" size={16} />
					</HoverView>
				</View>
			))}
		</View>
	);
};

export const CreateInfo = (props) => {
	const styles = getTheme(props.theme || 'left');
	return (
		<View style={styles.createInfo}>
			{props.theme !== 'left' && <UserName id={props.id} color="#aaa" fontSize={12} style={styles.userName} />}
			<TimeFormat value={props.created_at} style={styles.createAt} />
		</View>
	);
};

export const Avatar = (props) => (
	<View style={styles.avatar}>
		<User id={props.id} />
	</View>
);
