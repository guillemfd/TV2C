import { Route, Routes } from 'react-router-dom'
import PopularMoviesPage from '../pages/PopularMoviesPage/PopularMoviesPage'

function AppRoutes() {

    return (
        <Routes>
            <Route path="/mostPopular" element={<PopularMoviesPage />} />
        </Routes>
    )
}

export default AppRoutes