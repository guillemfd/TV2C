import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppRoutes from './routes/AppRoutes';

import PopularMovies from './pages/PopularMoviesPage/PopularMoviesPage'
import NavBar from './components/NavBar/Navbar';

function App() {
  return (
    <>

      <NavBar />

      <AppRoutes />
    
    </>
  );
}

export default App;
