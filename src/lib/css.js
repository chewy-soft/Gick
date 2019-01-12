const absolute = {
	position: 'absolute'
};
const absolute_full = {
	position: 'absolute',
	top: 0,
	right: 0,
	bottom: 0,
	left: 0
};
const flex_row = {
	flexDirection: 'row'
};
const flex_row_center = {
	flexDirection: 'row',
	alignItems: 'center'
};
const flex_center = {
	alignItems: 'center',
	justifyContent: 'center'
};
const flex_row_between = {
	flexDirection: 'row',
	justifyContent: 'space-between'
};
const flex_wrap = {
	flex: 1,
	flexWrap: 'wrap'
};
const h1 = {
	fontSize: 22
};
const h2 = {
	fontSize: 18
};
const h4 = {
	fontSize: 16
};
const p = {
	fontSize: 14
};
const li = {
	fontSize: 12
};
const sp = {
	fontSize: 10
};
const text_underline = {
	textDecorationLine: 'underline'
};

function padding(row, line) {
	return { paddingHorizontal: row, paddingVertical: line };
}
function _padding(top, right, bottom, left) {
	return {
		paddingTop: top,
		paddingRight: right,
		paddingBottom: bottom,
		paddingLeft: left
	};
}
function margin(row, line) {
	return { marginHorizontal: row, marginVertical: line };
}
function padding_r(row) {
	return { paddingHorizontal: row };
}
function padding_l(line) {
	return { paddingVertical: line };
}
function margin_r(row) {
	return { marginHorizontal: row };
}
function margin_l(line) {
	return { marginVertical: line };
}
function _margin(top, right, bottom, left) {
	return {
		marginTop: top,
		marginRight: right,
		marginBottom: bottom,
		marginLeft: left
	};
}
function _absolute(top, right, bottom, left) {
	return {
		position: 'absolute',
		top: top,
		right: right,
		bottom: bottom,
		left: left
	};
}

export default {
	absolute,
	absolute_full,
	flex_row,
	flex_row_between,
	flex_center,
	flex_row_center,
	flex_wrap,
	h1,
	h2,
	h4,
	p,
	li,
	sp,
	text_underline,
	padding,
	padding_l,
  padding_r,
  _padding,
	margin,
	margin_l,
	margin_r,
	_margin,
	_absolute
};
