import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import PopularMoviesPage from '../pages/PopularMoviesPage/PopularMoviesPage'
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage'
import MoviesHomePage from '../pages/MoviesHomePage/MoviesHomePage'
import TVHomePage from '../pages/TVHomePage/TVHomePage'
import PopularTVPage from '../pages/PopularTVPage/PopularTVPage'
import TVDetailsPage from '../pages/TVDetailsPage/TVDetailsPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import LogInPage from '../pages/LogInPage/LogInPage'



function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LogInPage />} />


            <Route path="/movies" element={<MoviesHomePage />} />
            <Route path="/movies/mostPopular" element={<PopularMoviesPage />} />
            <Route path="/movies/getOneMovie/:TMDB_id" element={<MovieDetailsPage />} />

            <Route path="/tv" element={<TVHomePage />} />
            <Route path="/tv/mostPopular" element={<PopularTVPage />} />
            <Route path="/getOneTV/:TMDB_id" element={<TVDetailsPage />} />

            <Route path="/*" element={<h1>Page not found</h1>} />
        </Routes>
    )
}

export default AppRoutes