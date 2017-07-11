import React, {Component} from 'react';
import BannerImage from './BannerImage';

export default class BannerImageEditor extends Component {

	constructor(props) {
		super(props);

		this.state = {
			id: this.props.id,
			src: '',
		};
	}

	componentDidMount() {
		this.handleChanged();
	}

	handleChanged = () => {
		this.props.changed(this.state.id, <BannerImage
			key={this.state.id}
			src={this.state.src}
		/>);
	};

	handleSrcChange = (e) => {
		this.setState({
			src: e.target.value
		}, this.handleChanged);
	};

	render() {
		return <div>
			IMG Url({this.state.id})
			<input
				type="text"
				value={this.state.src}
				placeholder="Image URL"
				onChange={this.handleSrcChange}
			/>
		</div>
	}
}