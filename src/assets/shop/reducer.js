export const reducer = (state, action) => {

	const newState = { ...state }
	switch (action.type) {

		case 'MODAL_LOGIN_OPEN':
			return { ...newState, modalLoginOpen: !newState.modalLoginOpen }

		case 'HAMBURGER_OPEN':
			return {...newState, isHamburgerOpen: !newState.isHamburgerOpen}

		case 'LOGIN':
			newState.usersDb.map((item)=> item.email===action.payload[0] ? item.password===action.payload[1] && true : false )
			return { ...newState }

		case 'SIGN_UP':

		default:
			return 'Error'

	}

}