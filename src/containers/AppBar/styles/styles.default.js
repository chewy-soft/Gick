import colors from '../../../colors';
import c from '../../../lib/css';

export default {
	tabs: {
		height: 42,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderTopWidth: 1,
		borderTopColor: 'rgba(255,255,255,.2)'
	},
	menus: {
		backgroundColor: '#fff',
		borderRadius: undefined,
		paddingVertical: undefined
	},
	list: { paddingVertical: undefined, paddingHorizontal: undefined },
	channelNavItem: { ...c.flex_center, ...c.padding_r(12), height: '100%' },
	channelShareMenu: { marginLeft: 'auto', marginTop: 42, marginRight: 4 },
	badge: { ...c.absolute, right: -8, top: 0 },
	back: { ...c.flex_row_center },
	backText: { color: '#fff', marginLeft: 8, fontSize: 14 },
	selectBox: { width: undefined, ...c.flex_row_between },
	previewButton: { margin: 'auto', marginRight: undefined }
};
