import c from '../../../../lib/css';
import colors from '../../../../colors';
export default {
	cell: { ...c.margin_r('auto') },
	container: { ...c.flex_row },
	content: {
		borderWidth: 1,
		width: 600,
		flexShrink: 1,
		borderColor: colors.loader
	},
	logHeader: { backgroundColor: 'rgba(255,255,255,.1)', padding: 12 },
	logSpec: { ...c.flex_row, alignItems: 'flex-end' },
	line: {
		height: 1,
		backgroundColor: colors.loader,
		width: '90%',
		...c.margin_r('auto'),
		...c.margin_l(8)
	},
	time: { color: '#fff', fontSize: 12, marginTop: 6, ...c.margin_r(4) },
	value: {
		...c.flex_row,
		alignItems: 'flex-end',
		padding: 12,
		flex: 1,
		flexWrap: 'wrap'
	},
	log: { color: '#ccc', marginBottom: 8, fontSize: undefined },
	badgeContent: { marginBottom: undefined, marginRight: 'auto', flexDirection: 'row' },
	channelCard: { height: undefined },
	channelConnected: { height: undefined }
};

export const themes = {
	new: {
		circle: {
			width: 16,
			height: 16,
			borderRadius: 8,
			backgroundColor: 'orange'
		}
	},
	start: {
		circle: {
			width: 18,
			height: 18,
			borderRadius: 9,
			backgroundColor: colors.moss
		}
	},
	default: {
		circle: {
			backgroundColor: colors.loader,
			width: 10,
			height: 10,
			borderRadius: 5
		}
	}
};
