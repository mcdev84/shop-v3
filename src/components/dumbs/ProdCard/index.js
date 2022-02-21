import { Card, Col, Container, Row } from 'react-bootstrap'
import boiler                        from '../../../assets/boiler.png'
import { Rating }                    from '../Rating'
import { useContext }                from 'react'
import { AppContext }                from '../../../App'
import { Compare }                   from '../Compare/Compare'
import { AddToCart }                 from '../AddToCart'

export const ProdCard = () => {

const [appState, dispatch] = useContext(AppContext)
	const {productsState}= appState
	return (
		<Row xs={ 1 } sm={ 2 } md={ 2 } lg={ 3 } xl={ 3 } xxl={ 4 }
		     className="d-flex g-4  ">
			{ productsState.map((item) => (
				<Col className="d-flex ">
					<Card className="card-container">
						<Card.Img variant="top"  src={ boiler }/>
						<Card.Body>
							<Card.Title className=" ">
								{ item.brand }
							</Card.Title>
							<Card.Text>
								{ item.descrizione }
							</Card.Text>
						</Card.Body>
						<Container fluid as={ 'span' } className="d-none d-sm-flex align-items-baseline
			      				          justify-content-between">
							<span><h5>{ item.prezzo }{ }</h5></span>
							{ item.hasOwnProperty('prezzoPreSconto') ?
							  <span>{ item.prezzoPreSconto }</span> : <span
								  style={ { display: 'none' } }>{ item.prezzoPreSconto }</span> }
						</Container>
						<Container fluid as={ 'span' } className="d-flex d-sm-none align-items-baseline
									      				          justify-content-around">
							<span><h5>{ item.prezzo }{ }</h5></span>
							{ item.hasOwnProperty('prezzoPreSconto') ?
							  <span>{ item.prezzoPreSconto }</span> : <span
								  style={ { display: 'none' } }>{ item.prezzoPreSconto }</span> }
						</Container>
						<AddToCart item={item}/>
						<Card.Footer className="d-flex justify-content-around flex-wrap align-items-baseline">
							<Col className="d-flex flex-wrap align-items-baseline justify-content-start">
								<Rating stelle={ item.stelle}/>
							</Col>
							<Col className="d-flex flex-wrap align-items-baseline justify-content-end">
								<Compare/>
							</Col>

						</Card.Footer>
					</Card>
				</Col>
			)) }
		</Row>
	)
}