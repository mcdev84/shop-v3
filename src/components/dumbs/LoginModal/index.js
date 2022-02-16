import {Modal } from 'react-bootstrap'
import { useContext }          from 'react'
import { AppContext }          from '../../../App'
import { LoginForm }           from '../LoginForm'

export const LoginModal = () => {
	const [appState, dispatch] = useContext(AppContext)
	const { modalLoginOpen } = appState

	return (
		<>
			<Modal show={ modalLoginOpen }
			       onHide={ () => dispatch({ type: 'MODAL_LOGIN_OPEN' }) }>
				<Modal.Header closeButton>
					<Modal.Title>Account Login</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<LoginForm/>
				</Modal.Body>
				<Modal.Footer>
				</Modal.Footer>
			</Modal>
		</>
	)
}