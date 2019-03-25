import React from 'react';
import View from '../View/View';
import Format from '../Text/Format';
import Symbol from '../Symbol';
import { getStyles, params } from './styles/ScoreButton/styles';

export default (props) => {
	const { score, onPress, theme, size } = props;
	const styles = getStyles(size || 'm');
	let color;
	switch (theme) {
		case 'transparent':
			color = styles.transparent;
			break;
		case 'blue':
		default:
			color = styles.blue;
			break;
	}
	return (
		<View style={[ styles.edit, color ]} onPress={onPress}>
			<Format format={(score && 'score') || 'string'} value={score || '-'} style={styles.score} />
			{onPress && (
				<View style={styles.scoreEdit}>
					<Symbol name="edit" size={params.iconSize} />
				</View>
			)}
		</View>
	);
};
