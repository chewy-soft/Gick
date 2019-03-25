import React from 'react';
import { StyleSheet } from 'react-native';
import View from '../../components/View/View';
import Format from '../../components/Text/Format';
import User from '../User/User';
import getType from '../../lib/channel-types';

const styles = StyleSheet.create({
	text: { fontSize: 13 }
});

const TextMessage = ({ user_id, text }) => (
	<View>
		<User size="xxs" id={user_id} />
		<Format format="string" value={text} style={[ styles.text, { color: '#fff' } ]} numberOfLines={1} />
	</View>
);

export default (props) => {
	const { message } = props;
	const { type, payload, user_id } = message;
	switch (type) {
		case 'file':
			switch (payload.type) {
				case 'application/pdf':
					return null;
				case 'image/png':
				case 'image/jpeg':
				case 'image/jpg':
				case 'image/gif':
					return <TextMessage text="上传了新的图片！" user_id={user_id} />;
			}
		case 'channel':
			return <TextMessage text={`引用了一个【${getType(payload.type).label}】频道`} user_id={user_id} />;

		case 'text':
		default:
			return <TextMessage text={payload.content} user_id={user_id} />;
	}
};
