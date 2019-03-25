import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import css from '../../lib/css';
export default (props) => (
	<View style={[ { flex: 1, ...css.flex_center }, props.style ]}>
		<ActivityIndicator />
	</View>
);
