import colors from '../../../../colors';
import c from '../../../../lib/css';

export default {
	container: {
		padding: undefined,
		flex: 1
	},
	content: {
		...c.flex_row,
		padding: undefined,
		flexWrap: 'wrap',
		flex: 1,
		alignItems: 'flex-start'
	},
	previewContent: {
		width: undefined,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: undefined,
		marginVertical: undefined
	},
	delete: { ...c.absolute, right: undefined, top: undefined, zIndex: 1 },
	image: {
		height: undefined,
		width: undefined
	},
	imageAdd: {
		height: undefined,
		width: undefined,
		marginHorizontal: undefined,
		marginVertical: undefined,
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageback: {
		borderColor: '#aaa',
		borderWidth: 1,
		...c.flex_center,
		width: undefined,
		height: undefined
	},
	extension: { maxWidth: undefined },
	button: { marginTop: undefined }
};
