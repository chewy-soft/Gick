import colors from '../../../../colors';
import c from '../../../../lib/css';

export default {
	headerContent: { ...c.absolute_full },
	footer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		paddingBottom: 1,
		flex: 1,
		marginTop: 4
	},
	liveBorder: { borderTopWidth: 4, borderColor: colors.warning },
	tag: { marginRight: 4, marginBottom: 4 },
	tagText: {
		color: '#fff',
		fontSize: 12,
		lineHeight: 14,
		paddingLeft: 4,
		textAlignVertical: 'center'
	},
	loader: {
		backgroundColor: colors.loader,
		height: 22,
		width: 84,
		borderRadius: 4
	},
	live: {
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
	likes: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,.4)',
		paddingHorizontal: 6,
		paddingVertical: 2,
		marginLeft: 'auto'
	},
	owner: {
		...c.absolute,
		top: undefined,
		overflow: 'hidden',
		width: undefined,
		height: undefined
	},
	timer: { marginLeft: 'auto', marginTop: 'auto', width: undefined },
	image: { width: 240, height: 200 },
	noimage: { height: undefined },
	image_loader: {
		height: 300,
		width: 240,
		alignItems: 'center',
		justifyContent: 'center'
	},
	inside: { maxWidth: undefined, overflow: 'hidden' }
};
