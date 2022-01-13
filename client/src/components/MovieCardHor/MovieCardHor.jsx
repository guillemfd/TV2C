import './MovieCardHor.css'

function MovieCard({poster_path, title, release_date, vote_average, id}) {


    const IMG_API = "https://image.tmdb.org/t/p/w1280"

    return (
        <div>
                <div className="card-containerHor" key={id}>
                    <img className="movie-coverHor" src={IMG_API + poster_path} alt={title}/>
                </div>
        </div>
    )
}

export default MovieCard