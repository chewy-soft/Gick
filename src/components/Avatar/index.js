import React from 'react';
import Image from '../Image/Image';
import View from '../View/View';
import Text from '../Text/Text';
import Symbol from '../Symbol';
import { getStyles, getParams } from './styles';
import _ from 'lodash';
import colors from '../../colors';
import { images } from '../../lib/bucket';

export default (props) => {
	const { size, online, id, userBadge, svg, theme, border, name } = props;
	const styles = getStyles(size || 's', online, theme || 'dark');
	const params = getParams(size || 's');

	const colors_array = [
		colors.darkBlue,
		'#aed9d8',
		'#f2c494',
		'#f9f1e6',
		'#ff8b8b',
		'#85a9a2',
		'#414f67',
		'#512e47',
		'#178e96',
		'#cba0aa',
		'#6fbd69',
		'#dcbaae',
		'#bbabd0',
		'#91cfc9',
		'#6bb3c0',
		'#99bcdd',
		'#2d4e76',
		'#4198b9',
		'#1e5670',
		colors.loader,
		'#b8e4e5',
		'#d85c5e'
	];
	const sizes = {
		xxs: '20x20_min',
		xs: '24x24_min',
		s: '33x33_min',
		m: '50x50',
		l: '68x68_min',
		xl: '78x78_min',
		xxl: '98x98_min',
		xxxl: '118x118_min'
	};

	return (
		<View>
			{userBadge && (
				<View style={styles.badge} elevation={1}>
					<Symbol size={params.title} name={userBadge} />
				</View>
			)}
			<View
				style={[
					styles.image,
					border && styles.border,
					{
						backgroundColor: (name && colors_array[name.charCodeAt(0) % 22]) || 'transparent'
					}
				]}
			>
				{id && (
					<div
						id={`avatar_${size}`}
						style={{
							width: 'inherit',
							height: 'inherit',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<Image src={images(id)[sizes[size || 's']]} type="background" style={styles.image} />
					</div>
				)}
				{svg && <Symbol size={params.svg} name={svg || 'apologize'} />}

				{_.isNil(id) && _.isNil(svg) && <Text style={styles.name_font}>{_.first(name)}</Text>}
			</View>
			{online && online !== 'unknow' && <View style={styles.onlineState} />}
		</View>
	);
};
