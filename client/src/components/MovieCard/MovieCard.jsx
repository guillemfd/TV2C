import './MovieCard.css'

function MovieCard({poster_path, title, release_date, vote_average, id}) {


    const IMG_API = "https://image.tmdb.org/t/p/w1280"

    return (
        <div>
                <div className="card-container" key={id}>
                    <img className="movie-cover" src={IMG_API + poster_path} alt={title}/>
                    <div className="movie-card">
                        <span className="card-title">{title}</span>
                        <h5 className="card-desc">Year: {release_date.slice(0, 4)}</h5>
                        <h5 className="card-desc">Rate: {vote_average}</h5>
                        <button className="card-button">See More</button>
                    </div>
                </div>
        </div>
    )
}

export default MovieCard