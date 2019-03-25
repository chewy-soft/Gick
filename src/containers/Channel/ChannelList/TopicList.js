import React from 'react';
import HorizontalCard from '../../../components/Card/HorizontalCard';
import Text from '../../../components/Text/Text';
import styles from './styles/styles';
import Symbol from '../../../components/Symbol';
import View from '../../../components/View/View';
import User from '../../User/User';
import Format from '../../../components/Text/Format';
import Badge from '../../../components/Badges/Badge';
import HorizontalCardLoader from '../../../components/Loader/HorizontalCardLoader';
import colors from '../../../colors';
import HandlerContext from '../../../context/HandlerContext';

export default class TopicList extends React.Component {
	static contextType = HandlerContext;
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.topic !== nextProps.topic;
	}

	render() {
		const { topic, onPress, origin_locale, locale } = this.props;
		const { t } = this.context;
		if (topic === undefined) return <HorizontalCardLoader />;
		const currentLocale = origin ? origin_locale : locale;
		const { closed } = topic.props || {};

		return (
			<HorizontalCard
				src={topic.image}
				theme="cover"
				onPress={onPress}
				title={t(topic.name, currentLocale)}
				onMouseOver={this.hover}
				onMouseOut={this.hover}
				subTitle={t(topic.description, currentLocale)}
				component={
					<View style={[ styles.bottom, { flexDirection: 'row', justifyContent: 'space-between' } ]}>
						<View style={{ flexDirection: 'row' }}>
							<User id={topic.user_id} size="xxs" />
							<View style={styles.likes}>
								<View style={{ opacity: 0.6 }}>
									<Symbol name="channel" size={14} color={colors.lightOrange} />
								</View>
								<Format format="number" style={styles.suffix} value={topic.count_subscribe} />
							</View>
						</View>
						{closed == false && (
							<View style={styles.live}>
								<Badge size="s" content=" " />
								<Text style={styles.livetext}>LIVE</Text>
							</View>
						)}
					</View>
				}
			/>
		);
	}
}
