import { Container, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import PopularTVHor from "../../../components/TV/PopularTVHor/PopularTVHor"


function TVHomePage() {
    return (
        <Container>

            <h1 style={{color: 'grey', textShadow: '2px 2px #000000', fontSize: '80px'}}>Select a list</h1>
            <hr/>
            <Link to="/tv/mostPopular">
                <Button variant="dark" size="xl">Most Popular</Button>
            </Link>

        <PopularTVHor />
        
        </Container>
    )
}

export default TVHomePage