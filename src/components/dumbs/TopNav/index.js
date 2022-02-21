import useWindowSize  from '../../../utils/hooks/useWindowSize'
import { SimpleList } from '../SimpleList/SimpleList'
import { Container }  from 'react-bootstrap'

export const TopNav = () => {

	const { width } = useWindowSize()

	return (
		<>
			<Container as={'nav'} className="d-flex align-self-center  justify-content-around">
				{ width > 431 ?
				  <SimpleList>
					  <li><h2>REACT|SHOP</h2></li>
					  <li><h6>Contact</h6></li>
					  <li><h6>About</h6></li>
				  </SimpleList>
				              :
				  <SimpleList>
					  <h2>REACT|SHOP</h2>
				  </SimpleList>
				}
			</Container>
		</>
	)
}