const router = require("express").Router();
const axios = require("axios");


// const { response } = require("../app");
const Movie = require('../models/Movie.model')

// això va a http://localhost:5005/api/movies
router.get("/", (req, res, next) => res.json("NO VALGO PARA NADA"))

//això va a http://localhost:5005/api/movies/mostPopular
router.get("/mostPopular", async (req, res, next) => {
    try{
      const axiosCall = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=147b9c6e5e6d4e77350febe714463b30`)
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


//---- OPCIÓN try + catch ------ workiiiiiing!!!!!!!!!!!  <============  <================  <=======
// router.get("/mostPopular", async (req, res, next) => {
//     try{
//       const axiosCall = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=147b9c6e5e6d4e77350febe714463b30`)
//       const results = axiosCall.data.results

//       res.json(results);
//     }
//     catch(err){
//       console.log(err)
//     }
  
})


module.exports = router