let React = require('react');
let uuid = require('node-uuid');

let Search = require('Search');
let AddTodo = require('AddTodo');
let TodoList = require('TodoList');
let TodoAPI = require('TodoAPI');

let TodoApp = React.createClass({
	getInitialState: function(){
		return {
			todos: TodoAPI.getTodos(),
			searchText: '',
			showCompleted: false
		};
	},
	componentDidUpdate(prevProps,prevState){
		if(this.state.todos !== prevState.todos){
			TodoAPI.setTodos(this.state.todos);
		}
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