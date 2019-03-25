import React from 'react';
import Text from '../../components/Text/Text';
import View from '../../components/View/View';
import ChannelSimpleCard from './parts/ChannelSimpleCard';
import _ from 'lodash';
import styles, { params } from './styles/ChannelStaticGallery/styles';
import Symbol from '../../components/Symbol';
import RoundButton from '../../components/Buttons/RoundButton';
import HoverView from '../../components/View/HoverView';

export default ({ title, channels, onEdit, onDelete, t, onSelect, onNew, onRemove, unsubscribeChannel }) => {
	if (_.size(channels) == 0) return null;

	return (
		<View>
			<Text style={styles.type_title}>{title}</Text>
			<View style={styles.cards_content}>
				{_.map(channels, (channel) => (
					<View style={styles.card_content} key={channel._id}>
						<ChannelSimpleCard
							{...{ channel, t }}
							onPress={() => onSelect(channel)}
							onDelete={() => unsubscribeChannel(channel._id)}
						/>
						{onDelete && (
							<View style={styles.delete} onPress={() => onRemove(channel)}>
								<HoverView hoverColor={'rgba(0,0,0,.2)'}>
									<Symbol name="close" size={params.delete} />
								</HoverView>
							</View>
						)}
					</View>
				))}
				{onEdit && (
					<View style={styles.add}>
						<RoundButton icon="add" size="xl" theme="darkBlue" onPress={onNew} />
					</View>
				)}
			</View>
		</View>
	);
};
