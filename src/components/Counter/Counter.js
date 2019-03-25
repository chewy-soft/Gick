import React from 'react';
import Text from '../Text/Text';
import View from '../View/View';
import styles from './styles/Counter/styles';

class Counter extends React.Component {
	state = { count: this.props.count };
	time = (count) => {
		var count = this.state.count;
		count = count - 1;
		if (count <= 0) {
			clearInterval(this.timer);
		}
		this.setState({ count });
	};
	componentDidMount() {
		this.timer = setInterval(() => this.time(), 1000);
	}
	componentWillUnmount() {
		clearInterval(this.timer);
	}
	shouldComponentUpdate(nextProps, nextState) {
		return this.state.count !== nextState.count;
	}

	render() {
		const { info, suffix, countNum } = this.props;
		const { count } = this.state;

		return count > 0 ? (
			<View style={styles.container}>
				<Text style={styles.info}>{info}</Text>
				{countNum &&
				count && (
					<View style={styles.content}>
						<Text style={styles.count}>{count}</Text>
						<Text style={styles.suffix}>{suffix}</Text>
					</View>
				)}
			</View>
		) : null;
	}
}

export default Counter;
