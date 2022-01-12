import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import PopularMoviesPage from '../pages/PopularMoviesPage/PopularMoviesPage'


function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mostPopular" element={<PopularMoviesPage />} />
        </Routes>
    )
}

export default AppRoutes