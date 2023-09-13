import React, {useState} from 'react';
import ItemsStatusFilter from "../itemsStatusFilter";

import "./search-panel.css"

const SearchPanel = ({ selectedCategory, findItem, filter }) => {

	const [someItem, setSomeItem] = useState('')

	const searchItem = (e) => {
		setSomeItem(e.target.value)
		findItem(e.target.value)
	}

	return (
		<div className="d-flex search-panel">
			<input value={someItem}
			       placeholder="search"
			       className="search-input"
			       onChange={searchItem}/>
			<ItemsStatusFilter selectedCategory={selectedCategory}
			                   filter={filter}/>
		</div>
	)
}

export default SearchPanel;