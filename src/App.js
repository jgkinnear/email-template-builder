import React, {Component} from 'react';
import EmailBody from './components/EmailBody';
import HeaderEditor from './blocks/Header/Header.editor';
import BannerImageEditor from './blocks/BannerImage/BannerImage.editor';
import ContentBlockEditor from './blocks/ContentBlock/ContentBlock.editor';

// greg: importing CSS and WebPack knows to bundle everything in the production version
import './App.css';

class App extends Component {

	constructor(p) {
		super(p);
		this.state = {
			addedHandlers: {},
			addedBlocks: {}
		};
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

		// greg: Object.assign is the same as _.extend
		let handlers = Object.assign({}, this.state.addedHandlers, {
			[id]: handler
		});

		this.setState({
			addedHandlers: handlers
		});
	};

	/**
	 * Accepts the editor for a component, and returns a new function which will be the click handler for the list item
	 *
	 * @param Editor
	 * @returns {function()}
	 */
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
				<h1 className="App-header">
					Email Template Builder
				</h1>

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
