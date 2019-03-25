import React from 'react';
import colors from '../../colors';
import { StyleSheet } from 'react-native';
import Symbol from '../../components/Symbol';
import Input from '../../components/TextField/Input';
import View from '../../components/View/View';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		height: 40,
		backgroundColor: colors.background,
		paddingHorizontal: 8,
		paddingVertical: 6
	},
	icon: {
		position: 'absolute',
		right: 12,
		top: 12
	}
});

class SearchBar extends React.Component {
	constructor(props) {
		super();
		this.state = { onFocus: true };
		this.onFocus = this.onFocus.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	onFocus(e) {
		const val = e.target.value;
		e.target.value = '';
		e.target.value = val;
		this.setState({ onFocus: true });
	}
	onBlur() {
		this.setState({ onFocus: false });
	}
	onChange(e) {
		this.props.onSearch && this.props.onSearch(e.target.value);
	}

	shouldComponentUpdate(nextProps) {
		return nextProps.theme !== this.props.theme;
	}

	render() {
		const query = this.props.query || '';
		const { theme, placeholder, onRef, onChange } = this.props;
		let icon;
		let color;
		switch (theme) {
			case 'link':
				color = colors.lightRed;
				icon = 'link';
				break;
			case 'share':
				color = colors.success;
				icon = 'share';
				break;
			case 'jump':
				color = colors.lightBlue;
				icon = 'jump';
				break;
			default:
				color = '#aaa';
				icon = 'search';
		}
		return (
			<View style={styles.container}>
				<Input
					onChange={onChange}
					onRef={onRef}
					type="string"
					theme="search"
					placeholder={placeholder || '猜你喜欢'}
				/>
				<View style={styles.icon}>
					<Symbol name={icon} color={color} size={16} />
				</View>
			</View>
		);
	}
}

export default SearchBar;
