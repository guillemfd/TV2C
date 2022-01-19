import './MovieCard.css'
import { Link } from 'react-router-dom'

function MovieCard({poster_path, title, release_date, vote_average, id, runtime}) {


    const IMG_API = "https://image.tmdb.org/t/p/w1280"


    return (
        <div>
                <div className="card-container" key={id}>
                    <img className="movie-cover" src={IMG_API + poster_path} alt={`Sorry, there is no picture for "${title}"`}/>
                    <div className="movie-card">
                        <span className="card-title">{title}</span>
                        <h5 className="card-desc">Year: {release_date.slice(0, 4)}</h5>
                        <h5 className="card-desc">Rate: {vote_average}</h5>
                        <Link to={`/movies/getOneMovie/${id}`}>
                            <button className="card-button">See More</button>
                        </Link>
                    </div>
                </div>
        </div>
    )
}

export default MovieCard