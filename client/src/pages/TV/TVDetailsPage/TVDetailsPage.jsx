// import './MovieDetailsPage.css'
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getOneTV } from "../../../services/tv.service"
import Spinner from "../../../components/Spinner/Spinner"
import {Carousel} from 'react-bootstrap'
import { toSeeTVList } from '../../../services/tv.service'
import { useContext } from 'react'
import { AuthContext } from '../../../context/auth.context'
import { getUserData } from "../../../services/auth.service"



function TVDetailsPage(props) {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext)

    const { TMDB_id } = useParams()
    const [oneTV, setOneTV] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [getUser, setGetUser] = useState()

    const IMG_API = "https://image.tmdb.org/t/p/w1280"


    useEffect(() => {

        getOneTV(TMDB_id)
            .then(response => {
                setOneTV(response.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    // useEffect(() => {

    //     getUserData(user)
    //         .then(response => {
    //             setGetUser(response.data)
    //             setIsLoading(false)
    //         })
    //         .catch(err => console.log(err))
    // }, [])

    // console.log(getUser)

    const handleToSeeTVList = () => {
        toSeeTVList (oneTV.id, user._id)
    }

    // const background = {backgroundImage: `url(${IMG_API + oneTV.poster_path})`}

    return (

            isLoading === true ? <Spinner /> :
        <div style={{
            backgroundImage: `url(${IMG_API + oneTV.poster_path})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            marginTop: '-30px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
        
            <section className="details_container">
                <div className="img_section">

                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                        className="detail-movie-cover"
                        src={IMG_API + oneTV.poster_path}
                        alt="Front cover"
                        />
                        <Carousel.Caption>
                        <h5>Main Poster</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {oneTV.backdrop_path &&
                    <Carousel.Item>
                        <img
                        className="detail-movie-cover"
                        src={IMG_API + oneTV.backdrop_path}
                        alt="Back cover"
                        />
                        <Carousel.Caption>
                        <h5>Backdrop Poster</h5>
                        </Carousel.Caption>
                    </Carousel.Item>}
                </Carousel>


                </div>

                <div className="profile_desc_section">
                {oneTV.name &&
                    <h2 style={{fontWeight: '700'}}>{oneTV.name}</h2>}
                    <h4 style={{color: 'white', fontWeight: '200', marginBottom: '25px'}}>{oneTV.tagline}</h4>
                    {/* <p className="description">Created by: {oneTV.created_by[0].name}/p> */}
                    <p className="description">{oneTV.overview}</p>
                    <p className="description">It has a total of {oneTV.number_of_seasons} seasons, with {oneTV.number_of_episodes} episodes for each season, and a duration of {oneTV.episode_run_time.slice(0, 1)} minutes each episode.</p>
                {oneTV.networks.name &&
                    <p className="description" style={{marginTop: '-15px'}}>The first episode was released on {oneTV.first_air_date}, and the last one on {oneTV.last_episode_to_air.air_date}. You can watch it at {oneTV.networks[0].name}.</p>}
                    <p className="description">Rating: {oneTV.vote_average}/10 ({oneTV.vote_count} votes)</p>
                    <p className="description">
                        {/* <img className="company-logo" src={IMG_API + oneTV.production_companies[0].logo_path} alt={oneTV.title}/> */}
                    </p>

                    {isLoggedIn &&
                    <button className="card-button" onClick={() => handleToSeeTVList(oneTV.id)}>Add to {user.username}'s TV Series to see</button>
                    }
                    
                    <a className="description" href={oneTV.homepage} target="_blank" rel="noreferrer noopener">TV Serie Homepage</a>

                    <div className='cast-container'>
                        <p className='cast-text'>Most relevant actors:</p>
                        <div className='cast-wrapper'>
                        {oneTV.credits.cast.slice(0, 5).map((cast, i) => {
                            return(
                                <div className="cast-card" key={i}>
                                    <img className="cast-pic" src={IMG_API + cast.profile_path} alt={oneTV.name}/>
                                    <p className="cast-name">{cast.name}</p>
                                </div>
                            )
                        })}
                            

                        </div>
                    </div>

                    <div className="interests">
                        {oneTV.genres.map((genre, i) => {
                            return(
                                <span className="interests_item" key={i}>{genre.name}</span>
                            )
                        })}
                    </div>
                    
                </div>
            </section>

        </div>

    )
}

export default TVDetailsPage