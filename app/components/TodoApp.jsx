let React = require('react');
let uuid = require('node-uuid');
let Search = require('Search');
let AddTodo = require('AddTodo');
let TodoList = require('TodoList');

let TodoApp = React.createClass({
	getInitialState: function(){
		return {
			todos: [
				{id: uuid(), text: 'Walk the dog', completed: false},
				{id: uuid(), text: 'Clean the yard', completed: true},
				{id: uuid(), text: 'Finish tutorial', completed: false},
				{id: uuid(), text: 'Learn redux', completed: false}
			],
			searchText: '',
			showCompleted: false
		};
	},
	handleSearch: function(searchText,showCompleted){
		console.log(searchText,showCompleted);
		this.setState({
			searchText: searchText,
			showCompleted: showCompleted
		});
	},
	handleAddTodo: function(addText){
		// console.log(addText);
		this.setState({
			todos: [
				...this.state.todos,
				{id: uuid(), text: addText, completed: false}
			]
		});
	},
	handleToggle: function(id){
		// console.log(id);
		let newTodos = this.state.todos.map((todo) => {
			if(todo.id === id){
				todo.completed = !todo.completed;
			}
			return todo;
		});
		this.setState({
			todos: newTodos
		});
	},
	render: function(){
		let {todos} = this.state;
		return (
			<div>
				<Search onSearch={this.handleSearch}/>
				<TodoList todos={todos} onToggle={this.handleToggle}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}
});

module.exports = TodoApp;