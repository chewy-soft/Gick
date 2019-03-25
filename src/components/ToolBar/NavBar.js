import React from 'react';
import View from '../View/View';
import { getStyles } from './styles/NavBar/styles';
import NavItem from './NavItem';
import _ from 'lodash';

export default (props) => {
	const { onPress, logo, right, type, items, component } = props;
	const styles = getStyles(type || 'right');
	return (
		<View style={styles.container} onPress={onPress}>
			{logo && (
				<View style={styles.left}>
					<View style={styles.logo}>{logo}</View>
				</View>
			)}
			<View style={styles.items}>
				{items &&
					_.map(items, (item) => (
						<NavItem
							title={item.title}
							icon={item.icon}
							onPress={item.onPress}
							key={item.key}
							tips={item.tips}
							content={item.content}
							notice={item.notice}
							noticeSize={item.noticeSize}
							active={item.active}
							noticeTheme={item.noticeTheme}
						/>
					))}
				{component}
			</View>
			{right && right}
		</View>
	);
};
