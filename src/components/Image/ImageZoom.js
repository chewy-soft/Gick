import React from 'react';
import { StyleSheet } from 'react-native';
import View from '../View/View';
import Image from './Image';
import ExternalLinkView from '../View/ExternalLinkView';
import css from '../../lib/css';
import Symbol from '../Symbol';

const styles = StyleSheet.create({
	content: {
		...css.absolute_full,
		...css.flex_center
	},
	image: {
		width: '100%',
		height: '100%',
		maxHeight: process.env.RESOLUTION == 'mobile' ? '100%' : 800,
		flex: 1,
		maxWidth: '100%'
	},
	orignal: { ...css.absolute, bottom: 12, right: 12, zIndex: 10 }
});

export default (props) => {
	const { src, onClose, original } = props;
	return (
		<View style={styles.content}>
			<View style={styles.content} onPress={onClose} activeOpacity={1} />
			<Image
				src={src}
				size="auto"
				style={styles.image}
				resizeMode="contain"
				onPress={onClose}
				type={process.env.RESOLUTION == 'mobile' && 'background'}
			/>
			{props.sub}
			<View style={styles.orignal}>
				<ExternalLinkView url={original}>
					<Symbol name="zoom" />
				</ExternalLinkView>
			</View>
		</View>
	);
};
