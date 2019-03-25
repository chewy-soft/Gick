import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import colors from '../../colors';

const hoverColors = {
	moss: colors.hoverMoss,
	halfMoss: colors.hoverMoss,
	red: colors.hoverRed,
	halfRed: colors.hoverRed,
	darkGreen: colors.hoverDarkGreen,
	halfDarkGreen: colors.hoverDarkGreen,
	darkBlue: colors.hoverDarkBlue,
	halfDarkBlue: colors.hoverDarkBlue,
	orange: colors.hoverOrange,
	lightOrange: '#C46504',
	middleBlue: '#677bc4',
	halfOrange: colors.hoverOrange,
	yellow: colors.lightOrange,
	halfYellow: colors.lightOrange,
	blue: colors.hoverBlue,
	halfBlue: colors.hoverBlue,
	noStyle: 'transparent',
	flat: 'transparent',
	transparent: 'rgba(255,255,255,.2)',
	transGreen: 'rgba(60,163,116,.2)',
	disabledTheme: 'rgb(223, 223, 223)',
	defaultColor: 'rgba(0,0,0,.2)',
	gray: 'rgba(255,255,255,.1)',
	lightGray: '#aaa',
	light: '#ccc',
	white: '#fff',
	black: 'rgba(0,0,0,.6)',
	lightBlue: '#71B4AD',
	wechat: '#2F970F',
	qq: colors.hoverBlue,
	weibo: '#E08932',
	green: colors.hoverNormalGreen,
	loader: colors.loader,
	dark: colors.loader
};

const styles = StyleSheet.create({
	content: {
		display: 'flex',
		height: '100%',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		transition: '0.1s ease-in-out'
	},
	horizontalCard: {
		':hover': {
			':nth-child(n) > div + div > div': { color: '#fff' },
			':nth-child(n) > div + div > div + div > div': { color: '#fff' },
			':nth-child(n) > div + div > div + div > div + div > div > div': { color: '#fff' }
		}
	},
	list: {
		':hover': {
			':nth-child(n) > div > div > div > *': { color: '#fff' },
			':nth-child(n) > div > div + div > * ': { color: '#fff' }
		}
	},
	message: {
		transition: '0.15s ease-in-out',
		':nth-child(n) > :last-child': { opacity: 0 },
		':hover': {
			backgroundColor: 'rgba(0,0,0,.2)',
			':nth-child(n) > :last-child': { opacity: 1 }
		}
	},
	message_menu: {
		transition: '0.15s ease-in-out',
		':nth-child(n) > div': { opacity: 0.4 },
		':hover': { ':nth-child(n) > div': { opacity: 1 }, backgroundColor: 'transparent' }
	},
	card: {
		':hover': {
			':nth-child(n) > div > div > div': { color: colors.lightBlue }
		}
	},
	link: {
		display: 'inline',
		':hover': { textDecorationLine: 'underline', color: 'inherit' }
	}
});

export default (props) => {
	const { hoverColor, onPress, theme } = props;

	const hover = StyleSheet.create({
		hover: {
			// cursor: (hoverColor == 'disabledTheme' && 'auto') || 'pointer',
			':hover': {
				backgroundColor: hoverColors[hoverColor || 'defaultColor'] || hoverColor
			}
		}
	});
	let type;
	switch (theme) {
		case 'horizontalCard':
			type = styles.horizontalCard;
			break;
		case 'list':
			type = styles.list;
			break;
		case 'message':
			type = styles.message;
			break;
		case 'message_menu':
			type = styles.message_menu;
			break
		case 'card':
			type = styles.card;
			break;
		case 'link':
			type = styles.link;
			break;
		default:
			type = null;
			break;
	}
	if (process.env.RESOLUTION == 'mobile') {
		return (
			<div onClick={onPress} className={css([ styles.content, type ])}>
				{props.children}
			</div>
		);
	}
	return (
		<div onClick={onPress} className={css([ styles.content, hover.hover, type ])}>
			{props.children}
		</div>
	);
};
