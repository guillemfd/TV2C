import { Navbar, Nav, Container, NavLink, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import { Link } from 'react-router-dom'



function MoviesSearchBar() {
    const [query, setQuery] = useState("")
    const [results, setResults] =useState("")

    const onChange = (e) => {
        e.preventDefault()
        setQuery(e.target.value)

        fetch
            (`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then((res) => res.json())
            .then((data) => {
                if(!data.errors) {
                    setResults(data.results)
                } else {
                    setResults([])
                }
            })
    }

    console.log(results)



    return (

        <>

        <Form className="d-flex">
            <FormControl
            type="text"
            placeholder="Search for a movie"
            value={query}
            className="me-1"
            aria-label="Search"
            onChange={onChange}
            />
            {/* <Button variant="info" >Search</Button> */}
            <Link to="/movies">
                <Button variant="dark" size="xl">Suggest me Movies!</Button>
            </Link>
        </Form>

            {results.length > 0 && (
            <div>
                <h1 style={{margin: '15px'}}>Most popular movies for "{query}"</h1>
                <div className="cards_at_Movies_Pages">
                    {results.map((movie) => <MovieCard {...movie} key={movie.id} />)}
                </div>
            </div>
            )}
        
        </>
    )

}

export default MoviesSearchBar