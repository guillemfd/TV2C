import { Container, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import PopularTVHor from "../../../components/TV/PopularTVHor/PopularTVHor"
import TVBest2021Hor from "../../../components/TV/TVBest2021Hor/TVBest2021Hor"
import TVBestHor from "../../../components/TV/TVBestHor/TVBestHor"
import TVShorterThan25Hor from "../../../components/TV/TVShorterThan25Hor/TVShorterThan25Hor"


function TVHomePage() {
    return (
        <Container>

            <h1 style={{color: 'grey', textShadow: '2px 2px #000000', fontSize: '80px'}}>Select a list</h1>
            <hr/>


            <Link to="/tv/mostPopular">
                <Button variant="dark" size="xl">Most Popular</Button>
            </Link>
            <PopularTVHor />

            <Link to="/tv/shorterthan25">
                <Button variant="dark" size="xl">Shorter than 25 minutes</Button>
            </Link>
            <TVShorterThan25Hor />

            <Link to="/tv/bestofalltime">
                <Button variant="dark" size="xl">Best of all time</Button>
            </Link>
            <TVBestHor />

            <Link to="/tv/bestof2021">
                <Button variant="dark" size="xl">Best of 2021</Button>
            </Link>
            <TVBest2021Hor />




            
        
        </Container>
    )
}

export default TVHomePage