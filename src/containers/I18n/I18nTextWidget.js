import React from 'react';
import _ from 'lodash';
import Text from '../../components/Text/Text';
import View from '../../components/View/View';
import styles from './styles/styles';
import Format from '../../components/Text/Format';
import Button from '../../components/Buttons/Button';
import Empty from '../../components/Static/EmptyGallery';
import { hasLocale } from '../../lib/i18n';
import LineClampText from '../../components/Text/LineClampText';

export const I18nTextHeader = (props) => {
	const { t, origin_locale, locale, title, origin, onOriginChange } = props;
	const currentLocale = origin ? origin_locale : locale;
	return (
		<View style={styles.header}>
			<Text style={styles.descriptionHeader}>{title}</Text>
			<Button
				content={t('译文', 'zh')}
				theme={currentLocale == locale && !origin ? 'transparent' : 'noStyle'}
				size="s"
				onPress={() => onOriginChange(false)}
			/>
			<View style={{ marginLeft: 4 }}>
				<Button
					content={t('原文', 'zh')}
					theme={currentLocale == origin_locale && origin ? 'transparent' : 'noStyle'}
					size="s"
					onPress={() => onOriginChange(true)}
				/>
			</View>
		</View>
	);
};

export const I18nTextBody = (props) => {
	const { t, origin_locale, locale, value, origin, router, id, type, numberOfLines, own } = props;
	const currentLocale = origin ? origin_locale : locale;
	const emptyInfo = _.isNil(t(value, origin_locale))
		? '尚无介绍。丰富的内容更容易吸引其他同好带来更多实用的信息。'
		: '尚无译文。丰富的内容更容易吸引其他同好带来更多实用的信息。';

	return (
		<View style={styles.widgetInside}>
			{!hasLocale(value, currentLocale) &&
			type == 'row' && (
				<View style={{ flexDirection: 'row' }}>
					<Text style={{ color: '#aaa' }}>{t(emptyInfo, 'zh')}</Text>
					{own && (
						<View style={{ marginTop: 2 }}>
							<Button
								content={t('编辑介绍', 'zh')}
								theme="transparent"
								size="s"
								onPress={() => router.toChannelEdit(id)}
							/>
						</View>
					)}
				</View>
			)}
			{!hasLocale(value, currentLocale) &&
			type !== 'row' && (
				<Empty
					theme="transparent"
					info={t(emptyInfo, 'zh')}
					component={
						own && (
							<Button
								content={t('编辑介绍', 'zh')}
								theme="transparent"
								onPress={() => router.toChannelEdit(id)}
							/>
						)
					}
				/>
			)}
			{hasLocale(value, currentLocale) && (
				<LineClampText numberOfLines={numberOfLines || undefined}>
					<Format
						format="string"
						value={t(value, currentLocale)}
						style={styles.descriptionValue}
						numberOfLines={numberOfLines || undefined}
					/>
				</LineClampText>
			)}
		</View>
	);
};

export class I18nTextWidget extends React.Component {
	state = { origin: false };
	onOriginChange = (origin) => this.setState({ origin });
	render() {
		const { origin } = this.state;
		return (
			<View style={styles.widget}>
				<I18nTextHeader {...this.props} onOriginChange={this.onOriginChange} origin={origin} />
				<I18nTextBody {...this.props} origin={origin} />
			</View>
		);
	}
}

export const I18nTextBasic = (props) => (
	<React.Fragment>
		<I18nTextHeader {...props} />
		<I19nTextBody {...props} />
	</React.Fragment>
);
