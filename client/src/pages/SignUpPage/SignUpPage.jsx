import './SignUpPage.css'
import { useNavigate } from 'react-router-dom'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import { Container, Row, Col} from 'react-bootstrap'


function SignUpPage(props) {

    const navigate = useNavigate()

    const redirectAfterSignUp = () => { navigate('/login')}

    return (

        <Container>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2>Please, Sign up</h2>
                    <SignUpForm redirectAfterSignUp={redirectAfterSignUp} />
                </Col>
            </Row>
           
        </Container>

    )
}

export default SignUpPage