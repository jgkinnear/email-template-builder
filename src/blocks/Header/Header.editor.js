import React, {Component} from 'react';
import Header from './Header';

export default class HeaderEditor extends Component {

	constructor(props) {
		super(props);

		this.state = {
			id: this.props.id,
			title: '',
		};
	}

	componentDidMount() {
		this.handleChanged();
	}

	handleChanged = () => {
		this.props.changed(this.state.id, <Header
			key={this.state.id}
			title={this.state.title}
		/>);
	};

	handleTitleChange = (e) => {
		this.setState({
			title: e.target.value
		}, this.handleChanged);
	};

	render() {
		return <div>
			Header({this.state.id}) <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
		</div>
	}
}