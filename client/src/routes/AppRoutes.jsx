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
import MovieShorterThan90Page from '../pages/Movies/MovieShorterThan90Page/MovieShorterThan90Page'
import MoviesBestPage from '../pages/Movies/MoviesBestPage/MoviesBestPage'
import MoviesBest2021Page from '../pages/Movies/MoviesBest2021Page/MoviesBest2021Page'
import MoviesBestsXXIPage from '../pages/Movies/MoviesBestsXXIPage/MoviesBestsXXIPage'
import MoviesBestsXXPage from '../pages/Movies/MoviesBestsXXPage/MoviesBestsXXPage'
import MoviesInCinemasPage from '../pages/Movies/MoviesInCinemasPage/MoviesInCinemasPage'
import TVShorterThan25Page from '../pages/TV/TVShorterThan25Page/TVShorterThan25Page'
import TVBestPage from '../pages/TV/TVBestPage/TVBestPage'
import TVBest2021Page from '../pages/TV/TVBest2021Page/TVBest2021Page'
import TVBestsXXIPage from '../pages/TV/TVBestsXXIPage/TVBestsXXIPage'



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
            <Route path="/movies/shorterthan90" element={<MovieShorterThan90Page />} />
            <Route path="/movies/bestofalltime" element={<MoviesBestPage />} />
            <Route path="/movies/bestof2021" element={<MoviesBest2021Page />} />
            <Route path="/movies/bestofsXXI" element={<MoviesBestsXXIPage />} />
            <Route path="/movies/bestofsXX" element={<MoviesBestsXXPage />} />
            <Route path="/movies/nowincinemas" element={<MoviesInCinemasPage />} />




            <Route path="/tv" element={<TVHomePage />} />
            <Route path="/tv/mostPopular" element={<TVPopularPage />} />
            <Route path="/getOneTV/:TMDB_id" element={<TVDetailsPage />} />
            <Route path="/tv/shorterthan25" element={<TVShorterThan25Page />} />
            <Route path="/tv/bestofalltime" element={<TVBestPage />} />
            <Route path="/tv/bestof2021" element={<TVBest2021Page />} />
            <Route path="/tv/bestofsXXI" element={<TVBestsXXIPage />} />



            <Route path="/*" element={<h1>Page not found</h1>} />
        </Routes>
    )
}

export default AppRoutes