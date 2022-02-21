import { AppContext } from '../../../App'
import { useContext } from 'react'
import { SimpleList } from '../SimpleList/SimpleList'

export function CartList () {
	const [appState, dispatch] = useContext(AppContext)
	const { cart } = appState
	const newList = Array.from(cart.reduce((prev, current) => {
		// check if id already registered
		if (prev.has(current.id)) {
			// increment count
			prev.get(current.id).count++
		} else {
			// otherwise, store the new object with count starting at 1
			prev.set(current.id, { ...current, count: 1 })
		}
		return prev
	}, new Map()).values())

	console.log(newList)

	return (

		newList.map((item) => {
			const { count, id, brand, prezzo } = item

			return (

				<>
					<SimpleList>
						<li key={ id }><h6>N°<em> { count } </em>
						               products { brand } <em> Price : { (parseInt(
								prezzo.replace('.', '')) * count).toFixed(2) } €</em></h6>
						</li>
					</SimpleList>
				</>

			)
		}))
}