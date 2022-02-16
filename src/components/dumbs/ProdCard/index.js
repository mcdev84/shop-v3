import { Card, Col, Container, Row } from 'react-bootstrap'
import { productsDb }                from '../../../assets/ProductsDb/productsDb'
import boiler from '../../../assets/boiler.png'
export const ProdCard =()=>{

	return(
		<Row xs={1} sm={ 2 } md={2} lg={3} xl={3} xxl={4} className="d-flex g-4  ">
		  {productsDb.map((item) => (
		    <Col className="d-flex align-items-stretch ">
		      <Card className="card-container">
		        <Card.Img variant="top" src={boiler} />
		        <Card.Body>
		          <Card.Title >{item.brand}</Card.Title>
		          <Card.Text >
			          {item.descrizione}
				          <Container fluid as={'span'} className="d-flex flex-grow-1 align-items-baseline
				          justify-content-between margin-auto"><span><h5>{item.prezzo}{ }</h5></span>
				          {item.hasOwnProperty('prezzoPreSconto') ? <span>{item.prezzoPreSconto}</span> : <span style={{display:'none'}}>{item.prezzoPreSconto}</span> }
		          </Container>
		          </Card.Text>
		        </Card.Body>
			      <Card.Footer>
			      </Card.Footer>
		      </Card>
		    </Col>
		  ))}
		</Row>
	)
}