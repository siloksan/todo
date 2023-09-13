import React from 'react';

import "./items-status-filter.css"

const buttons = [
	{name: 'all', label: 'All'},
	{name: 'active', label: 'Active'},
	{name: 'done', label: 'Done'},
]

const ItemsStatusFilter = ({ selectedCategory, filter }) => {

	const onSelectedCategory = (category) => {
		selectedCategory(category)
	}

	const buttonsGroup = buttons.map((btn) => {
		const isActive = filter === btn.name
		const clazz = isActive ? "btn btn-info" : "btn btn-outline-secondary"
		return (
			<button key={btn.name}
			        type="button"
			        className={clazz}
			        onClick={() => onSelectedCategory(btn.name)}>
				{btn.label}
			</button>
		)
	})

	return (
		<div className="btn-group">
			{buttonsGroup}
		</div>
	)
}

export default ItemsStatusFilter;