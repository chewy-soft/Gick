import React from 'react';
import View from './View';
import CheckBox from '../Checkbox/Checkbox';
import c from '../../lib/css';

export default (props) => {
	const { maxWidth, align, onCheck } = props;
	let side;
	switch (align) {
		case 'right':
			side = { alignSelf: 'flex-end', width: '100%' };
			break;
		case 'left':
		case 'center':
		default:
			side = null;
			break;
	}
	return (
		<View style={[ side, { maxWidth: maxWidth || '100%', flex: 1 } ]} {...props}>
			{props.children}
			{onCheck && (
				<View style={{ ...c.absolute, right: -18 }}>
					<CheckBox size="s" onChange={onCheck} />
				</View>
			)}
		</View>
	);
};
