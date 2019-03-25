import React from 'react';
import { Image as BasicImage } from 'react-native';
import View from '../View/View';
import { getParams, getStyles } from './styles/Image/styles';
import Symbol from '../Symbol';
import _ from 'lodash';
import Loader from '../Loader';

const getSourceKey = (source) => (source && source.uri) || String(source);

export default class Image extends React.Component {
	state = {
		uri: this.props.src,
		width: null,
		height: null,
		loading: false,
		sourceKey: getSourceKey(this.props.source)
	};

	resize = () => {
		BasicImage.getSize(this.props.src, (width, height) => {
			if (this._mounted) {
				if (this.props.width && !this.props.height) {
					this.setState({
						width: this.props.width,
						height: height * (this.props.width / width),
						loading: false
					});
				} else if (!this.props.width && this.props.height) {
					this.setState({
						width: width * (this.props.height / height),
						height: this.props.height,
						loading: false
					});
				} else {
					this.setState({ width: width, height: height, loading: false });
				}
			}
		});
	};
	componentDidMount() {
		this._mounted = true;
		this.resize();
	}

	componentDidUpdate(preProps, preState) {
		if (this.props.src !== preProps.src) {
			this.resize();
			this.handleError({ nativeEvent: null });
		}
		if (this.state.width !== preState.width || this.state.height !== preState.height) {
			this.props.onResize && this.props.onResize();
		}
	}

	componentWillUnmount() {
		this._mounted = false;
	}

	bubbleEvent = (propertyName, event) => {
		if (typeof this.props[propertyName] === 'function') {
			this.props[propertyName](event);
		}
	};

	handleLoadStart = () => {
		this.setState({ loading: true });
		this.bubbleEvent('onLoadStart');
	};

	handleLoadEnd = (event) => {
		if (this._mounted) {
			this.bubbleEvent('onLoadEnd', event);
		}
	};

	handleError = (event) => {
		if (this._mounted) {
			this.setState({
				loading: false,
				error: event.nativeEvent
			});
			this.bubbleEvent('onError', event);
		}
	};

	shouldComponentUpdate(nextProps, nextState) {
		return (
			this.props.src !== nextProps.src || this.props.children !== nextProps.children || this.state !== nextState
		);
	}

	render() {
		const { src, blur, opacity, style, onPress, resizeMode, size, type, loader } = this.props;
		const { width, height, sourceKey, loading, error } = this.state;
		const styles = getStyles(size || 'middle');
		const params = getParams(size || 'middle');
		const resize = resizeMode || (type == 'background' && 'cover') || 'contain';

		let css_image;
		if (size == 'auto') {
			css_image = { width: width || 50, height: height || 50 };
		} else {
			css_image = styles.image;
		}

		const children = type == 'background' &&
		this.props.children && <View style={styles.children}>{this.props.children}</View>;
		const _loader = loader || (
			<View style={styles.loader}>
				<Loader />
			</View>
		);

		if (error) {
			return (
				<View style={[ styles.image, styles.error, style ]}>
					<View style={{ opacity: 0.2 }}>
						{type == 'background' && <Symbol name="brokenImage" size={20} />}
						{type !== 'background' && <Symbol name="brokenImage" size={params.error} />}
					</View>
					{children}
				</View>
			);
		}
		if (_.isNil(src)) {
			return <View style={[ styles.background, style ]}>{children}</View>;
		}
		if (!error) {
			return (
				<View style={[ styles.container, style ]} onPress={onPress} activeOpacity={1}>
					{loading && _loader}
					{type == 'webHeader' && (
						<img
							src={src}
							alt="Gick Image"
							style={{ width: '100%', height: 'auto' }}
							onError={this.handleError}
						/>
					)}
					{type !== 'webHeader' && (
						<BasicImage
							resizeMode={resize}
							key={sourceKey}
							source={{ uri: src }}
							style={[
								blur && styles.backgroundBlur,
								css_image,
								type == 'background' && styles.background,
								{ opacity: opacity || 1 },
								blur && type == 'background' && { width: '110%' }
							]}
							blurRadius={blur || 0}
							onLoadStart={this.handleLoadStart}
							onLoad={this.handleLoad}
							onLoadEnd={this.handleLoadEnd}
							onError={this.handleError}
						/>
					)}
					{children}
				</View>
			);
		}
		return null;
	}
}
