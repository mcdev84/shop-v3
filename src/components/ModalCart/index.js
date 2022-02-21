import { Modal }      from 'react-bootstrap'
import { AppContext } from '../../App'
import { useContext } from 'react'
import { CartList }   from '../dumbs/CartList'

export function ModalCart () {
	const [appState, dispatch] = useContext(AppContext)
	const { isCartOpen } = appState

	return (
		<>
			<Modal show={ isCartOpen }
			       onHide={ () => dispatch({ type: 'MODAL_CART_OPEN' }) }>
				<Modal.Header closeButton>
					<Modal.Title>Cart</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<CartList/>
				</Modal.Body>
				<Modal.Footer>
				</Modal.Footer>
			</Modal>
		</>
	)
}