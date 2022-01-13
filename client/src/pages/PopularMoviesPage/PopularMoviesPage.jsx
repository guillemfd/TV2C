import './PopularMoviesPage.css'
import PopularMovies from "../../components/PopularMovies/PopularMovies"
import { Container } from "react-bootstrap"
import HorizontalScroll from 'react-scroll-horizontal'
import PopularMoviesHor from '../../components/PopularMoviesHor/PopularMoviesHor'

function PopularMoviesPage(props) {

   

    return (
        <Container>
            <h1>20 Most Popular Movies</h1>
            <hr/>

            <div>
                <PopularMovies />
            </div>

            <div className="HorizontalScrollContainer">
                <HorizontalScroll >              
                    <div className='HorizontalMain HorizontalBG1'>
                        <h1>Guillem</h1>
                    </div>

                    <div className='HorizontalMain HorizontalBG2'>
                        <h1>Anna</h1>
                    </div>

                    <div className='HorizontalMain HorizontalBG3'>
                        <h1>Bernat</h1>
                    </div>

                    <div className='HorizontalMain HorizontalBG4'>
                        <h1>Riu</h1>
                    </div>
                </HorizontalScroll>
            </div>

            <div className="HorizontalScrollContainer">
                <HorizontalScroll >
                    <div className="HorizontalMain">
                        <PopularMoviesHor />
                    </div>
                    
                    <div className='HorizontalMain HorizontalBG1'>
                        <h1>Hola Guillem</h1>
                    </div>

                    <div className='HorizontalMain HorizontalBG2'>
                        <h1>Hola Anna</h1>
                    </div>

                    <div className='HorizontalMain HorizontalBG3'>
                        <h1>Hola Bernat</h1>
                    </div>

                    <div className='HorizontalMain HorizontalBG4'>
                        <h1>Hola Bebé</h1>
                    </div>
                </HorizontalScroll>
            </div>


        </Container>
    )
}

export default PopularMoviesPage