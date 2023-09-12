import React from 'react';

import "./todo-list-item.css"

class TodoListItem extends React.Component {

	state = {
		done: false,
		important: false
	}

	onLabelClick = () => {
		this.setState(({ done }) => {
			return {
				done: !done
			}
		})
	}

	onExclamationClick = () => {
		this.setState(({ important }) => {
			return {
				important: !important
			}
		})
	}

	render() {
		const { label, onDeleted } = this.props;

		let { done, important } = this.state

		let itemStyle = 'todo-list-item-label'

		let className = 'todo-list-item'

		if (done) className += ' done'
		if (important) itemStyle += ' important'

		return (
			<span className={className}>
			<span className={itemStyle}
			      onClick={ this.onLabelClick }>
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
					onClick={this.onExclamationClick}>
					<i className="bi bi-exclamation"></i>
				</button>
				</div>
		</span>
		);
	}
}

TodoListItem.defaultProps = {important: false}

export default TodoListItem;