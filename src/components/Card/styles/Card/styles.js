import defaultStyle from "./styles.default";
import { StyleSheet } from "react-native";
import _ from "lodash";

const diff = {};

const sizes = {
	l: {
		title: { fontSize: 18 },
		description: { fontSize: 14 }
	},
	m: {
		title: { fontSize: 14 },
		description: { fontSize: 12 }
	}
};

export default (getStyles = (size) => {
	let styles = {};
	styles = _.merge(styles, defaultStyle, diff, sizes[size]);
	return StyleSheet.create(styles);
});
