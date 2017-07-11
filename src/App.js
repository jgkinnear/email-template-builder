import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import EmailBody from './EmailBody';
import HeaderEditor from './blocks/Header/Header.editor';
import BannerImageEditor from './blocks/BannerImage/BannerImage.editor';
import ContentBlockEditor from './blocks/ContentBlock/ContentBlock.editor';

class App extends Component {

	constructor(p) {
		super(p);
		this.state = {
			addedHandlers: {},
			addedBlocks: {}
		};

		window.jason = this.state;
	}

	handleChanged = (id, component) => {
		let blocks = Object.assign({}, this.state.addedBlocks, {
			[id]: component
		});

		this.setState({
			addedBlocks: blocks
		});
	};

	handleAddHandler = (id, handler) => {
		let handlers = Object.assign({}, this.state.addedHandlers, {
			[id]: handler
		});

		this.setState({
			addedHandlers: handlers
		});
	};

	addHandlerGenerator(Editor) {

		return () => {
			let d = new Date();
			let id = d.getTime();
			this.handleAddHandler(id, <Editor
				id={id}
				changed={this.handleChanged}
			/>);
		}
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">

				</div>

				<ul>
					<li onClick={this.addHandlerGenerator(HeaderEditor)}>Header Block</li>
					<li onClick={this.addHandlerGenerator(BannerImageEditor)}>Banner Image</li>
					<li onClick={this.addHandlerGenerator(ContentBlockEditor)}>ContentBlock</li>
				</ul>
				<EmailBody>
				{Object.keys(this.state.addedHandlers).map((handlerKey) => {
					return <div className="block">
						{this.state.addedBlocks[handlerKey]}
						{this.state.addedHandlers[handlerKey]}
					</div>

				})}
				</EmailBody>
			</div>
		);
	}
}

export default App;
