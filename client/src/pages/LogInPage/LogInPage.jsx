import './LogInPage.css'
import { useNavigate } from 'react-router-dom'
import LogInForm from '../../components/LogInForm/LogInForm'
import { Container, Row, Col} from 'react-bootstrap'

function LogInPage(props) {
    
    const navigate = useNavigate()

    const redirectAfterLogIn = () => { navigate('/')}

    return (

        <>
        <Container>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2>Please, Log In</h2>
                    <LogInForm redirectAfterLogIn={redirectAfterLogIn} />
                </Col>
            </Row>
        </Container> 

        </>

    )
}

export default LogInPage