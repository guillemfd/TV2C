// import './MovieDetailsPage.css'
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getOneTV } from "../../../services/tv.service"
import Spinner from "../../../components/Spinner/Spinner"
import {Carousel} from 'react-bootstrap'


function TVDetailsPage(props) {

    const { TMDB_id } = useParams()
    const [oneTV, setOneTV] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const IMG_API = "https://image.tmdb.org/t/p/w1280"


    useEffect(() => {

        getOneTV(TMDB_id)
            .then(response => {
                setOneTV(response.data)
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
                        src={IMG_API + oneTV.poster_path}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h5>Main Poster</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="detail-movie-cover"
                        src={IMG_API + oneTV.backdrop_path}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h5>Backdrop Poster</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


                </div>

                <div className="profile_desc_section">
                    <h2 style={{fontWeight: '700'}}>{oneTV.name}</h2>
                    <h4 style={{color: 'white', fontWeight: '200', marginBottom: '25px'}}>{oneTV.tagline}</h4>
                    {/* <p className="description">Created by: {oneTV.created_by[0].name}/p> */}
                    <p className="description">{oneTV.overview}</p>
                    <p className="description">It has a total of {oneTV.number_of_seasons} seasons, with {oneTV.number_of_episodes} episodes for each season, and a duration of {oneTV.episode_run_time.slice(0, 1)} minutes each episode.</p>
                    <p className="description" style={{marginTop: '-15px'}}>The first episode was released on {oneTV.first_air_date}, and the last one on {oneTV.last_episode_to_air.air_date}. You can watch it at {oneTV.networks[0].name}.</p>
                    <p className="description">Rating: {oneTV.vote_average}/10 ({oneTV.vote_count} votes)</p>
                    <p className="description">
                        {/* <img className="company-logo" src={IMG_API + oneTV.production_companies[0].logo_path} alt={oneTV.title}/> */}
                    </p>

                    <Link to={`/tv/mostPopular`}>
                            <button className="card-button">Add to My List</button>
                    </Link>
                    <Link to={`/tv/mostPopular`}>
                            <button className="card-button">Already seen!</button>
                    </Link>
                    
                    <a className="description" href={oneTV.homepage} target="_blank" rel="noreferrer noopener">TV Serie Homepage</a>

                    <div className='cast-container'>
                        <p className='cast-text'>Most relevant actors:</p>
                        <div className='cast-wrapper'>
                            <div className="cast-card">
                                <img className="cast-pic" src={IMG_API + oneTV.credits.cast[0].profile_path} alt={oneTV.credits.cast[0].name}/>
                                <p className="cast-name">{oneTV.credits.cast[0].name}</p>
                            </div>
                            {/* <div className="cast-card">
                                <img className="cast-pic" src={IMG_API + oneTV.credits.cast[1].profile_path} alt={oneTV.credits.cast[0].name}/>
                                <p className="cast-name">{oneTV.credits.cast[1].name}</p>
                            </div>
                            <div className="cast-card">
                                <img className="cast-pic" src={IMG_API + oneTV.credits.cast[2].profile_path} alt={oneTV.credits.cast[0].name}/>
                                <p className="cast-name">{oneTV.credits.cast[2].name}</p>
                            </div>
                            <div className="cast-card">
                                <img className="cast-pic" src={IMG_API + oneTV.credits.cast[3].profile_path} alt={oneTV.credits.cast[0].name}/>
                                <p className="cast-name">{oneTV.credits.cast[3].name}</p>
                            </div>
                            <div className="cast-card">
                                <img className="cast-pic" src={IMG_API + oneTV.credits.cast[4].profile_path} alt={oneTV.credits.cast[0].name}/>
                                <p className="cast-name">{oneTV.credits.cast[4].name}</p>
                            </div>
                            <div className="cast-card">
                                <img className="cast-pic" src={IMG_API + oneTV.credits.cast[5].profile_path} alt={oneTV.credits.cast[0].name}/>
                                <p className="cast-name">{oneTV.credits.cast[5].name}</p>
                            </div> */}

                        </div>
                    </div>

                    <div className="interests">
                        <span className="interests_item">{oneTV.genres[0].name}</span>
                        {/* <span className="interests_item">{{oneMovie.genres[3].name} ? {oneMovie.genres[3].name} : ""}</span> */}
                    </div>
                </div>
            </section>

        </>

    )
}

export default TVDetailsPage