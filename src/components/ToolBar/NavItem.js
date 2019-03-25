import React from 'react';
import Text from '../Text/Text';
import View from '../View/View';
import HoverView from '../View/HoverView';
import Symbol from '../Symbol';
import Badge from '../Badges/Badge';
import styles from './styles/NavItem/styles';
import ToolTip from '../ToolTip';
import colors from '../../colors';

class NavItem extends React.Component {
	state = { hover: false };
	hover = () => {
		this.setState({ hover: !this.state.hover });
	};
	shouldComponentUpdate(nextProps, nextState) {
		return this.props !== nextProps || this.state.hover !== nextState.hover || false;
	}
	render() {
		const { icon, onPress, notice, noticeSize, content, title, active, noticeTheme, tips } = this.props;
		const { hover } = this.state;

		let css_badge;
		switch (noticeSize) {
			case 's':
				css_badge = styles.smallBadge;
				break;
			case 'square':
				css_badge = styles.label;
				break;
			case 'l':
			default:
				css_badge = styles.badge;
		}

		return (
			<View onPress={onPress} style={styles.outSide} onMouseOver={this.hover} onMouseOut={this.hover}>
				<HoverView hoverColor="gray">
					<View style={styles.container}>
						<View style={styles.icon}>
							{(icon && <Symbol name={icon} size={26} color={(active && 'orange') || '#fff'} />) ||
								content}
							{!!notice && (
								<View style={css_badge} elevation={1}>
									<Badge size={noticeSize || 's'} theme={noticeTheme || 'red'} content={notice} />
								</View>
							)}
						</View>
						{title && <Text style={styles.title}>{title}</Text>}
					</View>
				</HoverView>
				{tips &&
				hover && (
					<View style={styles.tips}>
						<ToolTip content={tips} show={hover} />
					</View>
				)}
			</View>
		);
	}
}

export default NavItem;
