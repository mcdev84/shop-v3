import { Container }     from 'react-bootstrap'
import { RightPanel }    from '../RightPanel'
import { LeftPanel }     from '../LeftPanel'
import useWindowSize     from '../../../utils/hooks/useWindowSize'


export const SplitScreen = () => {
	const { width } = useWindowSize()

	return (


			 width>=600 ?
			 <>
				<Container fluid as={ 'section' } className="d-flex">
					{/*LEFT*/ }
					<Container fluid as={ 'section' } className="d-flex flex-column left-panel" >
						<LeftPanel/>
					</Container>
					{/*RIGHT*/ }
					<Container fluid as={ 'section' } className="right-panel">
						<RightPanel/>
					</Container>
				</Container>
			 </>
				:
			 <>
				<Container fluid as={ 'section' }>
					{/*TOP NAV*/}
					<LeftPanel/>
				</Container>
				<Container fluid as={ 'section' } className="right-panel">
				<RightPanel/>
				</Container>
			 </>
	)
}