import React from 'react';
import View from '../../../components/View/View';
import Text from '../../../components/Text/Text';
import Symbol from '../../../components/Symbol';
import _ from 'lodash';
import styles from './styles/SubscribeButton/styles';
import Format from '../../../components/Text/Format';
import Button from '../../../components/Buttons/Button';
import colors from '../../../colors';
import HandlerContext from '../../../context/HandlerContext';
import Promised from '../../../components/Promise/Promised';

export class SubscribeButton extends React.Component {
	static contextType = HandlerContext;
	shouldComponentUpdate(nextProps) {
		return this.props.me !== nextProps.me || this.props.id !== nextProps.id;
	}

	renderItem = (channel) => {
		const { id, me, size, theme } = this.props;
		const { t, subscribeChannel, unsubscribeChannel } = this.context;
		const active = _.indexOf(me.channels, id) !== -1;
		const count = channel.count_subscribe;

		const content = (
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Text style={[ styles.text, { color: (theme == 'flat' && active && colors.success) || '#fff' } ]}>
					{(active && t('已订阅', 'zh')) || t('订阅', 'zh')}
				</Text>
				{count > 0 && (
					<Format
						format="number"
						value={count}
						style={[ styles.count, { color: (theme == 'flat' && active && colors.success) || '#fff' } ]}
					/>
				)}
				{count == 0 && !active && <Symbol name="sleep" size={16} />}
			</View>
		);

		return (
			<View style={styles.shadow} elevation={2}>
				{theme !== 'flat' && (
					<Button
						size={size || 'l'}
						theme={active ? 'green' : 'orange'}
						onPress={active ? () => unsubscribeChannel(id) : () => subscribeChannel(id)}
						icon={active ? 'simpleCheck' : 'channel'}
						component={content}
					/>
				)}
				{theme == 'flat' && (
					<Button
						size={size || 'l'}
						theme={active ? 'transGreen' : 'transparent'}
						onPress={active ? () => unsubscribeChannel(id) : () => subscribeChannel(id)}
						icon={active ? 'simpleCheck' : 'channel'}
						iconColor={active ? colors.success : '#fff'}
						component={content}
					/>
				)}
			</View>
		);
	};
	render() {
		const { id, me } = this.props;
		const { getChannel } = this.context;
		if (!id || !me) return null;
		return (
			<Promised promise={() => getChannel(id)} onShouldComponentUpdate={() => true}>
				{this.renderItem}
			</Promised>
		);
	}
}

export default SubscribeButton;
