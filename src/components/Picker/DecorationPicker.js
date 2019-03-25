import React from 'react';
import View from '../View/View';
import Symbol from '../Symbol';
import styles from './styles/DecorationPicker/styles';
import c from '../../lib/css';

class Decoration extends React.Component {
	state = { back: false };
	onMouseOver = () => {
		this.setState({ back: true });
	};
	onMouseOut = () => {
		this.setState({ back: false });
	};
	render() {
		const { decoration, onChange } = this.props;
		const { back } = this.state;
		return (
			<View
				style={[
					styles.frame,
					{ backgroundColor: decoration == 'block' && 'rgba(0,0,0,.2)' },
					back && styles.back
				]}
				onPress={onChange}
				onMouseOver={this.onMouseOver}
				onMouseOut={this.onMouseOut}
			>
				<Symbol name={decoration} size={54} />
			</View>
		);
	}
}

class DecorationPicker extends React.Component {
	state = { decoration: this.props.decoration || 'basic' };
	onChange = (decoration) => {
		this.props.onChange && this.props.onChange(decoration);
		this.setState({ decoration });
	};
	render() {
		const decorations = [];
		decorations.push(
			{
				key: 'basic',
				icon: 'block',
				onChange: () => this.onChange('basic')
			},
			{
				key: 'quote',
				icon: 'quoteSvg',
				onChange: () => this.onChange('quote')
			},
			{
				key: 'aphorism',
				icon: 'aphorismFormat',
				onChange: () => this.onChange('aphorism')
			},
			{
				key: 'error',
				icon: 'error',
				onChange: () => this.onChange('error')
			},
			{
				key: 'warning',
				icon: 'warning',
				onChange: () => this.onChange('warning')
			},
			{
				key: 'success',
				icon: 'checked',
				onChange: () => this.onChange('success')
			},
			{
				key: 'award',
				icon: 'awardSvg',
				onChange: () => this.onChange('award')
			},
			{
				key: 'surprised',
				icon: 'surprisedR',
				onChange: () => this.onChange('surprised')
			},
			{
				key: 'drops',
				icon: 'drops',
				onChange: () => this.onChange('drops')
			}
		);
		return (
			<View style={{ ...c.flex_row, flexWrap: 'wrap' }}>
				{_.map(decorations, (decoration) => (
					<Decoration key={decoration.key} decoration={decoration.icon} onChange={decoration.onChange} />
				))}
			</View>
		);
	}
}
export default DecorationPicker;
