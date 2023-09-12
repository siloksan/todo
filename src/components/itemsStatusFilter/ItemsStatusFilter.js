import React from 'react';

import "./items-status-filter.css"

const ItemsStatusFilter = () => {
	return (
		<div className="btn-group" role="group" aria-label="Default button group">
			<button type="button" className="btn btn-info">All</button>
			<button type="button" className="btn btn-outline-secondary">Active</button>
			<button type="button" className="btn btn-outline-secondary">Done</button>
		</div>
	);
};

export default ItemsStatusFilter;