import React from 'react';
import _ from 'lodash';
import View from '../../components/View/View';
import Text from '../../components/Text/Text';
import styles from './styles/ChannelGallery/styles';
import ChannelCard from './ChannelCard';

export default ({ title, column, onMore, channels, router }) => (
	<React.Fragment>
		{title && (
			<View style={styles.masonryTitle}>
				<Text style={styles.type_title}>{title}</Text>
			</View>
		)}
		<View style={{ flexDirection: 'row', flexWrap: 'wrap', marginRight: -20 }}>
			{_.map(channels, (channel) => (
				<View style={{ marginRight: 20, marginBottom: 18 }} key={channel._id}>
					<ChannelCard channel={channel} onPress={() => router.toChannel(channel._id)} />
				</View>
			))}
		</View>
	</React.Fragment>
);
