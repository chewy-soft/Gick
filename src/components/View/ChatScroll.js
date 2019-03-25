import React from 'react';
import _ from 'lodash';

const initialState = { window: [] };
const LOAD_SIZE = 20;
const MIN_WINDOW_SIZE = 50;
const MAX_WINDOW_SIZE = 70;
const IS_FIREFOX = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

export default class ChatScroll extends React.Component {
	state = initialState;

	constructor(props) {
		super(props);
		this.reset();
	}

	reset = () => {
		this.scrollDirection = undefined;
		this.fixBottom = true;
		this.windowTopIndex = undefined;
		this.windowBottomIndex = undefined;
		this.preScrollState = this._getScrollState();
	};

	_init = async () => {
		this.fixBottom = !!this.props.fixBottom;
		this.props.fixBottom ? await this._expandWindow(-1) : await this._expandWindow(1);
		this.scrollDirection = 1;
		this.props.fixBottom && this.scrollToBottom();
	};

	componentDidMount() {
		this._init();
	}

	_expandWindow = async (direction = -1) => {
		const { items } = this.props;
		if (direction === -1) {
			this.windowBottomIndex = this.windowBottomIndex === undefined ? items.length - 1 : this.windowBottomIndex;
			this.windowTopIndex =
				this.windowTopIndex === undefined ? this.windowBottomIndex - LOAD_SIZE : this.windowTopIndex;
			this.windowTopIndex = _.max([ this.windowTopIndex - LOAD_SIZE, 0 ]);
		} else {
			this.windowTopIndex = this.windowTopIndex === undefined ? 0 : this.windowTopIndex;
			this.windowBottomIndex =
				this.windowBottomIndex === undefined ? this.windowTopIndex + LOAD_SIZE : this.windowBottomIndex;
			this.windowBottomIndex = _.min([ this.windowBottomIndex + LOAD_SIZE, items.length - 1 ]);
		}
		const window = _.slice(items, this.windowTopIndex, this.windowBottomIndex + 1);
		await this._setState({ window });
		return window;
	};

	_shortenWindow = async (direction, force = false) => {
		const { items } = this.props;
		const { window } = this.state;
		if (!force && window.length <= MAX_WINDOW_SIZE) return;
		const { scrollTop, clientHeight, scrollHeight } = this._getScrollState();
		const scrollDirection = scrollHeight / 2 < scrollTop ? 1 : -1;
		if (scrollDirection !== direction) return;
		if (direction === -1) {
			this.windowBottomIndex = this.windowTopIndex + (MIN_WINDOW_SIZE - 1);
		} else {
			this.windowTopIndex = this.windowBottomIndex - (MIN_WINDOW_SIZE - 1);
		}
		const w = _.slice(items, this.windowTopIndex, this.windowBottomIndex + 1);
		await this._setState({ window: w });
		return w;
	};

	_onScroll = async (e) => {
		if (this.lockOnScroll) {
			e.preventDefault();
			return false;
		}

		this.lockOnScroll = true;
		this.preScrollState = this._getScrollState();
		const { scrollTop, clientHeight, scrollHeight } = this._getScrollState();
		//scroll to up
		if (clientHeight + scrollTop < this.preScrollState.clientHeight + this.preScrollState.scrollTop) {
			this.fixBottom = false;
		}
		if (this._isClientBottom() && this._isWindowBottom()) {
			this.fixBottom = true;
		}

		const wasClientTop = this._isClientTop();
		const wasClientBottom = this._isClientBottom();
		const wasWindowTop = this._isWindowTop();
		const wasWindowBottom = this._isWindowBottom();

		if (wasClientTop && !wasWindowTop) {
			this.scrollDirection = undefined;
			await this._expandWindow(-1);
			this.scrollTo(this.preScrollState.scrollTop + this._getScrollState().scrollHeight - scrollHeight);
			await this._shortenWindow(-1);
			this.preScrollState = this._getScrollState();
			this.scrollDirection = -1;
		}

		if (wasClientBottom && !wasWindowBottom) {
			this.scrollDirection = undefined;
			await this._expandWindow(1);
			const preScrollHeight = this._getScrollState().scrollHeight;
			await this._shortenWindow(1);
			if (IS_FIREFOX) {
				this.scrollTo(scrollTop - (preScrollHeight - this._getScrollState().scrollHeight));
			} else {
				this.scrollTo(this._getScrollState().scrollTop - 1);
			}
			this.scrollDirection = 1;
		}

		if (this.props.hasMore && wasClientTop && wasWindowTop) {
			this.scrollDirection = undefined;
			this.props.onLoad && (await this.props.onLoad());
			await this._expandWindow(-1);
			this.scrollTo(this.preScrollState.scrollTop + this._getScrollState().scrollHeight - scrollHeight);
			this._shortenWindow(-1);
			this.preScrollState = this._getScrollState();
			this.scrollDirection = -1;
		}

		this.lockOnScroll = false;
	};

	_setState = async (object) => new Promise((resolve) => this.setState(object, resolve));

