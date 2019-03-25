import defaultStyles from './styles.default';
import { StyleSheet } from 'react-native';
import c from '../../../../lib/css';
import _ from 'lodash';

const diff = {
	description: { paddingBottom: 8, marginTop: 4 },
	title: { marginTop: 4, marginBottom: 2 },
	mainTitle: {
		fontSize: 28,
		marginRight: 8
	},
	subTitle: { fontSize: 14, paddingRight: 4 },
	translate: { ...c.margin_r('auto'), marginTop: 4 },
	descriptionText: { fontSize: 14 },
	headerContent: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginBottom: 20,
		marginTop: 'auto',
		width: '96%',
		height: 300,
		...c.margin_r('auto')
	},
	stateLabel: { marginTop: 4 },
	headerImage: { height: 380, ...c.absolute, top: 0, left: 0, right: 0 },
	mainImage: { maxWidth: 400, maxHeight: 300 },
	emptyImage: { height: 300, width: 400, ...c.flex_center },
	buttonGroup: { alignItems: 'flex-end' },
	container: { height: 380 },
	titleContent: { width: '56%' }
};

export default StyleSheet.create(_.merge(defaultStyles, diff));
