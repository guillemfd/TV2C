import './App.css';
import PopularMovies from './pages/PopularMoviesPage/PopularMoviesPage'

function App() {
  return (
    <div className="">

        <p>
          Edit <strong>{process.env.REACT_APP_MYKEY}</strong> <code>src/App.js</code> and save to reload.
        </p>

        <PopularMovies />
    
    </div>
  );
}

export default App;
