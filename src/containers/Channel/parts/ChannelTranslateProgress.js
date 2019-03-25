import _ from 'lodash';
import React from 'react';
import { StyleSheet } from 'react-native';
import SimpleBar from '../../../components/Ratio/SimpleBar';
import Symbol from '../../../components/Symbol';
import Text from '../../../components/Text/Text';
import View from '../../../components/View/View';

const styles = StyleSheet.create({
	editStateContent: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 4,
		marginBottom: 2
	},
	label: { color: '#fff', fontSize: 12 },
	help: {
		color: '#ccc',
		fontSize: 12,
		marginLeft: 2,
		textAlignVertical: 'center'
	}
});

export default (props) => {
	const { progress, t, router, id } = props;
	return (
		<View onPress={() => router.toChannelEdit(id)}>
			<View style={styles.editStateContent}>
				<Text style={styles.label}>
					{t('资料编辑完成度', 'zh')}({progress * 100}%)：
				</Text>
				{/* <Text>
					<Symbol name="language" size={12} />
					<Text style={styles.help}>{t('协力翻译进程', 'zh')}</Text>
				</Text> */}
			</View>
			<SimpleBar progress={progress} size="s" />
		</View>
	);
};
