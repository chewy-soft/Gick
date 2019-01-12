import React from 'react';
import { View } from 'react-native';
import Avatar from '../../../../src/components/Avatar';
import { DividerHorizontal } from '../../../sampleUI/helps';

export default (props) => (
	<View style={{ flexDirection: 'row' }}>
		<Avatar size="l" online="online" name='jun' />
		<DividerHorizontal />
		<Avatar size="l" online="online" name="nana" />
		<DividerHorizontal />
		<Avatar size="l" name='Gick' />
		<DividerHorizontal />
	</View>
);
