import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons/faBasketShopping'
import { AppContext }       from '../../../App'
import { useContext }       from 'react'

export const Cart = () => {
	const [appState, dispatch] = useContext(AppContext)

	return (

		<>
			<span className="details-span">
				<FontAwesomeIcon icon={ faBasketShopping }
				                 onClick={ () => dispatch({type:'MODAL_CART_OPEN'})}/>
			</span>
		</>
	)
}