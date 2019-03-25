import React from 'react';
import Text from '../../../components/Text/Text';
import { StyleSheet } from 'react-native';
import colors from '../../../colors';
import View from '../../../components/View/View';

const styles = StyleSheet.create({
	container: { flexDirection: 'row', alignItems: 'center', flex: 1 },
	content: { justifyContent: 'space-around' },
	avatar: { backgroundColor: colors.loader, marginRight: 8 },
	sub: {
		width: 60,
		backgroundColor: colors.loader,
		height: 14,
		borderRadius: 7
	},
	downSub: {
		width: 60,
		backgroundColor: colors.loader,
		height: 12,
		borderRadius: 6
	},
	text: {
		height: 16,
		backgroundColor: colors.loader,
		width: 80,
		borderRadius: 16
	}
});
const sizes = {
	xxs: { width: 20, title: false, state: false },
	xs: { width: 24, title: false, state: false },
	s: { width: 33, title: false, state: true },
	m: { width: 50, title: true, state: true },
	l: { width: 68, title: true, state: true },
	xl: { width: 78, title: true, state: true },
	xxl: { width: 98, title: true, state: true }
};

export default (props) => {
	const { size, style } = props;
	const _css = sizes[size || 's'].width;

	return (
		<View style={[ styles.container, style ]}>
			<View
				style={[
					styles.avatar,
					{
						borderRadius: _css / 2,
						height: _css,
						width: _css
					}
				]}
			/>
			<View style={[ styles.content, { height: _css } ]}>
				{sizes[size || 's'].title && <Text style={styles.sub} />}
				<Text style={styles.text} />
				{sizes[size || 's'].state && <Text style={styles.downSub} />}
			</View>
		</View>
	);
};
