import colors from '../../../../colors';
import c from '../../../../lib/css';

export default {
	container: { height: undefined },
	descritpion: {
		paddingVertical: undefined
	},
	line: {
		height: 1,
		backgroundColor: colors.background,
		width: '100%',
		marginTop: 'auto'
	},
	title: {
		flexDirection: 'row',
		alignItems: 'center',
		margin: undefined
	},
	mainTitle: {
		color: '#fff',
		fontSize: undefined,
		marginRight: undefined,
		fontWeight: 'bold'
	},
	owner: { ...c.flex_row_center, marginRight: 'auto' },
	subTitle: { color: '#fff', fontSize: undefined, paddingRight: undefined },
	fullButton: { ...c.flex_row_center, marginLeft: 'auto' },
	translate: { marginTop: undefined, width: '96%' },
	descriptionText: { color: '#aaa', fontSize: undefined },
	headerImage: { height: undefined },
	headerContent: { width: undefined },
	stateLabel: { marginBottom: 'auto', marginTop: undefined },
	buttonGroup: { ...c.flex_row_between, flex: 1, marginTop: 'auto' },
	countNum: { color: '#fff', fontSize: 22, textAlign: 'center', paddingTop: 6 },
	countSuffix: { color: '#fff', fontSize: 12, textAlign: 'center', paddingTop: 4 },
	titleContent: { width: undefined },
	backImage: { ...c.absolute_full },
	transButton: { position: 'absolute', left: 0, top: 7 },
	transBody: { marginLeft: 68 },
	fullDescription: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		backgroundColor: 'black'
	},
	fullDesScroll: { padding: 12 },
	createInfo: { color: '#aaa', fontSize: 12, paddingTop: 4 }
};
