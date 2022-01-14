import './MovieDetailsPage.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOneMovie } from "../../services/movies.service"
import Spinner from "../../components/Spinner/Spinner"
import {Carousel} from 'react-bootstrap'

function MovieDetailsPage(props) {

    const { TMDB_id } = useParams()
    const [oneMovie, setOneMovie] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const IMG_API = "https://image.tmdb.org/t/p/w1280"


    useEffect(() => {

        getOneMovie(TMDB_id)
            .then(response => {
                setOneMovie(response.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])


    return (

            isLoading === true ? <Spinner /> :
        <>

            <section className="details_container">
                <div className="img_section">

                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                        className="detail-movie-cover"
                        src={IMG_API + oneMovie.poster_path}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h5>Main Poster</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="detail-movie-cover"
                        src={IMG_API + oneMovie.backdrop_path}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h5>Backdrop Poster</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                    {/* <img className="detail-movie-cover" src={IMG_API + oneMovie.poster_path} alt={oneMovie.title}/> */}
                    {/* <img className="detail-movie-cover" src={IMG_API + oneMovie.backdrop_path} alt={oneMovie.title}/> */}
                </div>

                <div className="profile_desc_section">
                    <h2 style={{fontWeight: '700'}}>{oneMovie.title}</h2>
                    <h4 style={{color: 'white', fontWeight: '200', marginBottom: '50px'}}>{oneMovie.tagline}</h4>
                    <p className="description">{oneMovie.overview}</p>
                    <p className="description">Duration: {oneMovie.runtime} min.</p>
                    <p className="description" style={{marginTop: '-15px'}}>It was released on {oneMovie.release_date}, with a budget of {oneMovie.budget} $.</p>
                    <p className="description">Average: {oneMovie.vote_average}</p>
                    <p className="description">
                        <img className="company-logo" src={IMG_API + oneMovie.production_companies[0].logo_path} alt={oneMovie.title}/>
                    </p>

                    
                    <a  className="description" href={oneMovie.homepage} target="_blank">Movie Homepage</a>

                    <div className="interests">
                        <span className="interests_item">{oneMovie.genres[0].name}</span>
                        <span className="interests_item">{oneMovie.genres[1].name}</span>
                        <span className="interests_item">{oneMovie.genres[2].name}</span>
                        {/* <span className="interests_item">{`${oneMovie.genres[3].name}` ? `{oneMovie.genres[3].name}` : ""}</span> */}
                    </div>
                </div>
            </section>

        </>

    )
}

export default MovieDetailsPage