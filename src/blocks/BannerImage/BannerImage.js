import React, {Component} from 'react';

export default class BannerImage extends Component {

	render() {
		return <img src={this.props.src} />
	}
}