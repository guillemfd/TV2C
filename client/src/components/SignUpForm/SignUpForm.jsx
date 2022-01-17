import { InputGroup, Form, FormControl, Button} from 'react-bootstrap'
import { useState } from 'react'
import { signup } from './../../services/auth.service.js'
import { useNavigate } from 'react-router-dom'



function SignUpForm(redirectAfterSignUp) {

    const [signUpForm, setSignUpForm] = useState({
        username: "",
        password: "",
        email: ""
    })

    const { username, password, email} = signUpForm

    const handleInputChange = e => {
        const { name, value } = e.target
        setSignUpForm({ ...signUpForm, [name]: value})
    }

    const navigate = useNavigate()

    //hauria de funcionar amb la funció següent, però com q ara per ara no utilitzo alertes faig el navifate aquí i no al SigUpPage
    function handleSubmit(e) {
        e.preventDefault()
        const credentials = { username, password, email }
        signup(credentials)
        .then(() => navigate('/login'))
        .catch(err => console.log(err))
    }

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

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">📧</InputGroup.Text>
                <FormControl
                type="text"
                name="email"
                value={email}
                onChange={handleInputChange}
                placeholder="e-mail"
                aria-label="e-mail"
                aria-describedby="basic-addon2"
                />
            </InputGroup>

            <InputGroup className="form-group">
                <InputGroup.Text id="basic-addon2">🔑</InputGroup.Text>
                <FormControl
                type="text"
                name="password"
                value={password}
                onChange={handleInputChange}
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon2"
                id="inputPassword"
                />
                {/* <div className="form-group">
                    <FormControl 
                    type="password" 
                    className="form-control" 
                    id="inputPasswordConfirm" 
                    data-match="#inputPassword" 
                    data-match-error="Whoops, these don't match" 
                    placeholder="Confirm password" 
                    required/>
                    <div className="help-block with-errors"></div>
                </div> */}
            </InputGroup>
            <div className="help-block" style={{margin: '0px 0px 15px 57px', fontSize: '14px'}}>Minimum of 6 characters, one number, one lowercase and one uppercase</div>

            <div className="form-group justify-content-center">
                <Button type="submit" className="btn btn-primary" style={{width: '75%'}}>Submit</Button>
            </div>

        {/* <Form data-toggle="validator" role="form" style={{padding: '20px 80px 0px 80px'}}>
            <div className="form-group">
                <label for="inputName" className="control-label">Username</label>
                <input type="text" className="form-control" id="inputName" placeholder="Cina Saffary" required />
            </div>

            <div className="form-group">
                <label for="inputEmail" className="control-label">Email</label>
                <input type="email" className="form-control" id="inputEmail" placeholder="Email" data-error="Bruh, that email address is invalid" required/>
                <div className="help-block with-errors"></div>
            </div>

            <div className="form-group">
                <label for="inputPassword" className="control-label">Password</label>
                <div className="form-inline row">
                <div className="form-group col-sm-6">
                    <input type="password" data-minlength="6" className="form-control" id="inputPassword" placeholder="Password" required/>
                    <div className="help-block">Minimum of 6 characters</div>
                </div>
                <div className="form-group col-sm-6">
                    <input type="password" className="form-control" id="inputPasswordConfirm" data-match="#inputPassword" data-match-error="Whoops, these don't match" placeholder="Confirm" required/>
                    <div className="help-block with-errors"></div>
                </div>
                </div>
            </div>

            <div className="form-group">
                <Button type="submit" className="btn btn-primary">Submit</Button>
            </div>
        </Form> */}


        </Form>
    )
}

export default SignUpForm