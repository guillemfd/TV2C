import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import PopularMoviesPage from '../pages/Movies/PopularMoviesPage/PopularMoviesPage'
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage'
import MoviesHomePage from '../pages/Movies/MoviesHomePage/MoviesHomePage'
import TVHomePage from '../pages/TV/TVHomePage/TVHomePage'
import TVPopularPage from '../pages/TV/TVPopularPage/TVPopularPage'
import TVDetailsPage from '../pages/TV/TVDetailsPage/TVDetailsPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import LogInPage from '../pages/LogInPage/LogInPage'
import ProfileDetailsPage from '../pages/ProfileDetailsPage/ProfileDetailsPage'



function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/myprofile/:userId" element={<ProfileDetailsPage />} />



            <Route path="/movies" element={<MoviesHomePage />} />
            <Route path="/movies/mostPopular" element={<PopularMoviesPage />} />
            <Route path="/movies/getOneMovie/:TMDB_id" element={<MovieDetailsPage />} />

            <Route path="/tv" element={<TVHomePage />} />
            <Route path="/tv/mostPopular" element={<TVPopularPage />} />
            <Route path="/getOneTV/:TMDB_id" element={<TVDetailsPage />} />

            <Route path="/*" element={<h1>Page not found</h1>} />
        </Routes>
    )
}

export default AppRoutes