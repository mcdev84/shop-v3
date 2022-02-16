import { Container }  from 'react-bootstrap'
import { ProdCard }   from '../../dumbs/ProdCard'

export const RightPanel = () => {

	return (
		<Container fluid as={ 'article' } >
			<ProdCard/>
		</Container>
	)
}