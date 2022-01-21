import './MovieDetailsPage.css'
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { addToCustomListONE, addToCustomListTHREE, addToCustomListTWO, deleteMovieWatched, getOneMovie, seenMovieList, toSeeMovieList } from "../../services/movies.service"
import Spinner from "../../components/Spinner/Spinner"
import { Carousel, Button } from 'react-bootstrap'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import { getUserData } from '../../services/auth.service'



function MovieDetailsPage(props) {

    const { isLoggedIn, user } = useContext(AuthContext)

    const { TMDB_id } = useParams()
    const [oneMovie, setOneMovie] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [getUser, setGetUser] = useState()

    const IMG_API = "https://image.tmdb.org/t/p/w1280"


    useEffect(() => {

        getOneMovie(TMDB_id)
            .then(response => {
                setOneMovie(response.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if ( user) {
            getUserData(`${user._id}`)
                .then(response => {
                    setGetUser(response.data)
                    // setIsLoading(false)
                })
                .catch(err => console.log(err))
        }
    }, [user])

    const convertRuntime = (num) => {
        let hours = num / 60;
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);
        return rhours + "h " + rminutes + "m";
      };

      const handleToSeeMovieList = () => {
        toSeeMovieList (oneMovie.id, user._id)
    }

    const handleSeenMovieList = () => {
        deleteMovieWatched (oneMovie.id, user._id)
        seenMovieList (oneMovie.id, user._id)
    }


    const handleToCustomListONE = () => {
        addToCustomListONE (oneMovie.id, getUser.myLists[0])
    }

    const handleToCustomListTWO = () => {
        addToCustomListTWO (oneMovie.id, getUser.myLists[1])
    }

    const handleToCustomListTHREE = () => {
        addToCustomListTHREE (oneMovie.id, getUser.myLists[2])
    }

    return (

            isLoading === true ? <Spinner /> :
        <>
            <div className="details_background" style={{backgroundImage: `url(${IMG_API + oneMovie.poster_path})`}}>
                <section className="details_container">
                    <div className="img_section">
                    <Link to="/movies">
                        <Button variant="dark" size="m" style={{width: '150px', height: '60px', margin: '10px', marginLeft: '40px'}}>Back to movies</Button>
                    </Link>
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
                        {oneMovie.backdrop_path &&
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
                        }
                    </Carousel>

                    </div>

                    <div className="profile_desc_section">
                        <h2 className="title">{oneMovie.title}</h2>
                        <h4 className="tagline">{oneMovie.tagline}</h4>
                        <p className="description">{oneMovie.overview}</p>
                        <p className="description">Duration: {convertRuntime(oneMovie.runtime)} ({oneMovie.runtime}m.)</p>
                        <p className="description" style={{marginTop: '-15px'}}>It was released on {oneMovie.release_date}, with a budget of {oneMovie.budget} $.</p>
                        <p className="description">Rating: {oneMovie.vote_average}/10 ({oneMovie.vote_count} votes)</p>
                        
                        { oneMovie.production_companies.logo_path &&
                            <p className="description">
                                <img className="company-logo" src={IMG_API + oneMovie.production_companies[0].logo_path} alt={oneMovie.title}/>
                            </p>
                        }


                    {isLoggedIn &&
                    <div>
                        <div>
                            <button className="card-button" onClick={() => handleToSeeMovieList(oneMovie.id)}>Add to movies to see list</button>
                        </div>
                    
                        <div>
                            <button className="card-button" style={{backgroundColor: 'coral'}} onClick={() => handleSeenMovieList(oneMovie.id)}>Already seen!</button>
                        </div>
                    </div>
                    }


                    {getUser.myLists[0] &&
                        <div>
                            <button className="card-button" onClick={() => handleToCustomListONE(oneMovie.id)}>My list one</button>
                        </div>                    
                    }

                    {getUser.myLists[1] &&
                        <div>
                            <button className="card-button" onClick={() => handleToCustomListTWO(oneMovie.id)}>My list two</button>
                        </div>                    
                    }

                    {getUser.myLists[2] &&
                        <div>
                            <button className="card-button" onClick={() => handleToCustomListTHREE(oneMovie.id)}>My list three</button>
                        </div>                    
                    }
                        
                        <a className="link_home" href={oneMovie.homepage} target="_blank" rel="noreferrer noopener">Movie Homepage</a>

                        <div className='cast-container'>
                            <p className='cast-text'>Most relevant actors:</p>
                            <div className='cast-wrapper'>
                            {oneMovie.credits.cast.slice(0, 5).map((cast, i) => {
                            return(
                                <div className="cast-card" key={i}>
                                    <img className="cast-pic" src={IMG_API + cast.profile_path} alt={oneMovie.credits.cast[0].name}/>
                                    <p className="cast-name">{cast.name}</p>
                                </div>
                            )
                        })}
               
                            </div>
                        </div>


                        <div className="interests">
                        {oneMovie.genres.map((genre, i) => {
                            return(
                                <span className="interests_item" key={i}>{genre.name}</span>
                            )
                        })}
                        </div>

                    </div>
                </section>
            </div>

        </>

    )
}

export default MovieDetailsPage