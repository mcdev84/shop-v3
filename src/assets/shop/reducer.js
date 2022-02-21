import { productsDb } from '../ProductsDb/productsDb'
import { usersDb }    from '../usersDb/usersDb'

const initProducts = productsDb
const users= usersDb
export const reducer = (state, action) => {
	const newState = { ...state }
	switch (action.type) {

		case 'INITIAL':
			return { ...newState, productsState: productsDb }

		case 'filtersName[i]':
			return (
				action.payload[1] ?
				{
					...newState,
					productsState: newState.productsState.filter(
						item => Object.values(item).includes(action.payload[0])
						        ? item : ((item[action.payload[0]] === true) && item)),
					activeFilters: [...newState.activeFilters, action.payload[0]],
				}
				                  :

				{
					...newState,
					activeFilters: newState.activeFilters.filter(
						el => el !== action.payload[0]),
					productsState: initProducts.map(item =>
						                                newState.activeFilters.map(
							                                (active, i) =>
								                                (typeof item[active[i]] ===
								                                 'boolean'
								                                 &&
								                                 item[active[i]] ===
								                                 true)
								                                ?
								                                item
								                                :
								                                Object.values(
									                                      item[active])
								                                      .includes(
									                                      active[i]) && item)),

				}
			)
		case 'ADD_ITEM_TO_CART':
			return { ...newState, cart: [...newState.cart, action.payload] }

		case
		'ADD_COMPARE'
		:
			return (action.payload ?
			        { ...newState, compareCount: newState.compareCount += 1 } :
			        { ...newState, compareCount: newState.compareCount -= 1 })

		case
		'MODAL_LOGIN_OPEN'
		:
			return { ...newState, modalLoginOpen: !newState.modalLoginOpen }

		case
		'HAMBURGER_OPEN':
			return { ...newState, isHamburgerOpen: !newState.isHamburgerOpen }

		case 'MODAL_CART_OPEN':
			return { ...newState, isCartOpen: !newState.isCartOpen }

		case'LOGIN':
		users.map(item =>
				((item.userEmail === action.payload[0]) &&( item.userPasswd === action.payload[1])) ?
				(alert('Login SUCCEFULL')&&{ ...newState, userLogin: true }) : alert('Not found')
			)



		case
		'SIGN_UP'
		:

		default:
			return 'Error'

	}

}