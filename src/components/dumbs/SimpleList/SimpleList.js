import styled from 'styled-components'

export const SimpleList = (props) => {
	const SimpleListLayout = styled.ul`
    display:flex;
		align-items: center;
    justify-content: space-between;
    padding: 2%;
    > li {
      display: flex;
      justify-content: space-between;
      padding: 2%;
    }
	`
	return (
		<>
			<SimpleListLayout>
				{ props.children }
			</SimpleListLayout>
		</>

	)
}