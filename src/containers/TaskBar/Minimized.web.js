import React from 'react';
import { StyleSheet, Animated, Text } from 'react-native';
import Badge from '../../components/Badges/Badge';
import View from '../../components/View/View';
import ShortMessage from '../Message/ShortMessage';
import Symbol from '../../components/Symbol';
import css from '../../lib/css';
import colors from '../../colors';

const styles = StyleSheet.create({
	container: { ...css.flex_row_center, maxWidth: '100%' },
	badge: { position: 'absolute', zIndex: 1, right: 3, top: -3 },
	button: { height: 40, width: 60, ...css.flex_center },
	noticeContent: {
		boxShadow: '1px 0px 0px rgba(255, 255, 255, 0.2) inset',
		flex: 1,
		height: 38,
		overflow: 'hidden',
		padding: 4,
		paddingTop: 2,
		marginVertical: 'auto',
		backgroundColor: 'rgba(0,0,0,.2)'
	},
	bottomLine: {
		height: 2,
		backgroundColor: colors.warning,
		position: 'absolute',
		zIndex: 1,
		bottom: 0,
		left: 0,
		right: 0
	},
	line: { width: 1, height: 30, backgroundColor: 'rgba(255,255,255,.2)' }
});

class Minimized extends React.Component {
	timeout = undefined;
	state = {
		fadePosition: new Animated.Value(-50)
	};

	startAnimation = () => {
		if (this.timeout) clearTimeout(this.timeout);
		this.timeout = setTimeout(
			() =>
				Animated.timing(this.state.fadePosition, {
					toValue: 50,
					duration: 600
				}).start(),
			5000
		);
		Animated.timing(this.state.fadePosition, {
			toValue: 0,
			duration: 600
		}).start();
	};

	componentDidMount() {
		this.startAnimation();
	}

	shouldComponentUpdate(nextProps) {
		return (
			this.props.message !== nextProps.message ||
			this.props.icon !== nextProps.icon ||
			this.props.badge !== nextProps.badge
		);
	}
	componentDidUpdate(nextProps) {
		if (this.props.message !== nextProps.message) {
			if (this.animation) this.animation.stop();
			this.startAnimation();
		}
	}

	render() {
		const { message, badge, onPress, width, active } = this.props;
		const { fadePosition } = this.state;

		return (
			<View style={[ styles.container, { width: width || '100%' } ]} onPress={onPress}>
				<View style={styles.line} />
				<View style={styles.button}>
					<Symbol name={active ? 'chatBubbleColor' : 'chatBubbleWhite'} size={30} />
					<View style={styles.badge}>
						<Badge size="l" content={badge} />
					</View>
				</View>
				<View style={styles.noticeContent}>
					{!active && (
						<View style={{ margin: 'auto', flexDirection: 'row', alignItems: 'flex-end' }}>
							<Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>闲聊发帖 点这里</Text>
							<Text style={{ color: '#aaa', fontSize: 12, paddingLeft: 8 }}>
								※闲聊不会自动关联到其他频道，您可后续手动关联
							</Text>
						</View>
					)}
					{active &&
					message && (
						<Animated.View style={{ marginTop: fadePosition }}>
							<ShortMessage message={message} />
						</Animated.View>
					)}
					{badge > 0 && <View style={styles.bottomLine} />}
				</View>
			</View>
		);
	}
}

export default Minimized;
