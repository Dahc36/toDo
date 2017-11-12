let React = require('react');
let Search = require('Search');
let AddTodo = require('AddTodo');
let TodoList = require('TodoList');

let TodoApp = React.createClass({
	getInitialState: function(){
		return {
			todos: [
				{id: 1, text: 'Walk the dog'},
				{id: 2, text: 'Clean the yard'},
				{id: 3, text: 'Finish tutorial'},
				{id: 4, text: 'Learn redux'}
			]
		};
	},
	handleAddTodo: function(text){
		console.log(text);
	},
	render: function(){
		let {todos} = this.state;
		return (
			<div>
				<Search/>
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}
});

module.exports = TodoApp;