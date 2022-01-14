import './MovieCard.css'
import { Link } from 'react-router-dom'

function MovieCard({poster_path, title, release_date, vote_average, id, runtime}) {


    const IMG_API = "https://image.tmdb.org/t/p/w1280"

    const convertRuntime = (num) => {
        let hours = num / 60;
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);
        return rhours + "h " + rminutes + "m";
      };

    return (
        <div>
                <div className="card-container" key={id}>
                    <img className="movie-cover" src={IMG_API + poster_path} alt={title}/>
                    <div className="movie-card">
                        <span className="card-title">{title}</span>
                        <h5 className="card-desc">Year: {release_date.slice(0, 4)}</h5>
                        <h5 className="card-desc">Rate: {vote_average}</h5>
                        {/* <h5 className="card-desc">Duration: {runtime}</h5> */}
                        <Link to={`/getOneMovie/${id}`}>
                            <button className="card-button">See More</button>
                        </Link>
                    </div>
                </div>
        </div>
    )
}

export default MovieCard