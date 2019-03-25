import colors from '../../../../colors';
import c from '../../../../lib/css';

export default {
	bottom: { marginTop: 'auto' },
	textHighLight: { color: '#fff' },
	items: {
		marginTop: 'auto',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingRight: 6
	},
	item: { flexDirection: 'row', alignItems: 'center' },
	score: {
		fontWeight: 'bold',
		paddingLeft: 2,
		fontSize: undefined,
		color: colors.lightOrange
	},
	suffix: { color: '#aaa', paddingLeft: undefined, fontSize: 12 },
	tag: {
		height: 18,
		width: 54,
		paddingHorizontal: 4,
		alignItems: 'center',
		fontSize: 14,
		color: '#fff',
		borderBottomWidth: 2,
		borderLeftWidth: 2,
		borderColor: 'rgba(0,0,0,.1)'
	},
	menuItem: {
		flex: 1,
		padding: 4,
		...c.flex_center
	},
	likes: { ...c.flex_row_center, paddingLeft: 4, paddingTop: 4 },
	live: {
		marginLeft: 'auto',
		...c.flex_row_center,
		backgroundColor: colors.normalGray,
		paddingHorizontal: 6,
		...c.padding_l(2)
	},
	livetext: { color: '#fff', fontSize: 12, marginLeft: 2 },
	timer: { alignItems: 'center', paddingHorizontal: 6 },
	channelList: { height: undefined, flex: 0, flexBasis: 'auto', width: '100%' },
	channelListContent: { ...c.flex_row_center, flex: 1 },
	channelListC: {
		justifyContent: 'space-around',
		marginLeft: undefined,
		height: undefined,
		flex: 1
	},
	channelListT: { fontSize: undefined, color: '#9F9F9F', marginRight: undefined },
	channelName: { fontSize: undefined, color: '#fff', flex: 1 },
	channelDes: { fontSize: undefined, color: '#aaa', flex: 1, width: undefined },
	notice: { paddingRight: undefined }
};
