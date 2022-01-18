import './MovieDetailsPage.css'
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
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

    const convertRuntime = (num) => {
        let hours = num / 60;
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);
        return rhours + "h " + rminutes + "m";
      };

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
                    <h4 style={{color: 'white', fontWeight: '200', marginBottom: '25px'}}>{oneMovie.tagline}</h4>
                    <p className="description">{oneMovie.overview}</p>
                    <p className="description">Duration: {convertRuntime(oneMovie.runtime)} ({oneMovie.runtime}m.)</p>
                    <p className="description" style={{marginTop: '-15px'}}>It was released on {oneMovie.release_date}, with a budget of {oneMovie.budget} $.</p>
                    <p className="description">Rating: {oneMovie.vote_average}/10 ({oneMovie.vote_count} votes)</p>
                    <p className="description">
                        <img className="company-logo" src={IMG_API + oneMovie.production_companies[0].logo_path} alt={oneMovie.title}/>
                    </p>

                    <Link to={`/mostPopular`}>
                            <button className="card-button">Add to My List</button>
                    </Link>
                    <Link to={`/mostPopular`}>
                            <button className="card-button">Already seen!</button>
                    </Link>

                    
                    <a className="description" href={oneMovie.homepage} target="_blank" rel="noreferrer noopener">Movie Homepage</a>

                    <div className='cast-container'>
                        <p className='cast-text'>Most relevant actors:</p>
                        <div className='cast-wrapper'>
                            <div className="cast-card">
                                <img className="cast-pic" src={IMG_API + oneMovie.credits.cast[0].profile_path} alt={oneMovie.credits.cast[0].name}/>
                                <p className="cast-name">{oneMovie.credits.cast[0].name}</p>
                            </div>
                            <div className="cast-card">
                                <img className="cast-pic" src={IMG_API + oneMovie.credits.cast[1].profile_path} alt={oneMovie.credits.cast[0].name}/>
                                <p className="cast-name">{oneMovie.credits.cast[1].name}</p>
                            </div>
                            <div className="cast-card">
                                <img className="cast-pic" src={IMG_API + oneMovie.credits.cast[2].profile_path} alt={oneMovie.credits.cast[0].name}/>
                                <p className="cast-name">{oneMovie.credits.cast[2].name}</p>
                            </div>
                            <div className="cast-card">
                                <img className="cast-pic" src={IMG_API + oneMovie.credits.cast[3].profile_path} alt={oneMovie.credits.cast[0].name}/>
                                <p className="cast-name">{oneMovie.credits.cast[3].name}</p>
                            </div>
                            <div className="cast-card">
                                <img className="cast-pic" src={IMG_API + oneMovie.credits.cast[4].profile_path} alt={oneMovie.credits.cast[0].name}/>
                                <p className="cast-name">{oneMovie.credits.cast[4].name}</p>
                            </div>
                            <div className="cast-card">
                                <img className="cast-pic" src={IMG_API + oneMovie.credits.cast[5].profile_path} alt={oneMovie.credits.cast[0].name}/>
                                <p className="cast-name">{oneMovie.credits.cast[5].name}</p>
                            </div>
                        </div>
                    </div>

                    <div className="interests">
                        <span className="interests_item">{oneMovie.genres[0].name}</span>
                        <span className="interests_item">{oneMovie.genres[1].name}</span>
                        {/* {{oneMovie.genres[2].name} ?
                        <span className="interests_item">{oneMovie.genres[2].name}</span>
                        : ""} */}
                        {/* <span className="interests_item">{{oneMovie.genres[3].name} ? {oneMovie.genres[3].name} : ""}</span> */}
                    </div>
                </div>
            </section>

        </>

    )
}

export default MovieDetailsPage