import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import PopularMoviesPage from '../pages/PopularMoviesPage/PopularMoviesPage'
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage'
import MoviesHomePage from '../pages/MoviesHomePage/MoviesHomePage'
import TVHomePage from '../pages/TVHomePage/TVHomePage'


function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/movies" element={<MoviesHomePage />} />
            <Route path="/movies/mostPopular" element={<PopularMoviesPage />} />
            <Route path="/movies/getOneMovie/:TMDB_id" element={<MovieDetailsPage />} />

            <Route path="/tv" element={<TVHomePage />} />

            <Route path="/*" element={<h1>Page not found</h1>} />
        </Routes>
    )
}

export default AppRoutes