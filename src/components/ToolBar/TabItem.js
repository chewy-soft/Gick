import React from 'react';
import Text from '../Text/Text';
import View from '../View/View';
import { getStyles } from './styles/TabItem/styles';
import Badge from '../Badges/Badge';
import Symbol from '../Symbol';
import HoverView from '../View/HoverView';
import _ from 'lodash';

export default (props) => {
	const { onPress, title, active, notice, icon, theme } = props;
	const css_active = active ? 'active' : 'default';
	const styles = getStyles(css_active || 'default');

	return (
		<HoverView hoverColor={(_.isNil(onPress) && 'transparent') || 'rgba(255,255,255,.1)'}>
			<View
				onPress={onPress}
				style={[
					styles.content,
					{
						backgroundColor: theme == 'hover' && active && 'rgba(255,255,255,.2)'
					}
				]}
			>
				{icon && (
					<View style={styles.icon}>
						<Symbol name={icon} size={18} color={active ? '#fff' : '#aaa'} />
						<Text style={styles.bottomText}>{title}</Text>
					</View>
				)}
				{!icon && <Text style={styles.tab}>{title}</Text>}
				{notice ? (
					<View style={styles.notice}>
						<Badge size="l" content={notice} />
					</View>
				) : null}
			</View>
		</HoverView>
	);
};
