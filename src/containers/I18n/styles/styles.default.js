import c from '../../../lib/css';
import colors from '../../../colors';

export default {
	descriptionHeader: { fontSize: 14, marginRight: 'auto', color: '#fff' },
	descriptionValue: {
		color: '#fff',
		fontSize: 14,
		paddingTop: undefined,
		lineHeight: undefined
	},
	fullButton: { marginLeft: 'auto', marginTop: 4, ...c.flex_row_center },
	descriptionText: { color: '#ddd', fontSize: 14 },
	widgetInside: { paddingTop: undefined },
	widget: {
		backgroundColor: 'rgba(0,0,0,.4)',
		borderRadius: 6,
		paddingVertical: 12,
		paddingHorizontal: 16,
		boxShadow: '2px 2px 4px rgba(0,0,0,.4)'
	},
	header: {
		borderBottomWidth: 1,
		borderColor: colors.basic,
		...c.flex_row_center,
		paddingBottom: 8
	}
};
