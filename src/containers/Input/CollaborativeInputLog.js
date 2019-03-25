import React from 'react';
import View from '../../components/View/View';
import Text from '../../components/Text/Text';
import styles from './styles/InputLog/styles';
import _ from 'lodash';
import Format from '../../components/Text/Format';
import format from '../../lib/format';
import TimeFormat from '../../components/Text/TimeFormat';
import User from '../User/User';
import HoverView from '../../components/View/HoverView';
import Loader from '../../components/Loader';
import Alert from '../../components/Alert';
import { FilePreview } from '../../components/Picker/FilePicker';
import { toFileObjectLike } from '../../lib/bucket';
import HandlerContext from '../../context/HandlerContext';

export default class CollaborativeInputLog extends React.Component {
	static contextType = HandlerContext;
	state = { log: undefined, error: undefined };
	load = async () => {
		try {
			const { id, type, path, t, locale } = this.props;
			const { getFieldLog } = this.context;
			const log = await getFieldLog({
				object_type: type,
				object_id: id,
				path: path
			});
			this.setState({ log });
		} catch (error) {
			this.setState({ error });
		}
	};
	componentDidMount() {
		this.load();
	}

	render() {
		const { id, type, path, locale, schema } = this.props;
		const { t } = this.context;
		const { log, error } = this.state;

		if (error) return <Alert message={error} visible={true} />;
		if (log === undefined) return <Loader />;

		const titles = [
			{ key: 'value', value: t('编辑内容', locale) },
			{ key: 'comment', value: t('附言', locale) },
			{ key: 'date', value: t('编辑日期', locale) },
			{ key: 'editer', value: t('编辑者', locale) },
			{ key: 'return', value: t('存档还原', locale) }
		];
		return (
			<View style={styles.table}>
				<View style={styles.tableHead}>
					{_.map(titles, (title) => (
						<View style={styles.th} key={title.key}>
							<Text style={styles.td}>{title.value}</Text>
						</View>
					))}
				</View>
				<View style={styles.body}>
					{_.map(log, (field) => (
						<HoverView hoverColor="light" key={field._id}>
							<View style={[ styles.row, styles.historyCell ]}>
								<Preview field={field} schema={schema} t={t} />
								<Format
									value={_.get(field, [ 'meta', 'comment' ]) || '-'}
									format="text"
									style={styles.tr}
								/>
								<TimeFormat format="fullDate" value={field.created_at} style={styles.tr} />
								<Text style={styles.tr}>
									<User size="xxs" theme="light" id={field.meta.user_id} />
								</Text>
								<Text
									style={[ styles.tr, styles.return ]}
									onPress={() => this.props.onRevert(field._id)}
								>
									<HoverView hoverColor="transprent" theme="link">
										{t('还原到此存档', locale)}
									</HoverView>
								</Text>
							</View>
						</HoverView>
					))}
				</View>
			</View>
		);
	}
}

const Preview = ({ field, schema, t }) => {
	if (_.isNil(field.value)) {
		return <Format value={'-'} format="string" style={styles.tr} />;
	}
	if (field.meta.type == 'file') {
		return (
			<View style={styles.tr}>
				<FilePreview file={toFileObjectLike(field.value, 'image', 'autox50')} size="s" />
			</View>
		);
	}
	return <Format value={format(t)(field.value, schema.format)} format="string" style={styles.tr} />;
};
