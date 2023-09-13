let nextId = 1

const createNewItem = (label) => {
	return {
		label,
		important: false,
		done: false,
		id: nextId++
	}
}

export default createNewItem