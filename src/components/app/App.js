import React, {useState} from 'react';
import AppHeader from "../appHeader";
import SearchPanel from "../searchPanel";
import TodoList from "../todoList";
import ItemAddForm from "../itemAddForm";
import "./app.css"
import createNewItem from "../../utils/createNewItem";
import changeItem from "../../utils/changeItem";
import {search, sort} from "../../utils/sortAndSearch";

const todoData = [
	createNewItem("Drink Coffee"),
	createNewItem("Build React App"),
	createNewItem("Make Awesome App"),
]

const App = () => {

	const [data, setData] = useState(todoData)
	const [sortAndSearch, setSortAndSearch] = useState({term: '', sort: 'all'})

	const todoCount = data.length
	const doneCount = data.filter((item) => item.done === true).length

	//need check what work faster
	const deleteItem = (id) => {
		setData(() => {
			return data.filter((item) => item.id !== id)
		})
	}

	// const deleteItem = (id) => {
	// 	const idx = data.findIndex((el) => el.id === id)
	// 	setData(() => {
	// 		return [
	// 			...data.slice(0, idx),
	// 			...data.slice(idx + 1)
	// 		]
	// 	})
	// }

	const addNewItem = (text) => {
		const newItem = createNewItem(text)
		console.log(newItem.id);
		setData(() => {
			return [...data, newItem]
		})
	}

	const onToggleDone = (id) => {
		setData(() => {
			return changeItem(data, id, 'done')
		})
	}

	const onToggleImportant = (id) => {
		setData(() => {
			return changeItem(data, id, 'important')
		})
	}

	const selectedCategory = (category) => {
		setSortAndSearch(() => {
			return {
				...sortAndSearch,
				sort: category
			}
		})
	}

	const findItem = (text) => {
		setSortAndSearch(() => {
			return {
				...sortAndSearch,
				term: text
			}
		})
	}

	const sortItems = sort(data, sortAndSearch.sort)
	const sortAndSearchItems = search(sortItems, sortAndSearch.term)

	return (
		<div className="container-sm main">
			<AppHeader
				todoCount={todoCount}
				doneCount={doneCount}/>
			<SearchPanel filter={sortAndSearch.sort}
									selectedCategory={selectedCategory}
			             findItem={findItem}/>
			<ItemAddForm addNewItem={addNewItem}/>
			<TodoList
				todoData={sortAndSearchItems}
				onDeleted={deleteItem}
				onToggleDone={onToggleDone}
				onToggleImportant={onToggleImportant} />
		</div>
	)
}

export default App;