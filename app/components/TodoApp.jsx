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
			],
			searchText: '',
			showCompleted: false
		};
	},
	handleSearch: function(searchText,searchCompleted){
		console.log(searchText,showCompleted);
		this.setState({
			searchText: searchText,
			showCompleted: showCompleted
		});
	},
	handleAddTodo: function(AddText){
		console.log(AddText);
	},
	render: function(){
		let {todos} = this.state;
		return (
			<div>
				<Search onSearch={this.handleSearch}/>
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}
});

module.exports = TodoApp;