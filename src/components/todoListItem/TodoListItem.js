import React from 'react';

import "./todo-list-item.css"

const TodoListItem = ({label, important = false}) => {

	const itemStyle = {
		color: important ? 'steelblue' : 'black', fontWeight: important ? 'bold' : 'normal'
	}

	return (
		<span className="todo-list-item">
			<span style={itemStyle} className="todo-list-item-label">{label}</span>
			<div>
				<button type="button" className="btn btn-outline-danger btn-sm">
					<i className="bi bi-trash3"></i>
				</button>
				<button type="button" className="btn btn-outline-success btn-sm">
					<i className="bi bi-exclamation"></i>
				</button>
			</div>
		</span>
	);
};

export default TodoListItem;