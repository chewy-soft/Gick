import React from 'react';
import Text from '../Text/Text';
import { getStyles, getParams } from './styles/styles';
import { themes } from './styles/styles.default';
import Symbol from '../Symbol';
import colors from '../../colors';

export default class Label extends React.Component {
	state = { close: false, hover: false };
	onHover = () => {
		this.setState({ hover: !this.state.hover });
	};
	render() {
		const { content, theme, size, onChange, onChangeIcon, style, onPress } = this.props;
		const styles = getStyles(size || 'm');
		const params = getParams(size || 'm');
		const { hover } = this.state;
		let back;
		if (onPress || onChange) {
			back = { backgroundColor: (hover && '#aaa') || themes[theme || 'black'] };
		} else {
			back = { backgroundColor: themes[theme || 'black'] };
		}
		const color = { color: (hover && colors.background) || '#aaa' };

		return (
			<Text
				style={[ back, styles.label, style ]}
				onPress={onPress}
				onMouseOver={this.onHover}
				onMouseOut={this.onHover}
			>
				<Text style={styles.text}>{content || ' '}</Text>
				{onChange && (
					<Text style={styles.close} onPress={onChange}>
						<Text style={[ styles.stand, color ]}>|</Text>
						<Symbol
							name={onChangeIcon || 'close'}
							size={params.icon}
							color={(hover && colors.background) || '#aaa'}
						/>
					</Text>
				)}
			</Text>
		);
	}
}
