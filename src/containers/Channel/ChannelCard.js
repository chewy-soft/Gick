import React from 'react';
import Text from '../../components/Text/Text';
import _ from 'lodash';
import View from '../../components/View/View';
import Card from '../../components/Card/Card';
import styles, { params } from './styles/ChannelCard/styles';
import { images } from '../../lib/bucket';
import Timer from '../../components/Counter/Timer';
import Image from '../../components/Image/Image';
import Badge from '../../components/Badges/Badge';
import Format from '../../components/Text/Format';
import colors from '../../colors';
import Symbol from '../../components/Symbol';
import Loader from '../../components/Loader';
import HandlerContext from '../../context/HandlerContext';
import ScoreButton from '../../components/Buttons/ScoreButton';
import LineClampText from '../../components/Text/LineClampText';

const _Loader = (props) => (
	<View style={styles.image_loader}>
		<Loader />
	</View>
);

class ChannelCard extends React.Component {
	static contextType = HandlerContext;
	shouldComponentUpdate(nextProps) {
		return false;
	}
	render() {
		const { channel, onPress } = this.props;
		const { t } = this.context;
		const image = images(channel.image)['240xauto'];
		let header;
		if (_.isNil(image)) {
			header = (
				<Image
					opacity={0.8}
					blur={10}
					type="background"
					src={images('5b876e00d33c6e3c514fbead')['50x50']}
					style={styles.noimage}
				/>
			);
		} else {
			header = <Image src={image} size="auto" type="background" style={styles.image} loader={<_Loader />} />;
		}
		const live = channel.type == 'topic' && !_.isNil(channel.props) && _.isNil(channel.props.closed) ? true : false;

		return (
			<Card
				shadow
				width={params.width}
				header={header}
				onPress={onPress}
				title={t(channel.name)}
				componentBackColor={colors.background}
				headerComponent={
					<View style={[ styles.headerContent, live && styles.liveBorder ]}>
						<View style={{ flexDirection: 'row' }}>
							{live && (
								<View style={styles.live} elevation={1}>
									<Badge size="s" content=" " />
									<Text style={styles.livetext}>LIVE</Text>
								</View>
							)}
							{channel.subscriptions > 0 && (
								<View style={styles.likes}>
									<Symbol name="fullHeart" size={12} color="#aaa" />
									<Format format="number" style={styles.livetext} value={channel.subscriptions} />
								</View>
							)}
						</View>
						{live && (
							<View style={styles.timer}>
								<Timer size="xs" theme="hours" time={channel.expire_at} />
							</View>
						)}
						<View style={{ position: 'absolute', right: -10, top: 0, opacity: 0.6 }}>
							<Symbol name="pushPin" size={34} />
						</View>
					</View>
				}
				component={
					<React.Fragment>
						<View style={{ marginTop: 4, height: 114 }}>
							<Text style={{ fontSize: 14, color: '#aaa', fontWeight: '200' }}>
								<LineClampText numberOfLines={6}>
									{t(channel.description) || t('尚无介绍', 'zh')}
								</LineClampText>
							</Text>
						</View>
						<View style={{ marginTop: 4 }}>
							<ScoreButton theme="transparent" size="s" score={channel.rating} />
						</View>
					</React.Fragment>
				}
			/>
		);
	}
}

export default ChannelCard;
