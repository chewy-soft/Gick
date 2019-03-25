import React from 'react';
import Text from '../../components/Text/Text';
import View from '../../components/View/View';
import SquareButton from '../../components/Buttons/SquareButton';
import styles from './styles/AddMenu/styles';

const Item = (props) => (
	<View style={styles.item}>
		<SquareButton icon={props.icon} theme={'lightGray'} onPress={props.onPress} hoverColor={props.theme} />
		<Text style={styles.title}>{props.name}</Text>
	</View>
);

export default (props) => {
	const { menus } = props;
	return (
		<View style={styles.container}>
			{_.map(menus, (menu) => (
				<Item key={menu.name} icon={menu.icon} theme={menu.theme} name={menu.name} onPress={menu.onPress} />
			))}
			{/* <Item icon="camera" theme="blue" name="拍摄" onPress={onPress} />
      <Item icon="report" theme="darkBlue" name="举报" onPress={onPress} />  */}
		</View>
	);
};
