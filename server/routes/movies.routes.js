const router = require("express").Router();
const axios = require("axios");


const { response } = require("../app");
const Movie = require('./../models/Movies.model')

// això va a http://localhost:5005/api/movies
router.get("/", (req, res, next) => res.json("NO VALGO PARA NADA"))

//això va a http://localhost:5005/api/movies/getAllMovies
router.get("/getAllMovies", async (req, res, next) => {
    console.log('A')

    const axiosCall = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=147b9c6e5e6d4e77350febe714463b30`)
    console.log('B')
    console.log(axiosCall.data.results)

    const results = axiosCall.data.results
    console.log('C')
    console.log(res.body)
    // console.log(results)

    // .then(res => res.json(axiosCall.data.results))
    // // .then(data => data.results)
    // console.log('F')
    // .catch(err => console.log(err))

    Movie
        .find(results)
        console.log('D')
        // .select('TMDB_id title overview poster_path vote_average release_date')
        console.log('E')
        .then(movie => res.json(movie.results))
        console.log('F')
        .catch(err => next(new Error(err)))
})


// -------POPULAR-------------------POPULAR-------------------POPULAR-------------------POPULAR-------------------POPULAR---------
// router.get("/getPopularMovies", async (req, res, next) => {
//     try{
//       const axiosCall = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=147b9c6e5e6d4e77350febe714463b30`)
//       const results = axiosCall.data.results
  
//       res.json((response), { results });
//     }
//     catch(err){
//       console.log(err)
//     }
  
//   });


module.exports = router