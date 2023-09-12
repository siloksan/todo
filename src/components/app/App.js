import React from 'react';
import AppHeader from "./AppHeader";
import SearchPanel from "./SearchPanel";
import TodoList from "./TodoList";

import "./app.css"


const todoData = [
	{label: "Drink Coffee", important: false, id: 1},
	{label: "Build React App", important: false, id: 2},
	{label: "Make Awesome App", important: true, id: 3},
]

const App = () => {
	return (
		<div className="container-sm main">
			<AppHeader />
			<SearchPanel />
			<TodoList todoData={todoData}/>
		</div>
	)
}

export default App;