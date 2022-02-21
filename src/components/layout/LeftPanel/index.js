import { Col, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import {
	filtersAttribute,
	filtersName,
	sortByName,
}                                                         from '../../../assets/ProductsDb/filtersDb'
import useWindowSize
                                                          from '../../../utils/hooks/useWindowSize'
import { productsStocks }                                 from '../../../assets/ProductsDb/productsDb'
import { plainArray }                                     from '../../../utils/sharedFuncs'
import { useContext }                                     from 'react'
import { AppContext }                                     from '../../../App'
import { SimpleList }                                     from '../../dumbs/SimpleList/SimpleList'

export const LeftPanel = () => {
	const [appState, dispatch] = useContext(AppContext)
	const { width } = useWindowSize()
	const filteredStock = []
	productsStocks.map(item => plainArray(item, filteredStock))

	return (
		width > 600 ?
		<Col as={ 'aside' } className="d-flex flex-wrap flex-column">
			{ filteredStock.map((item, i) => i < 7 &&
			                                 <SimpleList>
				                                 <li key={item}>
					                                 <Form.Check type="checkbox"
				                                             label={ filtersName[i] }
				                                             onChange={ (e) =>
					                                             dispatch({
						                                                      type   : 'filtersName[i]',
						                                                      payload: [
							                                                      filtersAttribute[i],
							                                                      e.target.checked],
					                                                      }) }
				                                 /><h6>({ item.value }) </h6> </li>
			                                 </SimpleList>,
			) }
		</Col>
		            :
		<Container fluid as={ 'section' }>

			<Navbar expand="lg">
				<Container>
					<Navbar.Brand href="#home"> </Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">

							<NavDropdown title="Filter products" id="basic-nav-dropdown">
								{ filteredStock.map((item, i) => i < 7 &&
								                                 <>
									                                 <li key={ i }>
										                                 <Form.Check type="checkbox"
										                                             label={ filtersName[i] }/>
										                                 ({ item.value })
									                                 </li>
								                                 </>,
								) }

							</NavDropdown>

							<NavDropdown.Divider/>

							<NavDropdown title="Sort By"
							             id="basic-nav-dropdown">
								{ sortByName.map((item, i) =>
									                 <>
										                 <li key={ i }>
											                 <Form.Check
												                 type="checkbox"
												                 label={ item }/>
										                 </li>
									                 </>,
								) }
							</NavDropdown>

						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

		</Container>

	)
}

/*<ul>
 <li className="topnavLI" key={ item }>
 <Form.Check type="checkbox"
 label={ filtersName[i] }
 onChange={ (e) =>
 dispatch({
 type: 'filtersName[i]',
 payload: [
 filtersAttribute[i],
 e.target.checked],
 }) }
 />
 <h6>({ item.value }) </h6>
 </li>
 </ul>*/