import colors from '../../../../colors';
export default {
	table: { marginVertical: 2 },
	tableHead: {
		backgroundColor: colors.moss,
		flexDirection: 'row',
		alignItems: 'center'
	},
	th: {
		paddingHorizontal: 8,
		paddingVertical: 6,
		flexBasis: '20%',
		flexGrow: 1,
		flexShrink: 0
	},
	td: { color: '#fff', fontSize: 16 },
	tr: {
		flexBasis: '20%',
		flexGrow: 1,
		flexShrink: 0,
		paddingHorizontal: 8,
		paddingVertical: 6,
		minHeight: undefined
	},
	text: { fontSize: 14 },
	body: { backgroundColor: '#ddd' },
	historyCell: {
		alignItems: 'flex-start',
		borderBottomWidth: 1,
		borderColor: colors.basic,
		flex: 1
	},
	row: { flexDirection: 'row', alignItems: 'center' },
	return: { color: colors.lightBlue, fontSize: 14 }
};
