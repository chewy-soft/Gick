import { StyleSheet } from 'react-native';
import colors from '../../../../colors';
export default StyleSheet.create({
	container: {
		padding: 6,
		backgroundColor: '#ccc',
		flexDirection: 'row',
		borderColor: colors.loader,
		paddingHorizontal: 24
	},
	item: { marginVertical: 3, alignItems: 'center', marginRight: 24 },
	title: { paddingTop: 3, fontSize: 12, color: colors.basic }
});
