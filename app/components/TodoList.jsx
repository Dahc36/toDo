let React = require('react');
let Todo = require('Todo');

let TodoList = React.createClass({
	render: function(){
		return (
			<div>
				<Todo/>
			</div>
		);
	}
});

module.exports = TodoList;