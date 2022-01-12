import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppRoutes from './routes/AppRoutes';

import PopularMovies from './pages/PopularMoviesPage/PopularMoviesPage'
import NavBar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <>

      <NavBar />

      <AppRoutes />

      <Footer />
    
    </>
  );
}

export default App;
