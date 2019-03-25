import React from 'react';
import View from '../../components/View/View';
import Text from '../../components/Text/Text';
import Symbol from '../../components/Symbol';
import styles from './styles/ChannelHeader/styles';
import _ from 'lodash';
import getType from '../../lib/channel-types';
import { I18nTextBody } from '../I18n/I18nTextWidget';
import { getEditProgress } from '../../lib/i18n';
import Badge from '../../components/Badges/Badge';
import Image from '../../components/Image/Image';
import { images } from '../../lib/bucket';
import User from '../User/User';
import ChannelTranslateProgress from './parts/ChannelTranslateProgress';
import HandlerContext from '../../context/HandlerContext';
import RoundButton from '../../components/Buttons/RoundButton';
import Button from '../../components/Buttons/Button';
import Format from '../../components/Text/Format';
import ScrollView from '../../components/View/ScrollView';
import TimeFomart from '../../components/Text/TimeFormat';

export default class ChannelHeader extends React.Component {
	static contextType = HandlerContext;
	state = { full: false, origin: false };
	showFull = () => {
		this.setState({ full: !this.state.full });
	};
	onOriginChange = () => this.setState({ origin: !this.state.origin });
	render() {
		const { channel, elevation, me, router, count } = this.props;
		const { full, origin } = this.state;
		const { t, subscribeChannel, unsubscribeChannel } = this.context;
		const editProgress = getEditProgress(channel, me.settings.locale);
		const meta = channel.__meta__;
		const origin_locale = _.get(meta, [ 'description', 'origin_locale' ]);
		const currentLocale = origin ? origin_locale : me.settings.locale;
		const { icon, info } = getType(channel.type) || 'default';
		const isOwner = channel.is_private && channel.user_id == me._id ? true : false;
		const shouldEdit = isOwner || !channel.is_private ? true : false;
		let badge;
		if (channel.is_private) badge = <Badge content={t('权限编辑', 'zh')} theme="darkBlue" size="square" />;
		else badge = <Badge content={t('开放编辑', 'zh')} theme="gold" size="square" />;

		const active = _.indexOf(me.channels, channel._id) !== -1;
		const countButton = [
			{
				theme: 'lightOrange',
				count: channel.count_subscribe,
				suffix: active ? '已订阅' : '订阅',
				onPress: active ? () => unsubscribeChannel(channel._id) : () => subscribeChannel(channel._id)
			},
			{ theme: 'dark', count: 4, suffix: '话题' },
			{ theme: 'darkBlue', count: 4, suffix: '频道' },
			{ theme: 'green', count: 4, suffix: '桌游' }
		];

		return (
			<View style={styles.container} elevation={elevation}>
				<Image
					src={images(channel.image)['1360xauto']}
					type="background"
					style={styles.backImage}
					size="auto"
					opacity={0.2}
				/>
				{(channel.is_private && me._id == channel.user_id) || !channel.is_private ? (
					<View style={styles.translate}>
						<ChannelTranslateProgress t={t} progress={editProgress} router={router} id={channel._id} />
					</View>
				) : null}

				<View style={styles.headerContent}>
					<View style={styles.titleContent}>
						<View style={{ flexDirection: 'row' }}>
							<Text style={styles.subTitle}>{t(info, 'zh')}</Text>
							<Badge content={<Symbol name={icon} size={13} />} size="l" theme="blue" />
						</View>
						<View style={styles.title}>
							<Text style={styles.mainTitle}>{t(channel.name)}</Text>
							<View style={styles.stateLabel}>{badge}</View>
						</View>
						<View style={styles.owner}>
							<User
								size="xs"
								id={channel.user_id}
								onPress={(user) => router.toChannel(user.channel_id)}
							/>
							<TimeFomart value={channel.created_at} format="fullDate" style={styles.createInfo} />
						</View>
						<View style={styles.description}>
							<View style={styles.transButton}>
								<Button
									content={t(currentLocale == me.settings.locale && !origin ? '查看原文' : '查看译文', 'zh')}
									theme="transparent"
									size="s"
									onPress={this.onOriginChange}
								/>
							</View>
							<View style={styles.transBody}>
								<I18nTextBody
									value={channel.description}
									origin_locale={origin_locale}
									onOriginChange={this.onOriginChange}
									locale={me.settings.locale}
									origin={origin}
									numberOfLines={2}
									type="row"
									own={shouldEdit}
									id={channel._id}
									router={router}
									t={t}
								/>
							</View>
							{t(channel.description) && (
								<View style={styles.fullButton} onPress={this.showFull}>
									<Symbol name={(full && 'dropUp') || 'dropDown'} size={14} />
									<Text style={styles.descriptionText}>
										{full && t('收起', 'zh')}
										{!full && t('展开', 'zh')}
									</Text>
								</View>
							)}
						</View>
						<View style={styles.buttonGroup}>
							{_.map(countButton, (c) => (
								<RoundButton
									key={c.suffix}
									size="xl"
									theme={c.theme}
									component={
										<View>
											<Format format="number" value={c.count} style={styles.countNum} />
											<Text style={styles.countSuffix}>{t(c.suffix, 'zh')}</Text>
										</View>
									}
									onPress={c.onPress}
								/>
							))}
						</View>
					</View>
					{!_.isNil(channel.image) && (
						<Image src={images(channel.image)['400x300_max']} style={styles.mainImage} size="auto" />
					)}
					{_.isNil(channel.image) &&
					shouldEdit && (
						<View style={styles.emptyImage} onPress={() => router.toChannelEdit(channel._id)}>
							<Symbol name="camera" size={70} color="#aaa" />
							<Button content={t('上传图片', 'zh')} theme="transparent" />
						</View>
					)}
				</View>
				{full && (
					<View style={styles.fullDescription} onPress={this.showFull} activeOpacity={1}>
						<Image
							src={images(channel.image)['1360xauto']}
							type="background"
							style={styles.headerImage}
							opacity={0.1}
						/>
						<ScrollView style={styles.fullDesScroll}>
							<View style={styles.title}>
								<Text style={styles.mainTitle}>{t(channel.name)}</Text>
								<View style={styles.stateLabel}>{badge}</View>
							</View>
							<View style={styles.owner}>
								<User
									size="xs"
									id={channel.user_id}
									onPress={(user) => router.toChannel(user.channel_id)}
								/>
							</View>
							<TimeFomart value={channel.created_at} format="fullDate" style={styles.createInfo} />
							<Text style={styles.subTitle}>{t('介绍', 'zh')}</Text>
							<I18nTextBody
								value={channel.description}
								origin_locale={origin_locale}
								onOriginChange={this.onOriginChange}
								locale={me.settings.locale}
								origin={origin}
								type="row"
								own={shouldEdit}
								id={channel._id}
								router={router}
								t={t}
							/>
						</ScrollView>
					</View>
				)}
				{_.isNil(channel.image) && <View style={styles.line} />}
			</View>
		);
	}
}
