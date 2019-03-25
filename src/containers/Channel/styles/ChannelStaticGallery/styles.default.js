import colors from '../../../../colors';
import c from '../../../../lib/css';
export default {
	cards_content: { ...c.flex_row, ...c.flex_wrap },
	type_title: { color: '#ccc', fontSize: undefined, marginBottom: undefined },
	card_content: { marginBottom: undefined, marginRight: undefined },
	delete: {
		...c.absolute_full,
		...c.flex_center,
		backgroundColor: 'rgba(0,0,0,.6)'
	},
	add: { ...c.flex_center }
};
