export const sort = (array, category) => {
	switch (category) {
		case 'active':
			return array.filter((item) => !item.done)
		case 'done':
			return array.filter((item) => item.done)
		default:
			return array
	}
}

export const search = (array, term) => {
	return term === ''
		? array
		: array.filter((item) => {
			return  item.label.toLowerCase()
				.indexOf(term.toLowerCase()) > -1
		})
}