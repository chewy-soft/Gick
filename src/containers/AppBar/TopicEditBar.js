import React from 'react';
import NavBar from '../../components/ToolBar/NavBar';
import View from '../../components/View/View';
import Symbol from '../../components/Symbol';
import Text from '../../components/Text/Text';
import styles from './styles/styles';
import HoverView from '../../components/View/HoverView';
import _ from 'lodash';
import colors from '../../colors';
import ToolTip from '../../components/ToolTip';
import Button from '../../components/Buttons/Button';
import yang from '../../lib/yang';
import HandlerContext from '../../context/HandlerContext';

class TopicEditNavBar extends React.Component {
	static contextType = HandlerContext;
	state = { hover: undefined };
	hover = (key) => {
		this.setState({ hover: key });
	};
	render() {
		const { onSave, onBack, id } = this.props;
		const { router, t } = this.context;
		const { hover } = this.state;
		const items = [];
		items.push(
			{
				key: 'setmode',
				icon: 'setting',
				color: '#fff',
				title: t('管理', 'zh'),
				onPress: () => router.toTopicManagement(id)
			},
			{
				key: 'finish',
				icon: 'simpleCheck',
				color: colors.success,
				title: t('完成', 'zh'),
				onPress: onSave
			}
		);

		return (
			<NavBar
				logo={
					<View style={styles.back} onPress={onBack}>
						<Symbol name="arrowLeft" size={16} />
						<Text style={styles.backText}>{t('返回', 'zh')}</Text>
					</View>
				}
				right={_.map(items, (item) => (
					<View key={item.key}>
						<HoverView hoverColor="gray">
							<View
								style={styles.channelNavItem}
								onMouseOver={() => this.hover(item.key)}
								onMouseOut={() => this.setState({ hover: undefined })}
								onPress={item.onPress}
							>
								<Symbol name={item.icon} size={28} color={item.color} />
								{hover == item.key && (
									<ToolTip content={item.title} show={true} bottom={-28} left={-2} />
								)}
							</View>
						</HoverView>
					</View>
				))}
			/>
		);
	}
}

class TopicEditToolBar extends React.Component {
	static contextType = HandlerContext;
	selectAll = (key) => {
		let selectAll;
		if (key == 'all') {
			selectAll = yang.customizeAlert('确定选择显示全部内容？', true);
			if (selectAll) {
				console.log('select all');
			}
		}
		if (key == 'self') {
			selectAll = yang.customizeAlert('确定选择只显示自己的内容？', true);
			if (selectAll) {
				console.log('select self');
			}
		}
	};
	render() {
		const { t } = this.context;

		return (
			<NavBar
				logo={
					<View style={styles.selectBox}>
						<Button content={t('全选', 'zh')} theme="darkGreen" onPress={() => this.selectAll('all')} />
						<Button content={t('只显示自己', 'zh')} theme="darkBlue" onPress={() => this.selectAll('self')} />
					</View>
				}
			/>
		);
	}
}

export { TopicEditNavBar, TopicEditToolBar };
