/** @jsx React.DOM */

var App = React.createClass({
	getInitialState: function() {
		return {
			greeting: 'Hello',
			subject: 'world!'
		};
	},
	render: function() {
		return (
			<div>
				<h1>{this.state.greeting} {this.state.subject}</h1>
				<select value={this.state.greeting} onChange={this.onGreetingChange}>
					<option value="Hello">Hello</option>
					<option value="So long">So long</option>
				</select>
				<input type="text" value={this.state.subject} onChange={this.onSubjectChange} />
			</div>
		);
	},
	onGreetingChange: function(event) {
		this.setState({ greeting: event.target.value });
	},
	onSubjectChange: function(event) {
		this.setState({ subject: event.target.value });
	}
});

React.renderComponent(<App/>, document.body);
