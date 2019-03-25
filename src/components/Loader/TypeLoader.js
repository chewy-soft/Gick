import React from 'react';
import Text from '../Text/Text';
import { StyleSheet } from 'react-native';
import View from '../../components/View/View';
import styles from './styles/TopicBar/styles';
import c from '../../lib/css';

const styles = StyleSheet.create({
	typeContent: {
		...c.flex_row_center,
		paddingTop: 2
	},
	typing: { paddingTop: 2, color: '#bbb', fontSize: 12 },
	suffix: { paddingLeft: 4, fontSize: 12, color: '#aaa' }
});

export default (props) => (
	<View style={styles.typeContent}>
		<Text style={styles.typing}>{props.userComponent}</Text>
		<Text style={styles.suffix}>正在输入...</Text>
	</View>
);

export const ColorLoader = (props) => <View />;
