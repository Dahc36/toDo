let React = require('react');
let Todo = require('Todo');

let TodoList = React.createClass({
	render: function(){
		let {todos, onToggle} = this.props;
		let renderTodos = () => {
			/*let tempList = [];
			for(let todo of todos){
				tempList.push(<Todo key={todo.id}/>);
			}
			return tempList;*/
			return todos.map((todo) => {
				return (
					<Todo key={todo.id} {...todo} onToggle={onToggle}/>
				);
			});
		};
		return (
			<div>
				{renderTodos()}
			</div>
		);
	}
});

module.exports = TodoList;