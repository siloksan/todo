import React from 'react';

import "./todo-list-item.css"

const TodoListItem = ({
	                      label,
	                      done,
	                      important,
	                      onDeleted,
	                      onToggleDone,
	                      onToggleImportant  }) => {


		let itemStyle = 'todo-list-item-label'

		let className = 'todo-list-item'

		if (done) className += ' done'
		if (important) itemStyle += ' important'

		return (
			<span className={className}>
			<span className={itemStyle}
			      onClick={onToggleDone}>
				{label}
			</span>
			<div>
				<button
					type="button"
					className="btn btn-outline-danger btn-sm float-right"
					onClick={onDeleted}>
					<i className="bi bi-trash3"></i>
				</button>
				<button
					type="button"
					className="btn btn-outline-success btn-sm float-right"
					onClick={onToggleImportant}>
					<i className="bi bi-exclamation"></i>
				</button>
				</div>
		</span>
		)
}

TodoListItem.defaultProps = {important: false}

export default TodoListItem;