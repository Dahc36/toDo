let React = require('react');

let Todo = React.createClass({
	render: function(){
		let {id, text, completed, onToggle} = this.props;
		return (
			<div>
				<label>
					<input type="checkbox" checked={completed} onChange={() => {onToggle(id);}}/>
					{text}
				</label>
			</div>
		);
	}
});

module.exports = Todo;