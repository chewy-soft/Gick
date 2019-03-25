import React from 'react';
import colors from '../../colors';
import { StyleSheet, css } from 'aphrodite';
import c from '../../lib/css';

const throbber = {
	'0%': {
		background: colors.lightBlue
	},
	'10%': {
		background: '#fff'
	},
	'40%': {
		background: colors.success
	}
};

const styles = StyleSheet.create({
	type: {
		color: '#b2b2b2',
		fontSize: '14px',
		display: 'flex',
		alignItems: 'center'
	},
	typeLoader: {
		width: '.3rem',
		height: '.3rem',
		borderRadius: '50%',
		display: 'flex',
		alignItems: 'flex-end',
		animationName: [ throbber ],
		animationDuration: '1200ms',
		animationDelay: '300ms',
		animationIterationCount: 'infinite',
		animationTimingFunction: 'ease-out',
		background: '#EBC70A',
		position: 'relative',
		marginLeft: '16px',
		':before': {
			content: '""',
			...c.absolute,
			left: '-0.6rem',
			width: '.3rem',
			height: '.3rem',
			borderRadius: '50%',
			background: '#EBC70A',
			animationName: [ throbber ],
			animationDuration: '1200ms',
			animationDelay: '150ms',
			animationIterationCount: 'infinite',
			animationTimingFunction: 'ease-out'
		},
		':after': {
			content: '""',
			...c.absolute,
			right: '-0.6rem',
			width: '.3rem',
			height: '.3rem',
			borderRadius: '50%',
			background: '#EBC70A',
			animationName: [ throbber ],
			animationDuration: '1200ms',
			animationDelay: '450ms',
			animationIterationCount: 'infinite',
			animationTimingFunction: 'ease-out'
		},
		'@media screen and (min-width: 600px)': {
			marginLeft: '20px',
			width: '.5rem',
			height: '.5rem',
			':before': {
				width: '.5rem',
				height: '.5rem',
				left: '-0.8rem'
			},
			':after': {
				width: '.5rem',
				height: '.5rem',
				right: '-0.8rem'
			}
		}
	},
	typeName: {
		paddingRight: '4px',
		maxHeight: '21px'
	}
});

export default (props) => (
	<div className={css(styles.type)}>
		<div className={css(styles.typeName)}>{props.userComponent}</div>
		<div style={{ color: '#fff', fontSize: 14 }}>{props.text || '正在输入'}</div>
		<div className={css(styles.typeLoader)} />
	</div>
);

export const ColorLoader = (props) => <div className={css(styles.typeLoader)} />;
