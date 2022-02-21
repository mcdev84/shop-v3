import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus }      from '@fortawesome/free-solid-svg-icons/faCartPlus'
import { useContext }      from 'react'
import { AppContext }      from '../../../App'

export const AddToCart = (props) => {
	const [appState, dispatch] = useContext(AppContext)

	return (
		<>
			<FontAwesomeIcon icon={ faCartPlus } onClick={ () => dispatch({type:'ADD_ITEM_TO_CART', payload:props.item}) }/>
		</>
	)
}