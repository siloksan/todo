import React from 'react';

import "./app-header.css"

const AppHeader = ({ todoCount, doneCount }) => {
	return (
		<div className="app-header d-flex">
			<h1 className="flex-grow-1">Todo List</h1>
			<h2>{todoCount} more to do, {doneCount} done</h2>
		</div>
	)
};

export default AppHeader;