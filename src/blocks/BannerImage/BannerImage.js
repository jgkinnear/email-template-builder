import React from 'react';

export default ({src}) => {
	if (!src) {
		return <img src="http://lorempixel.com/300/200/" />
	}
	return <img src={src} />
}