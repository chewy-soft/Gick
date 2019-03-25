import colors from '../../../../colors';
import c from '../../../../lib/css';

export default {
	bar: { minHeight: undefined },
	contianer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: colors.normalGray,
		borderRadius: undefined,
		paddingHorizontal: undefined,
		paddingVertical: undefined,
		minHeight: undefined,
		marginHorizontal: undefined 
	},
	inputContent: {
		flex: 1,
		borderLeftWidth: 1,
		marginHorizontal: undefined,
		borderColor: 'transparent',
		justifyContent: 'center',
		borderColor: 'rgba(255,255,255,.2)',
		paddingHorizontal: undefined
	},
	add: {
		justifyContent: 'center',
		alignItems: 'center',
		width: undefined,
		backgroundColor: 'rgb(104, 118, 138)',
		borderRadius: undefined,
		height: undefined
	},
	addmenu: { marginBottom: 4 },
	line: {
		backgroundColor: 'rgba(255,255,255,.1)',
		height: 1,
		width: '98%',
		marginHorizontal: 'auto',
		marginBottom: undefined
	},
	picker: {
		height: undefined,
		width: '100%',
		backgroundColor: colors.background
	},
	startInfo: {
		color: colors.lightOrange,
		marginTop: undefined,
		marginLeft: undefined
	},
	infoContent: { height: undefined, maxHeight: undefined },
	closeButton: { position: 'absolute', top: -7, left: 4 },
	sendButton: { position: 'absolute', bottom: 0, right: 4 },
	mobileCounter: { flex: 1, ...c.flex_row_center },
	counterNum: { color: '#ccc', fontSize: 12, marginLeft: 4 },
	timer: { backgroundColor: 'transparent' },
	send: { flexDirection: 'row' },
	sentSetting: {
		backgroundColor: '#fff',
		borderRadius: 6,
		position: 'absolute',
		right: 0,
		bottom: 64,
		overflow: 'hidden'
	},
	settingList: { paddingHorizontal: 6, paddingVertical: 4 }
};
