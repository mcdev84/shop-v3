import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import {faBasketShopping} from '@fortawesome/free-solid-svg-icons/faBasketShopping'

export const Cart=()=>{

	return(

		<>
			<span className="details-span">
		<FontAwesomeIcon icon={faBasketShopping}/>
			</span>
		</>
	)
}