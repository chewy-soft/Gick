import c from '../../../../lib/css';

export default {
	edit: {
		width: undefined,
		height: undefined,
		position: 'relative',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: undefined
	},
	blue: { backgroundColor: '#80CBC4' },
	transparent: {
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderColor: '#aaa'
	},
	score: {
		color: '#fff',
		opacity: 1
	},
	scoreEdit: {
		alignItems: 'center',
		justifyContent: 'center',
		opacity: undefined,
		...c.absolute
	}
};
