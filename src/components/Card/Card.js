import React from 'react';
import Text from '../Text/Text';
import getStyles from './styles/Card/styles';
import View from '../View/View';
import colors from '../../colors';
import c from '../../lib/css';
import HoverView from '../View/HoverView';
import _ from 'lodash';
import LineClampText from '../Text/LineClampText';
import { Platform } from 'react-native';

export default (props) => {
	const {
		onPress,
		title,
		description,
		component,
		theme,
		shadow,
		header,
		fontColor,
		subFontColor,
		width,
		headerComponent,
		componentBackColor,
		iconCompnent,
		size,
		numberOfLines
	} = props;
	const styles = getStyles(size || 'l');
	const lineHeight = { l: 24, m: 18 };

	return (
		<View style={{ width: width }}>
			<HoverView hoverColor="flat" theme="card">
				<View style={[ { flex: 1 }, shadow && styles.shadow ]}>
					{shadow && <View style={[ styles.boxShadow, styles.left ]} />}
					{shadow && <View style={[ styles.boxShadow, styles.right ]} />}
					<View onPress={onPress}>
						{header}
						<View style={{ ...c.absolute_full }}>{headerComponent}</View>
					</View>
					<View
						style={[
							styles.content,
							{
								backgroundColor:
									(theme == 'simple' && 'transparent') || componentBackColor || colors.basic
							}
						]}
					>
						{!_.isNil(title) &&
						Platform.OS !== 'web' && (
							<Text
								style={[ styles.title, { color: fontColor || '#fff' } ]}
								numberOfLines={2}
								onPress={onPress}
							>
								{title}
							</Text>
						)}
						{!_.isNil(title) &&
						Platform.OS == 'web' && (
							<Text style={[ styles.title, { color: fontColor || '#fff' } ]} onPress={onPress}>
								<LineClampText
									numberOfLines={numberOfLines || 2}
									maxHeight={numberOfLines * lineHeight[size || 'l'] || 48}
								>
									{title}
								</LineClampText>
							</Text>
						)}
						{!_.isNil(description) && (
							<Text
								style={[ styles.description, { color: subFontColor || '#ccc' } ]}
								numberOfLines={1}
								onPress={onPress}
							>
								{description}
							</Text>
						)}
						{iconCompnent}
						{component}
					</View>
				</View>
			</HoverView>
		</View>
	);
};
