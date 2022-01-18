const router = require("express").Router();
const axios = require("axios");


// const { response } = require("../app");
const Movie = require('../models/Movie.model')

// això va a http://localhost:5005/api/movies
router.get("/", (req, res, next) => res.json("NO VALGO PARA NADA"))

//això va a http://localhost:5005/api/movies/mostPopular
router.get("/mostPopular", async (req, res, next) => {
    try{
      const axiosCall = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
      const results = axiosCall.data.results
      res.json(results);
    }
    catch(err){
      console.log(err)
    }

//---- OPCIÓN B ------

    // .then(res => res.json(axiosCall.data.results))
    // // .then(data => data.results)
    // console.log('F')
    // .catch(err => console.log(err))
  
})


//això va a http://localhost:5005/api/movies/getOneMovie/:id
router.get("/getOneMovie/:TMDB_id", async (req, res, next) => {
  try{
    const axiosCall = await axios(`https://api.themoviedb.org/3/movie/${req.params.TMDB_id}?api_key=${process.env.API_KEY}&append_to_response=credits`)
    const results = axiosCall.data
    res.json(results);
  }
  catch(err){
    console.log(err)
  }
})


router.get("/shorterthan90", async (req, res, next) => {
  try{
    const axiosCall = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=vote_average.desc&include_adult=false&page=1&vote_count.gte=50&vote_average.gte=8&with_runtime.lte=90&with_watch_monetization_types=flatrate`)
    const results = axiosCall.data.results
    res.json(results);
  }
  catch(err){
    console.log(err)
  }
})


router.get("/bestofalltime", async (req, res, next) => {
  try{
    const axiosCall = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=vote_average.desc&include_adult=false&page=1&vote_count.gte=50&with_watch_monetization_types=flatrate`)
    const results = axiosCall.data.results
    res.json(results);
  }
  catch(err){
    console.log(err)
  }
})







//-------------------- TV -------------------- TV -------------------- TV -------------------- TV -------------------- TV --------------
router.get("/tv/mostPopular", async (req, res, next) => {
    try{
      const axiosCall = await axios(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`)
      const results = axiosCall.data.results
      res.json(results);
    }
    catch(err){
      console.log(err)
    }
  
})

router.get("/getOneTV/:TMDB_id", async (req, res, next) => {
  try{
    const axiosCall = await axios(`https://api.themoviedb.org/3/tv/${req.params.TMDB_id}?api_key=${process.env.API_KEY}&append_to_response=credits`)
    const results = axiosCall.data
    res.json(results);
  }
  catch(err){
    console.log(err)
  }
})

module.exports = router