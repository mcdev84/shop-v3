import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar }    from '@fortawesome/free-solid-svg-icons/faStar'
import { EmptyStar } from './EmptyStar'

export const Rating = ({ stelle }) => {

	const fullStar = <FontAwesomeIcon className="fullstar" color={'rebeccapurple'} icon={ faStar } />
	const stars = new Array(stelle).fill(1)
	const emptyStars = new Array((5 - stars.length)).fill(null)


	return (
		<span className="d-flex flex-wrap align-items-baseline">
			{ stars.map((_, i) => fullStar) }
			{ emptyStars.map((_i) => <EmptyStar/> ) }
			</ span>
	)

}