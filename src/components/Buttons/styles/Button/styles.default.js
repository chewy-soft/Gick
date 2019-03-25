import colors from '../../../../colors';
import c from '../../../../lib/css';

export default {
	content: {
		...c.flex_row,
		...c.flex_center,
		paddingHorizontal: undefined,
		borderRadius: undefined,
		height: undefined,
		backgroundColor: undefined,
		overflow: 'hidden'
	},
	text: { color: undefined, letterSpacing: 2, fontSize: undefined },
	icon: {
		...c.flex_center
	},
	iconPad: {
		paddingRight: undefined
	},
	null: { width: undefined },
	inside: { ...c.flex_center, ...c.flex_row, flex: 1 },
	square: { borderRadius: 0 }
};

export const themes = {
	moss: {
		content: { backgroundColor: colors.moss },
		text: { color: '#fff' }
	},
	halfMoss: {
		content: { backgroundColor: 'rgba(163,130,79,.4)' },
		text: { color: '#fff' }
	},
	red: {
		content: { backgroundColor: colors.lightRed },
		text: { color: '#fff' }
	},
	halfRed: {
		content: { backgroundColor: 'rgba(240,10,107,.4)' },
		text: { color: '#fff' }
	},
	darkGreen: {
		content: { backgroundColor: colors.darkGreen },
		text: { color: '#fff' }
	},
	halfDarkGreen: {
		content: { backgroundColor: 'rgba(100,124,100,.4)' },
		text: { color: '#fff' }
	},
	darkBlue: {
		content: { backgroundColor: colors.darkBlue },
		text: { color: '#fff' }
	},
	halfDarkBlue: {
		content: { backgroundColor: 'rgba(47,53,62,.4)' },
		text: { color: '#fff' }
	},
	lightOrange: {
		content: { backgroundColor: '#f57c00' },
		text: { color: '#fff' }
	},
	orange: {
		content: { backgroundColor: colors.lightOrange },
		text: { color: '#fff' }
	},
	halfOrange: {
		content: { backgroundColor: 'rgba(224,67,50,.4)' },
		text: { color: '#fff' }
	},
	yellow: {
		content: { backgroundColor: colors.warning },
		text: { color: '#fff' }
	},
	halfYellow: {
		content: { backgroundColor: 'rgba(251,192,45,.4)' },
		text: { color: '#fff' }
	},
	lightGray: {
		content: {
			backgroundColor: colors.lightGray
		},
		text: { color: colors.background }
	},
	green: {
		content: { backgroundColor: colors.normalGreen },
		text: { color: '#fff' }
	},
	blue: {
		content: { backgroundColor: colors.lightBlue },
		text: { color: '#fff' }
	},
	halfBlue: {
		content: { backgroundColor: 'rgba(77,189,253,.4)' },
		text: { color: '#fff' }
	},
	middleBlue: {
		content: { backgroundColor: '#7289da' },
		text: { color: '#fff' }
	},
	noStyle: {
		content: { backgroundColor: 'transparent' },
		text: { color: '#fff' }
	},
	flat: {
		content: { backgroundColor: 'transparent' },
		text: { color: colors.background }
	},
	transparent: {
		content: {
			borderColor: 'rgba(255,255,255,.6)',
			borderWidth: 1,
			margin: -1,
			backgroundColor: 'transparent'
		},
		text: { color: '#fff' }
	},
	transGreen: {
		content: {
			borderColor: colors.success,
			borderWidth: 1,
			margin: -1,
			backgroundColor: 'transparent'
		},
		text: { color: colors.success }
	},
	disabledTheme: {
		content: { backgroundColor: 'rgb(223, 223, 223)' },
		text: { color: 'rgb(161, 161, 161)' }
	}
};

export const sizes = {
	s: {
		content: {
			height: 21,
			borderRadius: 4
		},
		iconPad: {
			paddingRight: 2
		},
		text: { fontSize: 12 },
		null: { width: 17 },
		inside: { paddingHorizontal: 4 }
	},
	m: {
		content: {
			borderRadius: 2,
			height: 30
		},
		inside: { paddingHorizontal: 8 },
		iconPad: {
			paddingRight: 4
		},
		text: { fontSize: 14 },
		null: { width: 22 }
	},
	l: {
		content: {
			borderRadius: 3,
			height: 40
		},
		inside: { paddingHorizontal: 16 },
		iconPad: {
			paddingRight: 4
		},
		text: { fontSize: 14 },
		null: { width: 26 }
	},
	xl: {
		content: {
			borderRadius: 3,
			height: 48
		},
		inside: { paddingHorizontal: 16 },
		iconPad: {
			paddingRight: 12
		},
		text: { fontSize: 17 },
		null: { width: 26 }
	}
};
