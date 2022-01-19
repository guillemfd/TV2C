import { InputGroup, Form, FormControl, Button} from 'react-bootstrap'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from './../../services/auth.service'
import { AuthContext } from '../../context/auth.context.js'



function LogInForm(redirectAfterLogIn) {

    const [logInForm, setLogInForm] = useState({
        username: "",
        password: "",
    })

    const { username, password } = logInForm
    const { logInUser } = useContext(AuthContext)

    const handleInputChange = e => {
        const { name, value } = e.target
        setLogInForm({ ...logInForm, [name]: value})
    }

    const navigate = useNavigate()

    //hauria de funcionar amb la funció següent, però com q ara per ara no utilitzo alertes faig el navifate aquí i no al SigUpPage
    function handleSubmit(e) {
        e.preventDefault()
        const credentials = { username, password }
        login(credentials)
            .then( res => {
                console.log("JWT token", res.data)
                logInUser(res.data.authToken)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    // navigate('/'))

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     const credentials = { username, password, email }
    //     signup(credentials)
    //     .then(() => redirectAfterSignUp())
    //     .catch(err => console.log(err))
    // }


    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">👤</InputGroup.Text>
                <FormControl
                type="text"
                name="username"
                value={username}
                onChange={handleInputChange}
                placeholder="Username"
                aria-describedby="basic-addon1"
                />
            </InputGroup>

            <InputGroup className="form-group">
                <InputGroup.Text id="basic-addon2">🔑</InputGroup.Text>
                <FormControl
                for="inputPassword"
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon2"
                id="inputPassword"
                />
            </InputGroup>
            <div className="help-block" style={{margin: '0px 0px 15px 57px', fontSize: '14px'}}>Minimum of 6 characters, one number, one lowercase and one uppercase</div>

            <div className="form-group justify-content-center">
                <Button type="submit" className="btn btn-primary" style={{width: '75%'}}>Submit</Button>
            </div>

        </Form>
    )
}

export default LogInForm