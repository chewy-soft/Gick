import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, View } from 'react-native';
import c from '../../lib/css';

const styles = StyleSheet.create({
	modal: {
		backgroundColor: 'rgba(0,0,0,.6)',
		...c.absolute_full,
		paddingHorizontal: 4
	},
	content: {
		flex: 1,
		zIndex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

class Modal extends React.Component {
	constructor(props) {
		super();
		this.node = props.node || document.body;
		this.el = document.createElement('div');
	}

	componentDidMount() {
		this.node.appendChild(this.el);
	}

	componentWillUnmount() {
		this.node.removeChild(this.el);
	}

	render() {
		const component = (
			<View style={styles.modal}>
				<View style={styles.content}>{this.props.children}</View>
			</View>
		);
		return ReactDOM.createPortal(component, this.el);
	}
}

export default Modal;
