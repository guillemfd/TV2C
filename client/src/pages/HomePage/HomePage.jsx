import { Container, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import BackGroundIMG from '../../img/HomePage_BG_White.jpg'
import './HomePage.css'

function HomePage() {
    return (
        <Container>
            <div id="HomePageBackGround">
                <img src={BackGroundIMG} alt="HomePageBackGround"></img>
            </div>
            <h1>Welcome to TV2C app</h1>
            <h5>Here you can make lists of what are you wishing to watch, update your "To See" list or just look for new moives & TV Series</h5>
            <hr/>
            <Link to="/mostPopular">
                <Button variant="dark" size="xl">Let'save a look!</Button>
            </Link>
        </Container>
    )
}

export default HomePage