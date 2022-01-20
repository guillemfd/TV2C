import { Container, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import MoviesSearchBar from "../../components/Movies/MoviesSearchBar/MoviesSearchBar"
import TVSearchBar from "../../components/TV/TVSearchBar/TVSearchBar"

import BackGroundIMG from '../../img/photo-1489599849927-2ee91cede3ba.jpg'
import './HomePage.css'

function HomePage() {
    return (
        <Container>
            <div id="HomePageBackGround">
                <img src={BackGroundIMG} alt="HomePageBackGround"></img>
            </div>
            <h1 style={{color: 'white', textShadow: '2px 2px #000000', fontSize: '50px'}}>Welcome to TV2C app</h1>
            <h5 style={{color: 'grey', textShadow: 'white'}}>Make personalised lists, update your "To See" list or just look for new moives & TV Series</h5>
            <hr/>

            <MoviesSearchBar />
            <TVSearchBar />

            {/* <Link to="/movies">
                <Button variant="dark" size="xl">Suggested Movies</Button>
            </Link> */}

            {/* <TVSearchBar />
            <Link to="/tv">
                <Button variant="light" size="xl">Suggested TV Series</Button>
            </Link> */}
        </Container>
    )
}

export default HomePage