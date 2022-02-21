import { TopNav }     from '../../dumbs/TopNav'
import { Login }      from '../../dumbs/Login'
import { Cart }       from '../../dumbs/Cart'
import { LoginModal } from '../../dumbs/LoginModal'
import { ModalCart }  from '../../ModalCart'

export const Header = () => {

	return (
		<>
			<header className="App-header">
				<section className="topnav">
					<TopNav/>
				</section>
				<section className="details">
					<Login/>
					<Cart/>
					<LoginModal/>
					<ModalCart/>
				</section>
			</header>
		</>
	)
}