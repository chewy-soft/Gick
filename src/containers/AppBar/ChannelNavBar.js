import React from 'react';
import NavBar from '../../components/ToolBar/NavBar';
import HoverView from '../../components/View/HoverView';
import Symbol from '../../components/Symbol';
import c from '../../lib/css';
import View from '../../components/View/View';
import ToolTip from '../../components/ToolTip';
import _ from 'lodash';
import ShareMenu from './ShareMenu';
import colors from '../../colors';
import styles from './styles/styles';
import Badge from '../../components/Badges/Badge';
import HandlerContext from '../../context/HandlerContext';

export default class ChannelNavBar extends React.Component {
	static contextType = HandlerContext;

	state = { hover: undefined, onShare: false };
	hover = (key) => {
		this.setState({ hover: key });
	};
	onReport = () => {
		const { channel } = this.props;
		const { getChannel, t, router, openModal } = this.context;
		openModal('report', { meta: { type: 'channel', payload: channel } });
	};
	componentDidMount() {
		if (this.props.interaction === undefined && this.props.getInteraction) {
			this.props.getInteraction(this.props.id);
		}
	}
	onLike = (rating) => {};

	render() {
		const { active, rightMenu, channel, me } = this.props;
		const { hover, onShare } = this.state;
		const { router, t } = this.context;

		if (!channel) return null;
		const { _id, type } = this.props.channel;
		const like = this.props.interaction && this.props.interaction.rating > 5;
		const left = [];
		if (type == 'boardgame') {
			left.push({
				key: 'top',
				title: t('综合', 'zh'),
				icon: 'boardgame',
				onPress: () => router.toChannel(_id),
				active: active == 'top'
			});
		}
		if (type == 'topic') {
			left.push({
				key: 'top',
				title: t('话题', 'zh'),
				icon: 'topics',
				onPress: () => router.toChannel(_id),
				active: active == 'top'
			});
		}
		left.push({
			key: 'links',
			title: t('频道', 'zh'),
			icon: 'channel',
			onPress: () => router.toChannelLinks(_id),
			active: active == 'links'
		});
		if (!channel.is_private || me._id == channel.user_id) {
			left.push({
				key: 'editer',
				title: t('编译', 'zh'),
				icon: 'editOutLine',
				onPress: () => router.toChannelEdit(_id),
				active: active == 'editer'
			});
		}
		left.push(
			{
				key: 'subscribers',
				title: t('粉丝', 'zh'),
				icon: 'users',
				notice: channel.count_subscribes,
				onPress: () => router.toChannelUserList(_id),
				active: active == 'subscribers'
			},
			{
				key: 'report',
				title: t('举报', 'zh'),
				icon: 'report',
				onPress: this.onReport
			}
		);
		const right = [
			{
				key: 'subscription',
				title: like ? t('没兴趣', 'zh') : t('喜欢', 'zh'),
				icon: like ? 'fullHeart' : 'like',
				onPress: () => {
					if (like) {
						this.context.updateInteraction(_id, 1);
					}
					if (!like) {
						this.context.updateInteraction(_id, 9);
					}
				},
				color: like ? colors.lightOrange : '#fff'
			}
		];
		if (type == 'topic') {
			right.push({
				key: 'share',
				title: t('分享', 'zh'),
				icon: 'share',
				onPress: () => this.setState({ onShare: !onShare })
			});
		}

		return (
			<View>
				<NavBar
					logo={
						<View style={{ ...c.flex_row_center, height: 40 }}>
							{_.map(left, (item) => (
								<HoverView key={item.key} hoverColor="gray">
									<View
										onPress={item.onPress}
										style={styles.channelNavItem}
										onMouseOver={() => this.hover(item.key)}
										onMouseOut={() => this.setState({ hover: undefined })}
									>
										<Symbol
											name={item.icon}
											size={28}
											color={
												(hover == item.key && '#fff') ||
												(item.active && colors.orange) ||
												'#aaa'
											}
										/>
										{item.notice && (
											<View style={styles.badge}>
												<Badge theme="red" size="square" content={item.notice} />
											</View>
										)}
										{hover == item.key && (
											<ToolTip content={item.title} show={true} bottom={-28} left={-6} />
										)}
									</View>
								</HoverView>
							))}
						</View>
					}
					component={
						<View
							style={{
								...c.flex_row_center,
								height: '100%',
								marginLeft: 'auto'
							}}
						>
							{_.map(rightMenu, (item) => (
								<HoverView key={item.key} hoverColor="gray">
									<View
										onPress={item.onPress}
										style={styles.channelNavItem}
										onMouseOver={() => this.hover(item.key)}
										onMouseOut={() => this.setState({ hover: undefined })}
									>
										<Symbol name={item.icon} size={28} color={item.color} />
										<ToolTip
											content={item.title}
											show={hover == item.key}
											bottom={-28}
											left={-18}
										/>
									</View>
								</HoverView>
							))}
						</View>
					}
					right={
						<View style={{ ...c.flex_row_center }}>
							{_.map(right, (item) => (
								<HoverView key={item.key} hoverColor="gray">
									<View
										onPress={item.onPress}
										style={styles.channelNavItem}
										onMouseOver={() => this.hover(item.key)}
										onMouseOut={() => this.setState({ hover: undefined })}
									>
										<Symbol name={item.icon} size={28} color={item.color} />
										{hover == item.key && (
											<ToolTip content={item.title} show={true} bottom={-28} left={-2} />
										)}
									</View>
								</HoverView>
							))}
						</View>
					}
				/>
				{onShare && (
					<View style={{ ...c.absolute_full }}>
						<View style={{ ...c.absolute_full }} onPress={() => this.setState({ onShare: false })} />
						<View style={styles.channelShareMenu}>
							<ShareMenu channel={channel} onShare={() => this.setState({ onShare: !onShare })} />
						</View>
					</View>
				)}
			</View>
		);
	}
}
