import colors from '../../../../../colors';
import c from '../../../../../lib/css';
export default {
	square_name: {
		width: undefined,
		height: undefined,
		...c.flex_center,
		padding: 20
	},
	name_content: {
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'stretch',
		width: '100%'
	},
	name_after_content: {
		flexGrow: 0,
		flexShrink: 1,
		flexWrap: 'wrap',
		justifyContent: 'center'
	},
	roundCover: { paddingLeft: undefined, paddingTop: undefined },
	name_font: {
		color: '#fff',
		fontSize: undefined,
		fontWeight: 'bold'
	},
	name_after: { color: '#fff', fontSize: 18, marginLeft: 6, maxWidth: '100%' },
	image_round: { width: undefined, height: undefined, borderRadius: undefined },
	image_square: { width: undefined, height: undefined, maxHeight: undefined },
	delete: {
		...c.absolute_full,
		...c.flex_center
	},
	add: {
		...c.flex_center,
		width: undefined,
		marginBottom: undefined,
		marginRight: undefined
	},
	loader_header: {
		backgroundColor: colors.loader,
		width: 210,
		height: 118
	},
	loader_content: {
		backgroundColor: colors.loader,
		marginTop: 4,
		height: 53,
		width: 210
	},
	live: {
		position: 'absolute',
		left: 0,
		top: 6,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 8,
		paddingVertical: 4,
		backgroundColor: colors.background,
		marginRight: 'auto',
		borderWidth: 1,
		borderColor: colors.basic,
		marginLeft: -1
	},
	livetext: { color: '#fff', paddingHorizontal: 6, fontSize: 12 },
	nullContent: {
		...c.flex_row_center,
		width: 210,
		height: 118,
		borderWidth: 1,
		borderColor: colors.basic,
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,.2)'
	},
	nullt: { color: '#fff', fontSize: 16 },
	nulls: { color: '#aaa', fontSize: 14 },
	sub_info: {
		flexDirection: 'row',
		alignItems: 'flex-end'
	},
	sub_info_text: { color: '#aaa', fontSize: 12 },
	user_sub_info: {
		color: '#aaa',
		fontSize: 12
	}
};

export const BACK_COLORS = [
	colors.darkBlue,
	'#aed9d8',
	'#f2c494',
	'#f9f1e6',
	'#ff8b8b',
	'#85a9a2',
	'#414f67',
	'#512e47',
	'#178e96',
	'#cba0aa',
	'#6fbd69',
	'#dcbaae',
	'#bbabd0',
	'#91cfc9',
	'#6bb3c0',
	'#99bcdd',
	'#2d4e76',
	'#4198b9',
	'#1e5670',
	colors.loader,
	'#b8e4e5',
	'#d85c5e'
];
