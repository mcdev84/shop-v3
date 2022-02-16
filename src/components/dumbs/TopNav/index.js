import useWindowSize  from '../../../utils/hooks/useWindowSize'

export const TopNav = () => {

	const { width } = useWindowSize()

	return (
		<>
			<nav>
				{ width > 431 ?
				  <ul className="topnavUl">
					  <li><h2>REACT|SHOP</h2></li>
					  <li><i className="fa-solid fa-user"> </i></li>
					  <li><a href="#">Contact</a></li>
					  <li><a href="#">About</a></li>
				  </ul> :
				  <ul className="topnavUl">
					  <li><h2>REACT|SHOP</h2></li>
					  <li><i className="fa-solid fa-user"> </i></li>
				  </ul>
				}
			</nav>
		</>
	)
}