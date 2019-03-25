import React from 'react';
import View from '../../../../components/View/View';
import HandlerContext from '../../../../context/HandlerContext';
import * as Message from '../../parts';
import getTheme from './styles';

export default class Basic extends React.Component {
	static contextType = HandlerContext;

	render() {
		const { theme, created_at, id } = this.props;
		const styles = getTheme(theme || 'left');
		if (theme == 'left')
			return (
				<View style={styles.container}>
					<Message.CreateInfo created_at={created_at} id={id} theme="left" />
					<View style={styles.content}>{this.props.children}</View>
				</View>
			);
		if (theme == 'right')
			return (
				<View style={styles.container}>
					<View>
						<Message.CreateInfo created_at={created_at} id={id} theme="right" />
						<View style={styles.content}>{this.props.children}</View>
					</View>
					<Message.Avatar id={id} />
				</View>
			);
		if (theme == 'center')
			return (
				<View style={styles.container}>
					<Message.CreateInfo created_at={created_at} id={id} theme="center" />
					<View style={styles.content}>{this.props.children}</View>
				</View>
			);
		return null;
	}
}
