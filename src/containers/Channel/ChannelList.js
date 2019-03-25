import React from 'react';
import _ from 'lodash';
import BoardGameList from './ChannelList/BoardGameList';
import TopicList from './ChannelList/TopicList';
import KeywordList from './ChannelList/KeyWordList';
import User from '../User/User';
import View from '../../components/View/View';
import Text from '../../components/Text/Text';
import Avatar from '../../components/Avatar';
import Button from '../../components/Buttons/Button';
import getStyle from './styles/ChannelList/styles';
import css from '../../lib/css';

export default (props) => {
	const { notice, t, type, onPress, channel, locale, onDelete, size } = props;
	const styles = getStyle(size || 'l');
	if (type !== 'user' && channel === null)
		return (
			<View style={styles.loader}>
				<Avatar border size={size || 'l'} svg="error" />
				<View style={styles.loaderInfo}>
					{size !== 'xs' && <Text style={styles.loaderTitle}>{t('找不到了...', 'zh')}</Text>}
					<Text style={styles.loaderSub}>{t('此条内容已被删除', 'zh')}</Text>
				</View>
				<View style={{ marginLeft: 'auto' }}>
					<Button theme="flat" icon="delete" onPress={onDelete} />
				</View>
			</View>
		);

	if (type == 'boardgame') {
		return <BoardGameList boardgame={channel} theme="boardgame" onPress={onPress} locale={locale} />;
	}
	if (type == 'topic') {
		return <TopicList topic={channel} onPress={onPress} />;
	}
	if (type == 'user') {
		return (
			<View style={{ height: 57 }}>
				<User user={channel} onPress={onPress} style={{ ...css.padding_r(8) }} />
			</View>
		);
	}
	return (
		<KeywordList notice={notice} channel={channel} onPress={onPress} size={size} hoverColor={props.hoverColor} />
	);
};
