import React from 'react';

import TodoListItem from "../todoListItem";
import "./todo-list.css"

const TodoList = ({ todoData,
	                  onDeleted,
	                  onToggleDone ,
	                  onToggleImportant }) => {



	const element = todoData.map((item) => {
		const { id, ...itemProps } = item

		return (
			<li key={id} className="list-group-item">
				<TodoListItem
					{ ...itemProps }
					onDeleted={() => onDeleted(id)}
					onToggleDone={() => onToggleDone(id)}
					onToggleImportant={() => onToggleImportant(id)}/>
			</li>
		)
	})

	return (
		<ul className="list-group todo-list">
			{ element }
		</ul>
	)
}

export default TodoList;