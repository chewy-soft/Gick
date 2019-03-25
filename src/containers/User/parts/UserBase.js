import React from 'react';
import List from '../../../components/List';
import _ from 'lodash';
import View from '../../../components/View/View';
import getStyles from './styles';
import HandlerContext from '../../../context/HandlerContext';
import LineClampText from '../../../components/Text/LineClampText';

const sizes = {
	xxs: { title: false, state: false, wrap: false },
	xs: { title: false, state: false, wrap: false },
	s: { title: false, state: true, wrap: false },
	m: { title: true, state: true, wrap: false },
	l: { title: true, state: true, wrap: true, lines: 3 },
	xl: { title: true, state: true, wrap: true, lines: 3 },
	xxl: { title: true, state: true, wrap: true, lines: 3 },
	xxxl: { title: true, state: true, wrap: true, lines: 4 }
};

class UserBase extends React.PureComponent {
	static contextType = HandlerContext;
	right = (user) => {
		return this.props.rightComponent && this.props.rightComponent(user);
	};
	render() {
		const { size, user, online, title, onPress, theme, style } = this.props;
		const { t } = this.context;
		const styles = getStyles(size || 's');
		const mapping = sizes[size || 's'];
		let downSub;
		if (mapping.state && mapping.lines) {
			downSub = <LineClampText numberOfLines={mapping.lines}>{t(user.description)}</LineClampText>;
		}
		if (mapping.state && !mapping.lines) {
			downSub = t(user.description);
		}
		return (
			<View style={{ flexDirection: 'row', flex: 1 }}>
				<List
					avatar={user.image || '000000000000000000000001'}
					text={t ? t(user.name) : user.name}
					size={size || 's'}
					sub={mapping.title && title}
					online={online}
					userBadge={user.badge}
					wrap={mapping.wrap}
					downSub={downSub}
					onPress={onPress}
					theme={theme}
					style={[ styles.inside, style ]}
				/>
				{this.right(user)}
			</View>
		);
	}
}

export default UserBase;
