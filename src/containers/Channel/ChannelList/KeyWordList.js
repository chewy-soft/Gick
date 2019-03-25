import React from 'react';
import View from '../../../components/View/View';
import Text from '../../../components/Text/Text';
import _ from 'lodash';
import css from '../../../lib/css';
import getType from '../../../lib/channel-types';
import Badge from '../../../components/Badges/Badge';
import Symbol from '../../../components/Symbol';
import Avatar from '../../../components/Avatar';
import HoverView from '../../../components/View/HoverView';
import { getSize } from './styles/styles';
import UserLoader from '../../User/parts/UserLoader';
import HandlerContext from '../../../context/HandlerContext';

export const KeywordChannelLoader = (props) => {
	const styles = getSize(props.size || 'l');
	return (
		<View style={styles.channelList}>
			<View style={styles.channelListContent}>
				<UserLoader size={props.size || 'l'} />
			</View>
		</View>
	);
};

const sizes = {
	xxs: { title: false, dec: false },
	xs: { title: false, dec: false },
	s: { title: false, dec: false },
	m: { title: true, dec: false },
	l: { title: true, dec: true },
	xl: { title: true, dec: true },
	xxl: { title: true, dec: true },
	xxxl: { title: true, dec: true }
};
export default class KeyWordList extends React.Component {
	static contextType = HandlerContext;
	render() {
		const { channel, onPress, size, hoverColor, notice } = this.props;
		const { t } = this.context;
		const styles = getSize(size || 'l');
		if (channel === undefined) return <KeywordChannelLoader size={size} />;
		const mapping = sizes[size || 'l'];

		return (
			<div id="keywordlist">
				<View style={styles.channelList} onPress={onPress}>
					<HoverView hoverColor={hoverColor || 'defaultColor'}>
						<View style={styles.channelListContent}>
							<Avatar
								id={channel.image}
								size={size || 'l'}
								border={size !== 'xs' && true}
								theme="light"
								name={t(channel.name)}
							/>
							<View style={styles.channelListC}>
								{mapping.title && (
									<View style={{ ...css.flex_row_center, flex: 1 }}>
										<Text style={styles.channelListT}>{getType(channel.type).info}</Text>
										<Badge
											size="l"
											theme="blue"
											fontSize={13}
											content={<Symbol name={getType(channel.type).icon} size={13} />}
										/>
									</View>
								)}
								<View style={{ flex: 1, flexWrap: 'wrap' }}>
									<Text style={styles.channelName} numberOfLines={1}>
										{t(channel.name)}
									</Text>
								</View>
								<View style={{ flex: 1, flexWrap: 'wrap' }}>
									{mapping.dec && (
										<Text style={styles.channelDes} numberOfLines={1}>
											{t(channel.description)}
										</Text>
									)}
								</View>
							</View>
						</View>
						{notice > 0 && (
							<View style={styles.notice}>
								<Badge size="l" content={notice} />
							</View>
						)}
					</HoverView>
				</View>
			</div>
		);
	}
}
