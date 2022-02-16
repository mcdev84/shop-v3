import { Button, Form } from 'react-bootstrap'
import { useContext }   from 'react'
import { AppContext }   from '../../../App'

export const LoginForm = () => {
	const [appState, dispatch] = useContext(AppContext)
	let tempPasswd = ''
	let tempEmail = ''

	const handleEmail =(e)=> tempEmail = e.target.value
	const handlePasswd =(e)=> tempEmail = e.target.value

	return (
		<>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email"  onChange = { (e)=> handleEmail(e) }/>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" onChange  = { (e)=> handlePasswd(e)  }/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Remember"/>
				</Form.Group>
				<Button variant="secondary" type="submit"
				        onClick={ (e) => dispatch({ type: 'LOGIN', payload:  [tempEmail, tempPasswd]  }) }>
					Login
				</Button> { }
				<Button variant="primary" type="submit"
				        onClick={ () => dispatch({ type: 'SIGN_UP' }) }>
					Sign Up
				</Button>

			</Form>
		</>
	)
}