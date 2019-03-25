import React from 'react';
import Text from '../../components/Text/Text';
import View from '../../components/View/View';
import _ from 'lodash';
import yang from '../../lib/yang';
import ScrollView from '../../components/View/ScrollView';
import Input from '../../components/TextField/Input';
import OrderButton from '../../components/Buttons/OrderButton';
import styles from './styles/SearchFilter/styles';
import Button from '../../components/Buttons/Button';
import Divider from '../../components/Divider';
import TagList from './parts/TagList';

class SearchFilter extends React.Component {
	constructor(props) {
		super();
		this.state = { ...props.value, custmize: {}, selected: [] };
		this.onInputChange = this.onInputChange.bind(this);
		this.onCustmize = this.onCustmize.bind(this);
		this.inputs = [];
	}
	onCustmize = (key, value) => {
		var custmize = Object.assign({}, this.state.custmize);
		custmize[key] = value;
		this.setState({ custmize });
	};
	onTagMultiSelect = (key, value) => {
		var selected = this.state.selected;
		selected[key] = selected[key] || [];
		selected[key] = yang.arrayPushOrRemove(selected[key], value);
		this.setState({ selected });
	};
	onInputChange(name, value, type = 'minmax') {
		value.type = type;
		let filters = Object.assign({}, this.state);
		filters[name] = value;
		this.props.onChange && this.props.onChange(filters);
		this.setState({ [name]: value });
	}

	reset = () => {
		this.props.onChange && this.props.onChange({});
		this.inputs.forEach((input) => input.clear());
		this.setState({});
	};

	render() {
		const { router, onFadeOut } = this.props;
		const { custmize, year_published, weight, selected } = this.state;

		return (
			<View style={styles.filterContainer}>
				<View style={styles.hideContainer} onPress={onFadeOut} />
				<View style={styles.filter}>
					<View style={styles.header}>
						<Text style={styles.headerText}>筛选条件</Text>
					</View>
					<ScrollView style={styles.components}>
						<OrderButton order="unset" defaultValue="按出版年代排序" />
						<TagList
							onSelect={(value) => this.onTagMultiSelect('year_published', value)}
							tags={[
								{ value: 2010, label: '2010年之后' },
								{ value: 2000, label: '2000~2010年' },
								{ value: 1999, label: '2000年之前' }
							]}
							selected={selected.year_published || []}
						/>
						<View style={styles.custmize}>
							<View style={{ marginRight: 'auto' }}>
								<Button
									content="自定义"
									icon={(custmize['years'] && 'dropUp') || 'dropDown'}
									size="s"
									theme={(custmize.years && 'orange') || 'halfOrange'}
									onPress={() => this.onCustmize('years', !custmize.years)}
								/>
							</View>
							{custmize['years'] && (
								<Input
									onRefMax={(i) => this.inputs.push(i)}
									onRefMin={(i) => this.inputs.push(i)}
									theme="light"
									type="minmax"
									format="string"
									placeholder="年份"
									onChange={(value) => this.onInputChange('year_published', value, 'range')}
									defaultValue={year_published}
								/>
							)}
						</View>
						<View style={styles.line} />
						<Text style={styles.itemTitle}>游戏人数</Text>
						<TagList
							onSelect={(value) => this.onTagMultiSelect('player_num', value)}
							tags={[
								{ value: 2, label: '2人' },
								{ value: 3, label: '3人' },
								{ value: 4, label: '4人' },
								{ value: 5, label: '5人' },
								{ value: 6, label: '6人' },
								{ value: 8, label: '8人' },
								{ value: 1, label: '单人' }
							]}
							selected={selected.player_num || []}
						/>
						<View style={styles.custmize}>
							<View style={{ marginRight: 'auto' }}>
								<Button
									content="自定义"
									icon={(custmize['players'] && 'dropUp') || 'dropDown'}
									size="s"
									theme={(custmize.players && 'orange') || 'halfOrange'}
									onPress={() => this.onCustmize('players', !custmize.players)}
								/>
							</View>
							{custmize['players'] && (
								<Input
									onRefMax={(i) => this.inputs.push(i)}
									onRefMin={(i) => this.inputs.push(i)}
									theme="light"
									type="minmax"
									placeholder="人数"
									onChange={(value) => this.onInputChange('player_num', value, 'minmax')}
									defaultValue={this.state.player_num}
								/>
							)}
						</View>
						<View style={styles.line} />
						<OrderButton order="unset" defaultValue="按难易度排序" />
						<TagList
							onSelect={(value) => this.onTagMultiSelect('weight', value)}
							tags={[
								{ value: 1, label: '容易' },
								{ value: 2, label: '较容易' },
								{ value: 3, label: '中等' },
								{ value: 4, label: '较复杂' },
								{ value: 5, label: '很复杂' }
							]}
							selected={selected.weight || []}
						/>
						<View style={styles.custmize}>
							<Divider text="到底了" type="light" />
						</View>
					</ScrollView>
					<View style={styles.footer}>
						<View style={{ flex: 1 }}>
							<Button size="l" content="重置" theme="darkBlue" shape="square" onPress={this.reset} />
						</View>
						<View style={{ flex: 1 }}>
							<Button size="l" content="完成" theme="orange" shape="square" onPress={onFadeOut} />
						</View>
					</View>
				</View>
			</View>
		);
	}
}

export default SearchFilter;
