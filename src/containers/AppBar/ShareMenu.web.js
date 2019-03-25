import React from 'react';
import View from '../../components/View/View';
import styles from './styles/styles';
import List from '../../components/List';
import colors from '../../colors';
import _ from 'lodash';
import * as share from '../../lib/share';
import ExternalLinkView from '../../components/View/ExternalLinkView';
import HandlerContext from '../../context/HandlerContext';

export default class ShareMenu extends React.Component {
	static contextType = HandlerContext;
	render() {
		const { channel } = this.props;
		const { t, openModal } = this.context;
		const linkItems = [
			{ key: 'qq', label: 'QQ', icon: 'qq', color: colors.qq, url: share.webQQShare(channel, 'zh', t) },
			{
				key: 'weibo',
				label: '微博',
				icon: 'weibo',
				color: colors.weibo,
				url: share.webWeiboShare(channel, 'zh', t)
			},
			{
				key: 'twitter',
				label: 'Twitter',
				icon: 'twitter',
				color: colors.twitter,
				url: share.webTwitterShare(channel, 'zh', t)
			},
			{
				key: 'facebook',
				label: 'Facebook',
				icon: 'facebook',
				color: colors.facebook,
				url: share.webFacebookShare(channel, 'zh', t)
			}
		];

		return (
			<View style={styles.menus}>
				<List
					text="微信/朋友圈"
					icon="wechat"
					theme="light"
					size="s"
					iconColor="#1AAD19"
					style={styles.list}
					onPress={() => openModal('QR', { type: 'QR', value: channel })}
				/>
				{_.map(linkItems, (i) => (
					<View key={i.key}>
						<ExternalLinkView url={i.url}>
							<List
								text={i.label}
								icon={i.icon}
								theme="light"
								size="s"
								iconColor={i.color}
								style={styles.list}
								onPress={() => {}}
							/>
						</ExternalLinkView>
					</View>
				))}
			</View>
		);
	}
}
