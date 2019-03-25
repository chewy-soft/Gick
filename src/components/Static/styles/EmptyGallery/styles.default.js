export default {
	emptyContent: { flex: 1 },
	empty: {
		width: '100%',
		flex: 1,
		paddingVertical: undefined,
		alignItems: 'center',
		justifyContent: 'center'
	},
	info: {
		flexDirection: 'row',
		width: undefined,
		alignItems: 'center'
	},
	panelTab: {
		fontSize: undefined,
		color: '#fff',
		paddingTop: undefined
	},
	subInfo: {
		color: '#8f98a0',
		paddingVertical: undefined
	},
	divider: {
		height: 1,
		flex: 1,
		backgroundColor: '#67c1f5'
	},
	dividerText: {
		color: '#67c1f5',
		paddingHorizontal: undefined
	}
};

export const themes = {
	transparent: { dividerText: { marginHorizontal: 'auto' } },
	darkBlue: { empty: { backgroundColor: '#000' }, dividerText: { backgroundColor: '#000' } }
};
