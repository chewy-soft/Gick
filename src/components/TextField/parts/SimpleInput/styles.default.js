import colors from '../../../../colors';

export default {
	input: {
		flex: 1,
		justifyContent: 'center',
		padding: 5
	},
	darkOnFocus: {
		borderBottomColor: '#fff'
	},
	dark: {
		color: '#fff',
		borderBottomColor: '#fff'
	},
	lightOnFocus: {
		borderWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#aaa'
	},
	light: {
		backgroundColor: colors.lightGray,
		borderRadius: undefined,
		height: 28,
		minHeight: 28,
		color: colors.background
	},
	gray: {
		borderBottomWidth: 0,
		backgroundColor: colors.normalGray,
		height: 28,
		minHeight: 26,
		color: '#fff'
	},
	grayOnFocus: {},
	search: {
		paddingVertical: 0,
		color: '#fff',
		borderWidth: 1,
		borderColor: '#aaa',
		borderRadius: undefined,
		height: 28,
		lineHeight: 28
	},
	searchOnFocus: {
		backgroundColor: colors.lightGray,
		color: colors.background
	},
	transparentOnFocus: {
		color: '#fff'
	},
	transparent: {
		color: '#fff'
	}
};
