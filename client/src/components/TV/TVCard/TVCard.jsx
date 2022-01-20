import { Link } from 'react-router-dom'

function TVCard({poster_path, name, first_air_date, vote_average, id }) {


    const IMG_API = "https://image.tmdb.org/t/p/w1280"

    return (
        <div>
        {poster_path && name && first_air_date && id && vote_average &&
            <div className="card-container" key={id}>
                    <img className="movie-cover" src={IMG_API + poster_path} alt={`Sorry, there is no picture for "${name}"`}/>
                    <div className="movie-card">
                        <span className="card-title">{name}</span>
                        <h5 className="card-desc">Year: {first_air_date.slice(0, 4)}</h5>
                        <h5 className="card-desc">Rate: {vote_average}</h5>
                        <Link to={`/getOneTV/${id}`}>
                            <button className="card-button">See More</button>
                        </Link>
                    </div>
                </div>
        }
               
        </div>
    )
}

export default TVCard