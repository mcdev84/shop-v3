import { Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import {
	filtersAttribute,
	filtersName,
	sortByName,
}                                                    from '../../../assets/ProductsDb/filtersDb'
import useWindowSize
                                                     from '../../../utils/hooks/useWindowSize'
import { productsStocks }                            from '../../../assets/ProductsDb/productsDb'
import { plainArray }                                from '../../../utils/sharedFuncs'

export const LeftPanel = () => {
	const { width } = useWindowSize()
	const filteredStock = []
	productsStocks.map(item => plainArray(item, filteredStock))
	console.log(filteredStock)

	return (
		width > 600 ?
		<Container fluid as={ 'aside' }>

			{ filteredStock.map((item, i) => i < 7 &&
											                                 <>
												                                 <li key={ i }>
													                                 <Form.Check type="checkbox"
													                                             label={ filtersName[i] }/>
													                                  ({ item.value })
												                                 </li>
											                                 </>,
											) }
		</Container>
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