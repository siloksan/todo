const changeItem = (array, id, property) => {
	return array.map((item) => {
		return item.id === id
			? { ...item, [property]: !item[property] }
			: item
	})
}

export default changeItem