	shouldComponentUpdate = (nextProps, nextState) =>
		this.props.height !== nextProps.height ||
		this.props.hasMore !== nextProps.hasMore ||
		!_.isEqual(this.props.items, nextProps.items) ||
		this.state !== nextState;
	componentDidUpdate = async (preProps) => {
		if (this.props.height !== preProps.height) {
			this.onClientHeightChange();
		}

		if (!_.isEqual(this.props.items, preProps.items)) {
			const currentWindowTopIndex = _.indexOf(this.props.items, preProps[this.windowTopIndex]);
			const currentWindowBottomIndex = _.indexOf(this.props.items, preProps[this.windowBottomIndex]);
			const wasWindowBottom = this._isWindowBottom(preProps.items);

			if (wasWindowBottom) {
				this.windowTopIndex =
					currentWindowTopIndex !== -1
						? currentWindowTopIndex
						: this._searchNextIndex(preProps.items, this.props.items, this.windowTopIndex);
				this.windowBottomIndex = this.props.items.length - 1;
				if (this.windowBottomIndex - this.windowTopIndex + 1 < LOAD_SIZE) {
					this.windowTopIndex = _.max([ 0, this.windowBottomIndex - LOAD_SIZE ]);
				}
			}

			if (!wasWindowBottom) {
				this.windowTopIndex =
					currentWindowTopIndex !== -1
						? currentWindowTopIndex
						: this._searchNextIndex(preProps.items, this.props.items, this.windowTopIndex);
				this.windowBottomIndex =
					currentWindowBottomIndex !== -1
						? currentWindowBottomIndex
						: this._searchPreIndex(preProps.items, this.props.items, this.windowBottomIndex);
			}

			var window = _.slice(this.props.items, this.windowTopIndex, this.windowBottomIndex + 1);
			await this._setState({ window });
			this._shortenWindow(1);
		}
	};

	maybeScrollToBottom = (duration = 0) => {
		if (this.props.fixBottom && this.fixBottom && this._isWindowBottom()) {
			this.scrollToBottom(duration);
		}
	};

	_searchNextIndex = (pre, current, startIndex) => {
		const slice = _.slice(pre, startIndex);
		for (const i in slice) {
			const item = slice[i];
			const c = _.indexOf(current, item);
			if (c !== -1) return c;
		}
		return 0;
	};

	_searchPreIndex = (pre, current, startIndex) => {
		const slice = _.slice(_.reverse(pre), pre.length - startIndex - 1);
		for (const i in slice) {
			const item = slice[i];
			const c = _.indexOf(current, item);
			if (c !== -1) return c;
		}
		return pre.length - 1;
	};

	_getScrollState = () => ({
		scrollHeight: this.scrollElement && this.scrollElement.scrollHeight,
		clientHeight: this.scrollElement && this.scrollElement.clientHeight,
		scrollTop: this.scrollElement && this.scrollElement.scrollTop
	});

	_isWindowBottom = (items) =>
		items ? items.length - 1 == this.windowBottomIndex : this.props.items.length - 1 == this.windowBottomIndex;
	_isWindowTop = (items) => this.windowTopIndex == 0;

	_isClientBottom = () => {
		const edgeMargin = this.props.edgeMargin === undefined ? 10 : this.props.edgeMargin;
		const { clientHeight, scrollHeight, scrollTop } = this._getScrollState();
		return scrollHeight <= clientHeight + scrollTop + edgeMargin;
	};

	_isClientTop = () => {
		const edgeMargin = this.props.edgeMargin === undefined ? 10 : this.props.edgeMargin;
		const { clientHeight, scrollHeight, scrollTop } = this._getScrollState();
		return scrollTop <= edgeMargin;
	};

	scrollToTop = (duration) => this.scrollTo(0, duration);
	scrollToBottom = (duration = 0) =>
		setTimeout(() => this.scrollTo(this.scrollElement.scrollHeight - this.scrollElement.clientHeight, duration));

	onClientHeightChange = () => {
		this.maybeScrollToBottom();
	};

	onScrollHeightChange = () => {
		if (!this.scrollDirection) return;
		if (this.scrollDirection == 1) {
			this.maybeScrollToBottom(50);
		}
		if (this.scrollDirection == -1) {
			this.scrollTo(
				this.preScrollState.scrollTop + this._getScrollState().scrollHeight - this.preScrollState.scrollHeight
			);
		}
	};

	scrollTo = (position, duration = 0) => {
		if (!this.scrollElement) return;
		if (this.scrollInterval) {
			this.lockOnScroll = false;
			clearInterval(this.scrollInterval);
		}

		if (duration > 0) {
			this.lockOnScroll = true;
			const start = this.scrollElement.scrollTop;
			const step = Math.ceil((position - start) / Math.floor(duration / 10));
			const direction = position - start > 0 ? 1 : -1;
			this.scrollInterval = setInterval(() => {
				if ((position - this.scrollElement.scrollTop) * direction > 0) {
					this.scrollElement.scrollTop = this.scrollElement.scrollTop + step;
				} else {
					this.lockOnScroll = false;
					clearInterval(this.scrollInterval);
				}
			}, 10);
		} else {
			this.scrollElement.scrollTop = position;
		}
	};

	render() {
		const { height, width, renderItem, hasMore } = this.props;
		const { window } = this.state;
		return (
			<div
				style={{ height, width, overflowY: 'auto' }}
				onScroll={this._onScroll}
				ref={(ref) => (this.scrollElement = ref)}
			>
				{this.props.moreItemsLoader && (!this._isWindowTop() || hasMore) && <this.props.moreItemsLoader />}
				{_.map(window, (line) => renderItem(line, this.onScrollHeightChange))}
				{this.props.moreItemsLoader && !this._isWindowBottom() && <this.props.moreItemsLoader />}
			</div>
		);
	}
}
