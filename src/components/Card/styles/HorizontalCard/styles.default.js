import colors from '../../../../colors';
import c from '../../../../lib/css';
export default {
	container: {
		height: 87,
		overflow: 'hidden',
		backgroundColor: '#171717'
	},
	gameCard: {
		...c.flex_row,
		position: 'relative',
		flex: 1,
		height: '100%'
	},
	cardCell: {
		minWidth: 306,
		width: 390,
		maxWidth: 390
	},
	leftContainer: {
		...c.flex_center,
		width: 128
	},
	rightContainer: {
		flex: 1,
		padding: 4,
		height: '100%',
		overflow: 'hidden',
		justifyContent: 'space-between'
	},
	textHover: { color: '#fff' },
	title: { fontSize: 15, color: '#ccc' },
	subTitle: { fontSize: 12, color: '#767676' },
	standLine: {
		...c.absolute,
		backgroundColor: colors.background,
		height: 70,
		width: 1,
		left: 0,
		alignSelf: 'center'
	},
	line: {
		...c.absolute,
		backgroundColor: colors.background,
		height: 1,
		width: '90%',
		bottom: 0,
		alignSelf: 'center'
	},
	more: {
		...c.absolute,
		width: 28,
		height: 30,
		right: 0,
		top: 4
	},
	menus: {
		width: 85,
		...c.flex_center
	},
	menu: {
		...c.absolute_full,
		...c.flex_row,
		justifyContent: 'flex-end',
		backgroundColor: 'rgba(0,0,0,.4)',
		overflow: 'hidden'
	},
	close: {
		backgroundColor: colors.darkBlue,
		height: '100%',
		width: 25,
		...c.flex_center
	},
	menuLabel: { color: '#fff', fontSize: 12 },
	headerImage: { width: 128, height: 85, flex: 0, flexBasis: 'auto' }
};
