const router = require("express").Router();
const axios = require("axios");
const User = require("../models/User.model");



// const { response } = require("../app");
const Movie = require('../models/Movie.model')

// això va a http://localhost:5005/api/movies
router.get("/", (req, res, next) => res.json("NO VALGO PARA NADA"))

//això va a http://localhost:5005/api/movies/mostPopular
router.get("/mostPopular", async (req, res, next) => {
    try{
      const axiosCall = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&sort_by=popularity.desc`)
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
    const axiosCall = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&vote_count.gte=1000&sort_by=vote_average.desc&with_runtime.lte=90`)
    const results = axiosCall.data.results
    res.json(results);
  }
  catch(err){
    console.log(err)
  }
})


router.get("/bestofalltime", async (req, res, next) => {
  try{
    const axiosCall = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&vote_count.gte=1000&sort_by=vote_average.desc`)
    const results = axiosCall.data.results
    res.json(results);
  }
  catch(err){
    console.log(err)
  }
})



router.get("/bestof2021", async (req, res, next) => {
  try{
    const axiosCall = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&primary_release_year=2021&vote_count.gte=100&sort_by=vote_average.desc`)
    const results = axiosCall.data.results
    res.json(results);
  }
  catch(err){
    console.log(err)
  }
})


router.get("/bestofsXXI", async (req, res, next) => {
  try{
    const axiosCall = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&primary_release_date.gte=2000-12-31&vote_count.gte=100&sort_by=vote_average.desc`)
    const results = axiosCall.data.results
    res.json(results);
  }
  catch(err){
    console.log(err)
  }
})


router.get("/bestofsXX", async (req, res, next) => {
  try{
    const axiosCall = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&primary_release_date.lte=2000-12-31&vote_count.gte=100&sort_by=vote_average.desc`)
    const results = axiosCall.data.results
    res.json(results);
  }
  catch(err){
    console.log(err)
  }
})


router.get("/nowincinemas", async (req, res, next) => {
  try{
    const axiosCall = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&primary_release_date.gte=2021-12-01&vote_count.gte=20&sort_by=vote_average.desc`)
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
      const axiosCall = await axios(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&sort_by=popularity.desc`)
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

router.get("/tv/shorterthan25", async (req, res, next) => {
  try{
    const axiosCall = await axios(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&vote_count.gte=1500&sort_by=vote_average.desc&without_genres=16&with_runtime.lte=25`)
    const results = axiosCall.data.results
    res.json(results);
  }
  catch(err){
    console.log(err)
  }
})

router.get("/tv/bestofalltime", async (req, res, next) => {
  try{
    const axiosCall = await axios(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&vote_count.gte=1000&without_genres=16&sort_by=vote_average.desc`)
    const results = axiosCall.data.results
    res.json(results);
  }
  catch(err){
    console.log(err)
  }
})


router.get("/tv/bestof2021", async (req, res, next) => {
  try{
    const axiosCall = await axios(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&first_air_date.gte=2021-01-01&vote_count.gte=100&without_genres=16&sort_by=vote_average.desc`)
    const results = axiosCall.data.results
    res.json(results);
  }
  catch(err){
    console.log(err)
  }
})

router.get("/tv/bestofsXXI", async (req, res, next) => {
  try{
    const axiosCall = await axios(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&first_air_date.gte=2000-12-31&vote_count.gte=100&without_genres=16&sort_by=vote_average.desc`)
    const results = axiosCall.data.results
    res.json(results);
  }
  catch(err){
    console.log(err)
  }
})

router.get("/tv/bestofsXX", async (req, res, next) => {
  try{
    const axiosCall = await axios(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&first_air_date.lte=2000-12-31&vote_count.gte=100&without_genres=16&sort_by=vote_average.desc`)
    const results = axiosCall.data.results
    res.json(results);
  }
  catch(err){
    console.log(err)
  }
})


//---------------- SEARCH ------------------------ SEARCH ------------------------ SEARCH ------------------------ SEARCH --------
router.get("/:query", async (req, res, next) => {
  try{
    const axiosCall = await axios(`https://api.themoviedb.org/3/search/keyword?api_key=${process.env.API_KEY}&query=${req.params.query}&sort_by=vote_average.desc`)
    const results = axiosCall.data.results
    res.json(results);
  }
  catch(err){
    console.log(err)
  }
})

//---------- TV TO SEE ------(.post   .get   .delete)-------------------------------------------------------------------------
router.post("/toSeeTVList/:id", async (req, res) => { 
  console.log(req.params.id)
  console.log(req.user)
  console.log(req.body)

    try{
        await User.findByIdAndUpdate(req.body.userId, {$push: {TVWishList: req.params.id}},);
        res.status(204).json()
    }catch(err){
      console.log(err.message)
    }
});

module.exports = router