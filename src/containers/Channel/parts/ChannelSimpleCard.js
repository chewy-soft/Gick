import React from 'react';
import Text from '../../../components/Text/Text';
import View from '../../../components/View/View';
import Image from '../../../components/Image/Image';
import { images } from '../../../lib/bucket';
import Card from '../../../components/Card/Card';
import _ from 'lodash';
import styles, { params } from './styles/ChannelSimpleCard/styles';
import { BACK_COLORS } from './styles/ChannelSimpleCard/styles.default';
import Badge from '../../../components/Badges/Badge';
import Avatar from '../../../components/Avatar';
import Symbol from '../../../components/Symbol';
import TimeFormat from '../../../components/Text/TimeFormat';
import Format from '../../../components/Text/Format';
import UserName from '../../User/UserName';

const NullComponent = ({ t }) => (
	<View style={styles.nullContent}>
		<Symbol name="error" size={38} />
		<View style={{ marginLeft: 8 }}>
			<Text style={styles.nullt}>{t('找不到了...', 'zh')}</Text>
			<Text style={styles.nulls}>{t('此频道已被删除', 'zh')}</Text>
		</View>
	</View>
);

const Loader = (props) => (
	<View>
		<View style={styles.loader_header} />
		<View style={styles.loader_content} />
	</View>
);

const sub_component = ({ channel }) => (
	<View style={{ overflow: 'hidden' }}>
		<UserName id={channel.user_id} fontSize={12} color="#aaa" />
		<View style={styles.sub_info}>
			{channel.count_subscribe > 0 && (
				<Format format="number" value={channel.count_subscribe} style={styles.sub_info_text} />
			)}
			{channel.count_subscribe > 0 && <Text style={styles.sub_info_text}> 粉丝・</Text>}
			<TimeFormat
				value={(!_.isNil(channel.props) && channel.props.created_at) || channel.created_at}
				style={styles.sub_info_text}
			/>
		</View>
	</View>
);

export default ({ t, channel, onPress, theme, size, onDelete }) => {
	if (channel === undefined) return <Loader />;
	if (channel === null) return <NullComponent t={t} />;

	const round_type = [ 'designer', 'publisher', 'artist', 'user' ];
	const name = t(channel.name) || '';
	const description = t(channel.description) || '';
	const user_sub_component =
		(channel.count_subscribe > 0 && <Text style={styles.user_sub_info}>{channel.count_subscribe} 粉丝</Text>) || null;
	const subinfo = (channel.type !== 'user' && sub_component({ channel })) || user_sub_component;

	if (_.indexOf(round_type, channel.type) !== -1)
		return (
			<View style={_.indexOf(round_type, channel.type) !== -1 && styles.roundCover}>
				<Card
					theme="simple"
					width={params.round}
					size={size}
					numberOfLines={(theme == 'titleOnly' && 1) || 2}
					header={
						(_.isNil(channel.image) && (
							<View style={{ marginRight: 'auto' }}>
								<Avatar size="xxxl" name={name} />
							</View>
						)) || (
							<Image
								style={styles.image_round}
								type="background"
								src={images(channel.image)['210x118_min']}
							/>
						)
					}
					// description={theme !== 'titleOnly' && description}
					component={theme !== 'titleOnly' && subinfo}
					title={name}
					onPress={onPress}
				/>
			</View>
		);

	if (_.indexOf(round_type, channel.type) == -1)
		return (
			<View style={{ width: params.square }}>
				<Card
					theme="simple"
					width={params.sqaure}
					numberOfLines={(theme == 'titleOnly' && 1) || 2}
					size={size}
					header={
						(_.isNil(channel.image) && (
							<View
								style={[
									styles.square_name,
									{
										backgroundColor: BACK_COLORS[name.charCodeAt(0) % 22]
									}
								]}
							>
								<View style={styles.name_content}>
									<Text style={styles.name_font}>{_.first(name)}</Text>
									<View style={styles.name_after_content}>
										<Text style={styles.name_after}>
											{_.slice(_.chain(name).split(' ').first().value().slice(1), 0, 18)}
										</Text>
									</View>
								</View>
								{channel.props &&
								!channel.props.closed && (
									<View style={styles.live} elevation={1}>
										<Badge size="s" content=" " />
										<Text style={styles.livetext}>LIVE</Text>
									</View>
								)}
							</View>
						)) || (
							<Image
								style={styles.image_square}
								type="background"
								src={images(channel.image)['210x118_min']}
							>
								{channel.props &&
								!channel.props.closed && (
									<View style={styles.live} elevation={1}>
										<Badge size="s" content=" " />
										<Text style={styles.livetext}>LIVE</Text>
									</View>
								)}
							</Image>
						)
					}
					// description={theme !== 'titleOnly' && description}
					title={name}
					onPress={onPress}
					component={theme !== 'titleOnly' && subinfo}
				/>
			</View>
		);
	return <Loader />;
};
