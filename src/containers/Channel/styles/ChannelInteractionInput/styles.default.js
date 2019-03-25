import colors from '../../../../colors';
export default {
	boarderWarning: {
		borderColor: 'yellow',
		borderWidth: 1,
		margin: -1
	},
	button: {},
	score: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		paddingVertical: 12
	},
	commend: {
		fontSize: undefined,
		color: '#fff',
		marginLeft: 4,
		marginBottom: 12
	},
	info: { flexDirection: 'row', marginRight: 6, flex: 1 },
	content: { flex: 1, paddingHorizontal: undefined },
	loader: {
		justifyContent: 'center'
	},
	footer: {
		marginTop: 'auto',
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		borderTopWidth: 1,
		borderColor: colors.normalGray,
		padding: 4
	},
	link: { color: colors.lightBlue },
	text: { color: '#ccc', fontSize: 12 },
	comment: { paddingHorizontal: undefined }
};
