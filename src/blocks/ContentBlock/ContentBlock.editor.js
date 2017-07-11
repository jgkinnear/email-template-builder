import React, {Component} from 'react';
import ContentBlock from './ContentBlock';

export default class ContentBlockEditor extends Component {

	constructor(props) {
		super(props);

		this.state = {
			id: this.props.id,
			heading: '',
			paragraph: '',
			type: null,
		};
	}

	componentDidMount() {
		this.handleChanged();
	}

	handleChanged = () => {
		this.props.changed(this.state.id, <ContentBlock
			key={this.state.id}
			heading={this.state.heading}
			paragraph={this.state.paragraph}
			type={this.state.type}
		/>);
	};

	handleHeadingChange = (e) => {
		this.setState({
			heading: e.target.value
		}, this.handleChanged);
	};

	handleParagraphChange = (e) => {
		this.setState({
			paragraph: e.target.value
		}, this.handleChanged);
	};

	handleTypeChange = (e) => {
		this.setState({
			type: e.target.value
		}, this.handleChanged);
	};

	render() {
		return <div>
			Heading: <input type="text" value={this.state.heading} onChange={this.handleHeadingChange} />
			Paragraph: <input type="text" value={this.state.paragraph} onChange={this.handleParagraphChange } />
			Type: <input type="text" value={this.state.type} onChange={this.handleTypeChange } />
		</div>
	}
}