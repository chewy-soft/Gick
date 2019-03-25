import React from 'react';
import Text from '../../../components/Text/Text';
import View from '../../../components/View/View';
import _ from 'lodash';
import styles from '../styles/SearchFilter/styles';
import Button from '../../../components/Buttons/Button';

export default (props) => {
	const { tags, onSelect, selected } = props;
	return (
		<View style={styles.tagList}>
			<Text style={styles.tagTitle}>常用：</Text>
			<View style={styles.tags}>
				{_.map(tags, (tag) => (
					<View style={styles.tag} key={tag.value}>
						<Button
							content={tag.label}
							size="s"
							theme={(_.indexOf(selected, tag.value) !== -1 && 'darkBlue') || 'halfDarkGreen'}
							onPress={() => onSelect(tag.value)}
						/>
					</View>
				))}
			</View>
		</View>
	);
};
