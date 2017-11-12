let React = require('react');
let Search = require('Search');
let AddTodo = require('AddTodo');
let TodoList = require('TodoList');

let TodoApp = (props) => {
	return (
		<div>
			<Search/>
			<TodoList/>
			<AddTodo/>
		</div>
	);
};

module.exports = TodoApp;