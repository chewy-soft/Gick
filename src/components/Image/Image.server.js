import React from 'react';
export default (props) => (
	<img src={props.src} alt={props.src} style={{ maxHeight: props.height, maxWidth: props.width, width: '100%',height: '100%' }} />
);
