import colors from '../../../../colors';
import c from '../../../../lib/css';
export default {
	content: { ...c.flex_row_between, height: undefined },
	content_m: { ...c.flex_row_between, height: undefined },
	panelTitle: { color: '#fff', fontSize: undefined, letterSpacing: 1 },
	sub: { marginLeft: 'auto', marginBottom: undefined },
	add: {
		...c.flex_center,
		marginBottom: undefined,
		marginRight: undefined,
		width: undefined
	},
	type_title: { color: '#ccc', fontSize: undefined, marginBottom: undefined },
	masonryTitle: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
	card: {
		height: 300,
		width: 240,
		alignItems: 'center',
		justifyContent: 'center'
	}
};
