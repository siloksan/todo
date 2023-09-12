import React from 'react';
import ItemsStatusFilter from "./ItemsStatusFilter";

import "./search-panel.css"

const SearchPanel = () => {
	return (
		<div className="d-flex">
			<input placeholder="search" className="search-input"/>
			<ItemsStatusFilter />
		</div>
	)
}

export default SearchPanel;