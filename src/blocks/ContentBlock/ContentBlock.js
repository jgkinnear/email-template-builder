import React, {Component} from 'react';
import classNames from 'classnames';
import './ContentBlock.css';

export default class ContentBlock extends Component {

	render() {

		let styles = classNames('content-block', {
			[`content-block--${this.props.type}`]: this.props.type
		});

		return <div className={styles} >
			<h2>{this.props.heading}</h2>
			<p>{this.props.paragraph}</p>
		</div>
	}
}