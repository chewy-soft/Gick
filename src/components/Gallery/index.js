import React from 'react';
import { StyleSheet } from 'react-native';
import View from '../View/View';
import c from '../../lib/css';
import RoundButton from '../Buttons/RoundButton';
import colors from '../../colors';

const styles = StyleSheet.create({
	content: { flex: 1 },
	arrowLeft: {
		...c.absolute,
		left: -20
	},
	arrowRight: {
		...c.absolute,
		right: -20
	}
});

class Gallery extends React.Component {
	constructor(props) {
		super();
		this.interval = props.interval || defaultProps.interval;
		this.schedule = undefined;
		this._scheduleAuto = undefined;
		this.load = this.load.bind(this);
		this.scheduleLoad = this.scheduleLoad.bind(this);
		this.scheduleAuto = this.scheduleAuto.bind(this);
		this.onPrevious = this.onPrevious.bind(this);
		this.onNext = this.onNext.bind(this);
		this.auto = true;
		this.state = { component: null, currentPage: 1 };
	}

	onNext() {
		const { numberOfPages } = {
			...defaultProps,
			...this.props
		};
		this.auto = false;
		this.load(this.state.currentPage % numberOfPages + 1);
	}

	onPrevious() {
		const { numberOfPages } = {
			...defaultProps,
			...this.props
		};
		this.auto = false;
		this.load((this.state.currentPage + numberOfPages - 2) % numberOfPages + 1);
	}

	scheduleLoad(page) {
		const { numberOfPages } = {
			...defaultProps,
			...this.props
		};
		const interval = this.props.interval || defaultProps.interval;
		if (this.props.auto === true) {
			this.schedule = setTimeout(() => {
				this.load(page);
			}, interval);
		}
	}

	scheduleAuto() {
		const { numberOfPages } = {
			...defaultProps,
			...this.props
		};
		if (this.auto === false && this.props.auto === true) {
			this._scheduleAuto = setTimeout(() => {
				this.auto = true;
				this.scheduleLoad(this.state.currentPage % numberOfPages + 1);
			}, 20000);
		}
	}

	load(page) {
		const { numberOfPages } = {
			...defaultProps,
			...this.props
		};
		this.schedule && clearTimeout(this.schedule);
		this._scheduleAuto && clearTimeout(this._scheduleAuto);
		var component = this.props.onLoad ? this.props.onLoad(page) : null;
		this.setState({ component, currentPage: page });
		if (this.auto) {
			this.scheduleLoad(page % numberOfPages + 1);
		}
	}

	componentWillUnmount() {
		clearTimeout(this.schedule);
		clearTimeout(this._scheduleAuto);
	}

	componentDidMount() {
		this.load && this.load(this.state.currentPage);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextState !== this.state || this.props !== nextProps;
	}

	render() {
		const { component, currentPage } = this.state;
		const { numberOfPages } = {
			...defaultProps,
			...this.props
		};
		if (numberOfPages == 0) return null;
		return (
			<View style={styles.content}>
				{component}
				{this.props.theme !== 'auto' &&
				numberOfPages > 1 &&
				currentPage > 1 && (
					<View style={[ styles.arrowLeft, this.props.arrowStyle ]}>
						<RoundButton
							style={styles.arrow}
							size="s"
							theme="white"
							icon="arrowLeft"
							iconColor={colors.background}
							onPress={this.onPrevious}
						/>
					</View>
				)}
				{this.props.theme !== 'auto' &&
				numberOfPages > 1 &&
				numberOfPages > currentPage && (
					<View style={[ styles.arrowRight, this.props.arrowStyle ]}>
						<RoundButton
							style={styles.arrow}
							size="s"
							theme="white"
							icon="arrowRight"
							iconColor={colors.background}
							onPress={this.onNext}
						/>
					</View>
				)}
			</View>
		);
	}
}

const defaultProps = {
	interval: 3000,
	numberOfPages: 10
};
export default Gallery;
