export function plainArray (item, array) {
	if (typeof item === 'object') {
		Object.entries(item).forEach(([key, value]) => {
			if (typeof value === 'object') {
				plainArray(value, array)
			} else {
				array.push({ key, value })
			}
		})
	} else {
		array.push(item)
	}
}


