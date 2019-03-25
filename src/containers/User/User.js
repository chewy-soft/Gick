import React from 'react';
import _ from 'lodash';
import UserBase from './parts/UserBase';
import User404 from './parts/User404';
import UserLoader from './parts/UserLoader';
import UserAdmin from './parts/UserAdmin';
import HandlerContext from '../../context/HandlerContext';
import Promised from '../../components/Promise/Promised';

class User extends React.Component {
	static contextType = HandlerContext;

	componentDidUpdate(prevProps) {
		if (this.props.id !== prevProps.id) {
			return this.promise && this.promise.resolve();
		}
	}
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.me !== nextProps.me || this.props.id !== nextProps.id || this.props.user !== nextProps.user;
	}
	render() {
		const { getUser } = this.context;
		const { user, id, size, style, theme } = this.props;
		if (user) return renderUser(user, this.props);
		if (id === 'admin' || id === null || id === undefined)
			return <UserAdmin size={size} theme={theme} style={style} />;

		return (
			<Promised
				onShouldComponentUpdate={() => true}
				ref={(ref) => (this.promise = ref)}
				promise={() => getUser(id)}
				Loader={(props) => <UserLoader size={size} style={style} />}
			>
				{(user) => renderUser(user, this.props)}
			</Promised>
		);
	}
}

const renderUser = (user, props) => {
	const { size, state, onPress, theme, style, title, rightComponent } = props;
	const online = (state === undefined && 'unknow') || (state === null && 'offline') || 'online';
	if (user)
		return (
			<UserBase
				user={user}
				online={online}
				size={size}
				onPress={onPress ? () => onPress(user) : null}
				theme={theme}
				style={style}
				title={title}
				rightComponent={rightComponent}
			/>
		);
	if (user === null) return <User404 size={size} style={style} />;
};

export default User;
