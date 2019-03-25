import React from 'react';
import colors from '../../colors';
import Text from '../../components/Text/Text';
import Button from '../../components/Buttons/Button';
import Symbol from '../../components/Symbol';
import Format from '../../components/Text/Format';
import Tooltip from '../../components/ToolTip';
import styles from './parts/styles/Interaction/styles';
import RoundButton from '../../components/Buttons/RoundButton';
import View from '../../components/View/View';
import User from '../User/User';
import TimeFormat from '../../components/Text/TimeFormat';
import ScrollView from '../../components/View/ScrollView';
import { openModal } from '../../actions';
import HandlerContext from '../../context/HandlerContext';

class Interaction extends React.Component {
	static contextType = HandlerContext;
	state = { status: undefined, tip: false, full: false };
	showMore() {
		this.setState({ full: !this.state.full });
	}
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.status !== nextProps.status || this.state !== nextState;
	}

	onReview = async (status) => {
		const { interaction, reviewInteraction } = this.props;
		try {
			const result = await reviewInteraction(interaction._id, status);
			this.setState({ status });
		} catch (error) {
			this.setState({ error });
		}
	};

	isStatus = (status) => {
		if (this.state.status) {
			return this.state.status == status;
		} else {
			return _.chain(this.props.interaction.reviews).get(status).indexOf(this.props.me._id).value() !== -1;
		}
	};

	render() {
		let { interaction, reviewInteraction, onPress, expand, type } = this.props;
		const { tip, full, status } = this.state;
		const { t, openModal } = this.context;

		const reviews = interaction.reviews || {};
		const more =
			(expand && [ styles.interactionContent ]) || type == 'full'
				? styles.interactionContent
				: [ styles.interactionContent, styles.hideMore ];

		let full_interaction = (
			<View style={styles.fullInteractionContent} elevation={1}>
				<View style={styles.closeFull}>
					<RoundButton icon="close" theme="black" size="s" onPress={() => this.setState({ full: false })} />
				</View>
				<ScrollView
					style={{
						backgroundColor: '#2f3136',
						paddingVertical: 30,
						paddingHorizontal: 10
					}}
					keyboardDismissMode="on-drag"
				>
					<Text style={{ color: '#fff' }}>
						<Format value={interaction.comment} format="text" />
					</Text>
				</ScrollView>
			</View>
		);

		return (
			<View style={styles.cell}>
				<View style={styles.container}>
					<User
						id={interaction.user_id}
						onPress={() => router.toUser(interaction.user_id)}
						size="xs"
						style={{ padding: 4 }}
					/>
					<View style={styles.scoreContainer}>
						<View style={styles.scoreContent} onPress={onPress}>
							<Text
								style={
									(interaction.rating == 10 && [ styles.scoreIcon, styles.good ]) || [
										styles.scoreIcon,
										styles.bad
									]
								}
							>
								<Symbol
									name={(interaction.rating == 10 && 'good') || 'bad'}
									color={(interaction.rating == 10 && colors.lightBlue) || colors.warning}
								/>
							</Text>
							{(interaction.rating == 10 && <Text style={styles.score}>{t('推荐', 'zh')}</Text>) || (
								<Text style={styles.score}>{t('不推荐', 'zh')}</Text>
							)}
							<TimeFormat style={styles.date} value={interaction.created_at} format="fullDate" />
						</View>
					</View>

					{interaction.comment && (
						<Text style={more} numberOfLines={3}>
							<Format value={interaction.comment} format="text" />
						</Text>
					)}
					{full && full_interaction}
					{interaction.comment && (
						<Text style={(expand && styles.display) || styles.showButton} onPress={() => this.showMore()}>
							{type !== 'full' && <Text onPress={onPress}>{t('全文', 'zh')}</Text>}
						</Text>
					)}
					{interaction.comment && (
						<View style={styles.footer}>
							<View style={styles.commentButton}>
								<Text style={styles.commentTitle}>{t('这篇测评是否有价值', 'zh')}</Text>
								<View style={styles.button}>
									<Button
										theme={this.isStatus('good') ? 'blue' : 'darkBlue'}
										icon="good"
										size="s"
										content={t('有', 'zh')}
										onPress={() => this.onReview('good')}
									/>
								</View>
								<View style={styles.button}>
									<Button
										theme={this.isStatus('bad') ? 'yellow' : 'darkBlue'}
										icon="bad"
										size="s"
										content={t('否', 'zh')}
										onPress={() => this.onReview('bad')}
									/>
								</View>
								<View style={styles.button}>
									<Button
										theme={this.isStatus('funny') ? 'orange' : 'darkBlue'}
										icon="emoji"
										size="s"
										content={t('欢乐', 'zh')}
										onPress={() => this.onReview('funny')}
									/>
								</View>
								<View
									style={styles.report}
									onPress={() =>
										openModal('report', {
											meta: {
												type: 'interaction',
												payload: interaction
											}
										})}
									onMouseOver={() => this.setState({ tip: true })}
									onMouseOut={() => this.setState({ tip: false })}
								>
									<Symbol name="report" size={14} />
									<Text style={styles.reportText}>{t('举报', 'zh')}</Text>
									<Tooltip
										show={tip}
										content={t('举报该内容违反相关条例或《Gick行为准则》', 'zh')}
										bottom={-3}
										left={-296}
									/>
								</View>
							</View>
							<View style={{ flexDirection: 'row' }}>
								{!!_.size(reviews.good) && (
									<Text style={styles.total}>{_.size(reviews.good) + ' ' + t('人觉得有价值', 'zh')}</Text>
								)}
								{!!_.size(reviews.bad) && (
									<Text style={styles.total}>{_.size(reviews.bad) + ' ' + t('人觉得没价值', 'zh')}</Text>
								)}
								{!!_.size(reviews.funny) && (
									<Text style={styles.total}>{_.size(reviews.funny) + ' ' + t('人觉得很欢乐', 'zh')}</Text>
								)}

								{!_.size(reviews) && <Text style={styles.total}>{t('尚未有人觉得这条测评有价值', 'zh')}</Text>}
							</View>
						</View>
					)}
				</View>
			</View>
		);
	}
}

export default Interaction;
