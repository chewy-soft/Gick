import React from 'react';

export default (props) => (
	<span
		style={{
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			display: '-webkit-box',
			WebkitLineClamp: props.numberOfLines,
			WebkitBoxOrient: 'vertical',
			maxHeight: props.maxHeight
		}}
	>
		{props.children}
	</span>
);
