import React from 'react';
import Text from '../../components/Text/Text';
import Symbol from '../../components/Symbol';
import HandlerContext from '../../context/HandlerContext';
import Promised from '../../components/Promise/Promised';

const renderItem = ({ user, style, props, context }) => {
	const { color, fontSize, onPress, simple } = props;
	const { t } = context;
	if (!user) return null;
	if (simple) {
		return (
			<Text style={style} onPress={onPress}>
				{t(user.name)}
			</Text>
		);
	} else {
		return (
			<Text style={style} onPress={onPress}>
				<Symbol name="at" size={fontSize} color={color} />
				<Text style={{ fontSize: fontSize, color: color, paddingLeft: 2 }}>{t(user.name)}</Text>
			</Text>
		);
	}
};
const _Admin = ({ style, simple, color, fontSize, onPress }) => {
	if (simple) {
		return (
			<Text style={style} onPress={onPress}>
				TapeHead.AI
			</Text>
		);
	} else {
		return (
			<Text style={style}>
				<Symbol name="at" size={fontSize} color={color} />
				<Text style={{ fontSize: fontSize, color: color, paddingLeft: 2 }}>TapeHead.AI</Text>
			</Text>
		);
	}
};
class UserName extends React.Component {
	static contextType = HandlerContext;
	shouldComponentUpdate(nextProps) {
		return this.props.id !== nextProps.id;
	}
	render() {
		const { id, color, fontSize, onPress, simple, user } = this.props;
		const { t, getUser } = this.context;
		const style = [ this.props.style, { fontSize: fontSize, color: color } ];

		if (user)
			return renderItem({
				user,
				style,
				props: this.props,
				context: this.context
			});
		if (!id || id == 'admin')
			return <_Admin onPress={onPress} fontSize={fontSize} color={color} style={style} simple={simple} />;
		if (!id) return <Text style={style}>{t('查无此人或用户已被封禁', 'zh')}</Text>;
		return (
			<Promised promise={() => getUser(id)}>
				{(user) => renderItem({ user, style, props: this.props, context: this.context })}
			</Promised>
		);
	}
}

export default UserName;
