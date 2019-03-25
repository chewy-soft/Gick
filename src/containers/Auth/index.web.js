import React from 'react';
import Iframe from '../../components/Iframe';
import Loader from '../../components/Loader';
import Modal from '../../components/Modal';
import RoundButton from '../../components/Buttons/RoundButton';
import View from '../../components/View/View';
import styles from './styles';
import config from '../../config';
import urls from './configureRedirects';
import css from '../../lib/css';

function getSrc(type) {
	if (type == 'weibo') return weiboSrc(config.weibo);
	if (type == 'qq') return qqSrc(config.qq);
	if (type == 'weixin') return weixinSrc(config.weixin);
}

const iframe = (type) => ({
	src: urls[type],
	width: config[type].width,
	height: config[type].height
});
const link = (type) => {
	window.location.href = urls[type];
};

export default class Auth extends React.Component {
	constructor() {
		super();
		this.auth = this.auth.bind(this);
		this.close = this.close.bind(this);
		this.receive = this.receive.bind(this);
		this.state = {
			weixin: false,
			weibo: false,
			qq: false
		};
	}

	auth(site) {
		this.setState({ [site]: true });
	}

	close(site) {
		this.setState({ [site]: false });
	}

	receive(event) {
		if (typeof event.data == 'string') {
			let error = false;
			if (event.data == 'error') {
				this.props.errorAuth();
			} else {
				this.props.successAuth(event.data);
			}
			this.setState({
				weixin: false,
				weibo: false,
				qq: false
			});
		}
	}

	render() {
		const active = !!this.props.active;
		return (
			<View style={styles.container}>
				{active && (
					<View style={styles.content}>
						<RoundButton size="l" theme="qq" icon="qq" onPress={() => this.auth('qq')} />
						<RoundButton size="l" theme="wechat" icon="wechat" onPress={() => this.auth('weixin')} />
						<RoundButton size="l" theme="weibo" icon="weibo" onPress={() => this.auth('weibo')} />
						{process.env.NODE_ENV == 'development' && (
							<RoundButton
								size="l"
								theme="black"
								icon="group"
								onPress={() => this.props.successAuth('admin')}
							/>
						)}
					</View>
				)}
				{!active && (
					<View style={styles.content}>
						<Loader size="large" />
					</View>
				)}
				{this.state.weixin && (
					<Modal>
						<View style={{ ...css.absolute_full }} onPress={() => this.close('weixin')} />
						<View style={{ zIndex: 1 }} elevation={1}>
							<Iframe handleReceiveMessage={this.receive} attributes={iframe('weixin')} />
						</View>
					</Modal>
				)}
				{this.state.weibo && (
					<Modal>
						<View style={{ ...css.absolute_full }} onPress={() => this.close('weibo')} />
						<View style={{ zIndex: 1 }} elevation={1}>
							<Iframe handleReceiveMessage={this.receive} attributes={iframe('weibo')} />
						</View>
					</Modal>
				)}
				{this.state.qq && (
					<Modal>
						<View style={{ ...css.absolute_full }} onPress={() => this.close('qq')} />
						<View style={{ zIndex: 1 }} elevation={1}>
							<Iframe handleReceiveMessage={this.receive} attributes={iframe('qq')} />
						</View>
					</Modal>
				)}
			</View>
		);
	}
}
