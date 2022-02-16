import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser}          from '@fortawesome/free-solid-svg-icons'
import { useContext }    from 'react'
import { AppContext }    from '../../../App'
import { LoginModal }    from '../LoginModal'

export const Login =()=>{
const [appState,dispatch] = useContext(AppContext)
	return(
		<>
			<span className="details-span">
			<FontAwesomeIcon icon={ faUser } onClick={()=>dispatch({type:'MODAL_LOGIN_OPEN'})} />
			</span>
		</>
	)
}