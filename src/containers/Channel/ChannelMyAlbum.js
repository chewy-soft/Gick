import React from 'react';
import Text from '../../components/Text/Text';
import styles from './styles/ChannelMyAlbum/styles';
import Symbol from '../../components/Symbol';
import View from '../../components/View/View';
import _ from 'lodash';
import ExternalLinkView from '../../components/View/ExternalLinkView';
import colors from '../../colors';

export default (props) => {
	const { onPress } = props;
	return (
		<View style={styles.container}>
			<View onPress={onPress}>
				<Text style={styles.title}>真心为你</Text>
				<Text style={styles.subTitle}>我们定期为您汇总了最适合您的频道合辑，尽情享受吧！</Text>
			</View>
			<View style={styles.aiInfo}>
				<Symbol name="brainFont_w" size={46} />
				<View style={styles.info}>
					<Text style={styles.aiTitle}>Deep Learning Inside</Text>
					<Text style={styles.aiSubTitle}>
						We determine recommendations in real time using cutting-edge technologies.
						<ExternalLinkView url="https://tapehead.ai" style={{ color: colors.lightBlue }}>
							Wanna know how?
						</ExternalLinkView>
					</Text>
				</View>
			</View>
		</View>
	);
};
