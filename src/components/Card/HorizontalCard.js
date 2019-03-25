import React from 'react';
import Text from '../Text/Text';
import Image from '../Image/Image';
import View from '../View/View';
import { styles, params } from './styles/HorizontalCard/styles';
import LinearGradientView from '../View/LinearGradientView';
import colors from '../../colors';
import Symbol from '../Symbol';
import HoverView from '../View/HoverView';
import { images } from '../../lib/bucket';

class HorizontalCard extends React.Component {
	state = { menu: false };
	ShowMenu = () => {
		this.setState({ menu: !this.state.menu });
	};

	shouldComponentUpdate(nextProps, nextState) {
		return this.state.menu !== nextState.menu;
	}

	render() {
		const { onPress, component, title, subTitle, menus, src } = this.props;
		const theme = this.props.theme || 'cover';
		let _src;
		if (_.isNil(src)) {
			_src = 'http://svg-support.boardgamereview.cn/choseHeader_128.png';
		} else {
			_src = (theme == 'stretch' && images(src)['128x85']) || images(src)['128x85_min'];
		}

		const { menu } = this.state;
		let onPress_type = (menus && this.ShowMenu) || onPress;

		return (
			<View style={styles.container} onPress={onPress_type}>
				<View style={styles.gameCard}>
					<HoverView hoverColor="gray" theme="horizontalCard">
						<View style={styles.leftContainer}>
							<Image
								src={_src}
								type={(theme == 'cover' && 'background') || 'image'}
								size={'card_small'}
								style={styles.headerImage}
							/>
						</View>
						<View style={styles.rightContainer}>
							<Text numberOfLines={1} style={styles.title}>
								{title}
							</Text>
							<Text numberOfLines={1} style={styles.subTitle}>
								{subTitle}
							</Text>
							{component}
						</View>
					</HoverView>
				</View>
				{menus && (
					<View onPress={() => this.setState({ menu: true })} style={styles.more}>
						<Symbol name="menuMore" color="white" size={params.icon} />
					</View>
				)}
				<LinearGradientView
					start={colors.darkBlue}
					end={colors.basic}
					theme="leftToRight"
					style={{ height: 1, width: '100%' }}
				/>

				{menus &&
				menu && (
					<View style={styles.menu} activeOpacity={1} onPress={() => this.setState({ menu: false })}>
						<View style={styles.close}>
							<Symbol name="dropRight" size={params.icon} color="#fff" />
						</View>
						{_.map(menus, (menu) => (
							<View
								style={[ styles.menus, { backgroundColor: menu.color } ]}
								key={menu.key}
								onPress={menu.onPress}
								activeOpacity={1}
							>
								<Symbol name={menu.icon} size={30} />
								<Text style={styles.menuLabel}>{menu.label}</Text>
							</View>
						))}
					</View>
				)}
			</View>
		);
	}
}

export default HorizontalCard;
