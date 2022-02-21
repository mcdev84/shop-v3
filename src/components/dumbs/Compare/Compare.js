import { AppContext } from '../../../App'
import { useContext } from 'react'

export const Compare = () => {
	const [appState, dispatch] = useContext(AppContext)

	return (
		<span className="d-flex flex-wrap align-items-baseline">
				<input type="checkbox" className="float-right"
				       onChange={ (e) =>
					       dispatch(
						       { type: 'ADD_COMPARE', payload: e.target.checked }) }/>
			<h6 className="compare-text">&nbsp;Compare</h6>
		</span>
	)
}