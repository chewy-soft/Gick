import React from 'react';
import { StyleSheet, Animated } from 'react-native';
import RoundButton from '../../components/Buttons/RoundButton';
import Badge from '../../components/Badges/Badge';
import View from '../../components/View/View';
import User from '../User/User';
import Format from '../../components/Text/Format';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		overflow: 'hidden',
		borderTopLeftRadius: 23,
		borderBottomLeftRadius: 23
	},
	badge: { position: 'absolute' },
	button: {
		height: 46,
		width: 46,
		zIndex: 1
	},
	noticeContent: {
		width: 'auto',
		paddingRight: 12,
		paddingTop: 2,
		paddingLeft: 42,
		marginVertical: 'auto',
		backgroundColor: '#fff',
		borderTopRightRadius: 12,
		borderBottomRightRadius: 12
	}
});

class UserSelfInfo extends React.Component {
	state = {
		fadeAnim: new Animated.Value(-500),
		fadeOut: new Animated.Value(0)
	};

	componentDidUpdate() {
		Animated.stagger(2500, [
			Animated.parallel(
				[
					Animated.timing(this.state.fadeAnim, {
						toValue: -22,
						duration: 600
					}),
					Animated.timing(this.state.fadeOut, {
						toValue: 1,
						duration: 1000
					})
				],
				{ stopTogether: false }
			),
			Animated.parallel(
				[
					Animated.timing(this.state.fadeAnim, {
						toValue: -500,
						duration: 1000
					}),
					Animated.timing(this.state.fadeOut, {
						toValue: 0,
						duration: 1000
					})
				],
				{ stopTogether: false }
			)
		]).start();
	}

	shouldComponentUpdate(nextProps) {
		return (
			this.props.notice !== nextProps.notice ||
			this.props.count !== nextProps.count ||
			this.props.state !== nextProps.state
		);
	}
	render() {
		const { count, notice, active } = this.props;
		const size = (count > 99 && 's') || 'l';
		const position = (count > 99 && { right: 8, top: 10 }) || {
			right: 0,
			top: 2
		};
		const { fadeAnim, fadeOut } = this.state;
		let icon;
		if (active) {
			if (notice.type == 'message') {
				icon = 'messageSvg';
			}
			if (notice.type == 'topic') {
				icon = 'chatBubbleColor';
			}
		} else {
			icon = 'chatBubbleWhite';
		}

		let text;
		if (notice.value) {
			if (notice.value.length > 50) {
				text = notice.value.substring(0, 50) + '...';
			} else {
				text = notice.value;
			}
		}

		return (
			<View>
				<View style={styles.container}>
					<View style={styles.button}>
						<RoundButton theme="green" size="ms" opacity={1} icon={icon} />
					</View>
					{!active && (
						<View style={[ styles.noticeContent, { marginLeft: -22 } ]}>
							<User size="xxs" id={null} theme="light" />
							<Format format="string" value="<<<点这里，马上开始聊天！" />
						</View>
					)}
					{active && (
						<Animated.View style={[ styles.noticeContent, { marginLeft: fadeAnim, opacity: fadeOut } ]}>
							<User size="xxs" id={notice.id} theme="light" />
							<Format format="string" value={text} style={{ fontSize: 13 }} />
						</Animated.View>
					)}
				</View>
				<View style={[ styles.badge, position ]}>
					<Badge size={size} content={count} />
				</View>
			</View>
		);
	}
}
export default UserSelfInfo;
