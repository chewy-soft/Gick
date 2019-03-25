import React from 'react';
import Text from '../Text/Text';
import FadeView from '../View/FadeView';
import styles from './styles/styles';
import c from '../../lib/css';

export default (props) => {
	const { content, show, top, right, bottom, left } = props;
	if (process.env.RESOLUTION == 'mobile') {
		return null;
	}
	return (
		<FadeView
			visible={show}
			fadeIn={200}
			style={[ styles.container, { ...c._absolute(top, right, bottom, left) } ]}
		>
			<Text style={styles.content}>{content}</Text>
		</FadeView>
	);
};
