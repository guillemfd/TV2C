const router = require("express").Router();
const axios = require("axios");


// això va a http://localhost:5005/api/tv
// router.get("/", (req, res, next) => res.json("NO VALGO PARA NADA"))

//això va a http://localhost:5005/api/movies/mostPopular
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