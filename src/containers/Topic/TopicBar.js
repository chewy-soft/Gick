import React from 'react';
import { Platform } from 'react-native';
import Text from '../../components/Text/Text';
import View from '../../components/View/View';
import styles from './styles/TopicBar/styles';
import Input from '../../components/TextField/Input';
import Symbol from '../../components/Symbol';
import UserName from '../../containers/User/UserName';
import TypeLoader from '../../components/Loader/TypeLoader';
import RoundButton from '../../components/Buttons/RoundButton';
import FilePicker from '../../components/Picker/FilePicker';
import colors from '../../colors';
import AddMenu from './AddMenu';
import Button from '../../components/Buttons/Button';
import HandlerContext from '../../context/HandlerContext';
import List from '../../components/List';
import Timer from '../../components/Counter/Timer';
import Format from '../../components/Text/Format';

class TopicBar extends React.Component {
	static contextType = HandlerContext;

	value = '';
	state = { menu: false, mode: 'text', commitMode: 'enter', typing: undefined, setting: false };
	commitMode = 'enter';
	_typing_timer = undefined;
	_mount = true;

	menu = (bool) => {
		this.setState({ menu: bool },
			() => this.props.onContentSizeChange && this.props.onContentSizeChange());
	};

	onCommit = (type) => {
		this.props.onSend && this.props.onSend(type, this.value);
		if (type == 'file') {
			this.onChangeMode('text');
		}
	};

	onKeyPress = (e) => {
		this.props.onKeyPress && this.props.onKeyPress(e);
		const needShift = this.commitMode == 'shift_enter' ? true : false;
		if (e.key === 'Enter' && !!e.shiftKey == needShift) {
			e.preventDefault();
			e.stopPropagation();
			this.onCommit('text');
		}
	};

	onSendChannelMessage = async (channel_id) => {
		this.props.onSend && (await this.props.onSend('channel', channel_id));
		this.setState({ menu: false });
		this.context.closeModal();
	};

	reset = () => {
		this.value = '';
		this.input.clear();
		this.setState({ mode: 'text', menu: false });
	};

	onChange = (value) => {
		this.value = value;
	};

	onChangeMode = (mode) => {
		this.value = '';
		this.setState({ mode, menu: false },
			() => this.props.onContentSizeChange && this.props.onContentSizeChange());
	};

	onChangeCommitMode = (commitMode) => {
		this.commitMode = commitMode;
		this.setState({ commitMode, setting: false });
	};

	componentDidUpdate(preProps, preState) {
		if (this.props.typing !== preProps.typing) {
			this.setState({ typing: this.props.typing });
			if (this._typing_timer) clearTimeout(this._typing_timer);
			this._typing_timer = setTimeout(() => {
				if (this._mount) {
					this._typing_timer = undefined;
					this.setState({ typing: undefined });
				}
			}, 10000);
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (
			nextState !== this.state ||
			nextProps.typing !== this.props.typing ||
			nextProps.error !== this.props.error ||
			nextProps.remains !== this.props.remains
		);
	}

	onRef = (ref) => {
		this.input = ref;
	};

	componentWillUnmount = () => {
		if (this._typing_timer) clearTimeout(this._typing_timer);
		this._mount = false;
	};

	render() {
		const { state, placeholder, onContentSizeChange, type, error, maxLength, me, topic, remains } = this.props;
		const { menu, mode, typing, setting, commitMode } = this.state;
		const { openModal, t } = this.context;
		const inputType = type || 'autoExpanding';
		const menus = [
			{
				name: '相册',
				onPress: () => this.onChangeMode('images'),
				theme: 'green',
				icon: 'images'
			},
			{
				name: '引用',
				onPress: () => openModal('search', { type: 'chat', onSelect: (c) => this.onSendChannelMessage(c._id) }),
				theme: 'blue',
				icon: 'search'
			}
		];
		const commit_modes = [
			{
				key: 'enter',
				value: 'enter',
				label: '按Enter发送消息',
				iconColor: (commitMode == 'enter' && 'black') || 'transparent'
			},
			{
				key: 'shift_enter',
				value: 'shift_enter',
				label: '按Shift+Enter发送消息',
				iconColor: (commitMode == 'shift_enter' && 'black') || 'transparent'
			}
		];

		return (
			<View style={styles.bar}>
				{menu && (
					<View style={styles.addmenu}>
						<AddMenu menus={menus} />
					</View>
				)}
				<View style={{ backgroundColor: colors.background }}>
					<View style={styles.line} />
				</View>
				{mode == 'images' && (
					<View style={styles.picker}>
						<FilePicker
							accepts={['image/png', 'image/jpg', 'image/jpeg', 'image/gif']}
							onChange={this.onChange}
							maxFiles={6}
							maxFileSize={4000000}
							minFileSize={0}
						/>
						<View style={styles.closeButton}>
							<Button
								icon="close"
								content="取消"
								theme="noStyle"
								onPress={() => this.onChangeMode('text')}
								size="s"
							/>
						</View>
						<View style={styles.sendButton}>
							<Button content="发送" icon="send" theme="darkGreen" onPress={() => this.onCommit('file')} />
						</View>
					</View>
				)}
				{mode == 'text' && (
					<View style={styles.contianer}>
						{state == 'textOnly' && <RoundButton size="xs" icon="add" theme="disable" />}
						{state !== 'textOnly' && (
							<View style={styles.add} onPress={() => this.menu(!menu)}>
								<RoundButton size="xs" icon="add" theme="darkBlue" />
							</View>
						)}
						<View style={styles.inputContent}>
							<Input
								type={inputType}
								theme="transparent"
								placeholder="发送消息"
								autoFocus={(state == 'textOnly' && true) || false}
								maxLength={maxLength}
								maxHeight={400}
								onChange={this.onChange}
								onKeyPress={this.onKeyPress}
								onContentSizeChange={onContentSizeChange}
								onRef={this.onRef}
							/>
						</View>
						<View style={styles.send}>
							<View onPress={() => this.onCommit('text')}>
								<Symbol name="send" color="rgba(255,255,255,.2)" size={26} />
							</View>
							<View onPress={() => this.setState({ setting: !setting })}>
								<Symbol name="dropDown" size={24} />
							</View>
						</View>
					</View>
				)}
				<View style={styles.infoContent}>
					{error && <Text style={styles.startInfo}>{error}</Text>}
					{typing && !error && <TypeLoader userComponent={<UserName id={typing} fontSize={12} />} />}
					{!typing &&
						!error &&
						process.env.RESOLUTION == 'mobile' &&
						topic && (
							<View style={styles.mobileCounter}>
								<View>
									<Timer time={topic.expire_at} size="xs" theme="hours" style={styles.timer} />
								</View>
								<Text style={styles.counterNum}>剩余</Text>
								<Format format="number" value={remains} style={styles.counterNum} />
								<Text style={styles.counterNum}>层</Text>
							</View>
						)}
				</View>
				{setting && (
					<View style={styles.sentSetting}>
						{_.map(commit_modes, (m) => (
							<List
								text={m.label}
								key={m.key}
								icon="simpleCheck"
								iconColor={m.iconColor}
								theme="light"
								size="s"
								onPress={() => this.onChangeCommitMode(m.value)}
								style={styles.settingList}
							/>
						))}
					</View>
				)}
			</View>
		);
	}
}

export default TopicBar;
