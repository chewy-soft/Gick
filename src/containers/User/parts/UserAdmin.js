import React from 'react';
import Symbol from '../../../components/Symbol';
import View from '../../../components/View/View';
import UserBase from './UserBase';
import source from '../../../components/Symbol/Svg/source';

const icons = {
	xxs: 12,
	xs: 14,
	s: 20,
	m: 32,
	l: 40,
	xl: 46
};
export default (props) => {
	const { size, theme, style } = props;

	return (
		<View style={{ flexDirection: 'row', alignItems: 'center' }}>
			<View>
				<UserBase
					user={{
						name: 'TapeHeadAI',
						avatar: source.logo_m
					}}
					size={size}
					theme={theme}
					style={style}
				/>
			</View>
			<Symbol name="admin" size={icons[size || 's']} />
		</View>
	);
};
