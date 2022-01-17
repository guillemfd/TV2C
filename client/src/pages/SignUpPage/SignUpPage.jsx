import './SignUpPage.css'
import { useNavigate } from 'react-router-dom'
import SignUpForm from '../../components/SignUpForm/SignUpForm'

function SignUpPage(props) {

    const navigate = useNavigate()

    const redirectAfterSignUp = () => { navigate('/')}

    return (

        <>
            <div className='SignUp-Container'>
                <SignUpForm redirectAfterSignUp={redirectAfterSignUp} />
            </div>
           
        </>

    )
}

export default SignUpPage