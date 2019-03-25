import React from 'react';
import { StyleSheet } from 'react-native';
import Text from '../Text/Text';
import View from '../View/View';
import QRCode from 'qrcode.react';
import c from '../../lib/css';
import * as share from '../../lib/share';
import HandlerContext from '../../context/HandlerContext';

const styles = StyleSheet.create({
	shareQr: { height: 600, width: 600, backgroundColor: '#fff', ...c.flex_center, borderRadius: 6, margin: 'auto' },
	shareText: { fontSize: 24, marginTop: 0, marginBottom: 20, paddingHorizontal: 80 }
});

export default class QRcode extends React.PureComponent {
	static contextType = HandlerContext;
	render() {
		const { onClose, channel } = this.props;
		const { t } = this.context;
		return (
			<View style={{ ...c.absolute_full }}>
				<View style={{ ...c.absolute_full }} onPress={onClose} />
				<View style={styles.shareQr}>
					<Text style={styles.shareText}>{t('使用微信“扫一扫”，', 'zh')}</Text>
					<Text style={styles.shareText}>{t('打开网页后点击屏幕右上角分享按钮', 'zh')}</Text>
					<QRCode value={share.weChatQr(channel._id, 'zh', t)} size={280} />
				</View>
			</View>
		);
	}
}
