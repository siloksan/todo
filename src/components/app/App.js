import React, {useState} from 'react';
import AppHeader from "../appHeader";
import SearchPanel from "../searchPanel";
import TodoList from "../todoList";

import "./app.css"
import ItemAddForm from "../itemAddForm/ItemAddForm";


const todoData = [
	{label: "Drink Coffee", important: false, id: 1},
	{label: "Build React App", important: false, id: 2},
	{label: "Make Awesome App", important: true, id: 3},
]

const App = () => {

	const [state, setState] = useState(todoData)

	const deleteItem = (id) => {
		console.log(id);
		setState(() => {
			return [...state].filter((item) => item.id !== id)
		})
	}

	return (
		<div className="container-sm main">
			<AppHeader />
			<SearchPanel />
			<ItemAddForm />
			<TodoList
				todoData={state}
				onDeleted={deleteItem}/>
		</div>
	)
}

export default App;