const router = require("express").Router();
const axios = require("axios");
const User = require("../models/User.model");
const List = require("../models/List.model");



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

//---------- TV TO SEE -------------------------------------------------------------------------------
router.post("/toSeeTVList/:id", async (req, res) => { 
  // console.log(req.params.id)
  // console.log(req.body)

    try{
        const TVtoSee = await User.findByIdAndUpdate(req.body.userId, 
          {$push: {toseeTVList: req.params.id}}, {new : true});
        res.status(201).json({ TVtoSee })
    }catch(err){
      console.log(err.message)
    }
});



// const { listName, publishedBy, publishedUsername } = req.body

// try {
//   const createList = await List.create({ listName, publishedBy, publishedUsername })

//   const user = await User.findByIdAndUpdate(publishedBy, 
//     {$push: {myLists: createList._id}}, {new : true})

//    res.status(201).json({createList, user})
// } catch (err) {
//     res.status(400).json(err.message)
// }




//---------- MOVIE TO SEE -----------------------------------------------------------------------
router.post("/toSeeMovieList/:name", async (req, res) => { 

    try{
        await User.findByIdAndUpdate(req.body.userId, {$push: {toseeMovieList: req.params.name}},);
        res.status(204).json()
    }catch(err){
      console.log(err.message)
    }
});


//---------- MOVIE SEEN -----------------------------------------------------------------------
router.post("/seenMovieList/:name", async (req, res) => { 
  console.log(req.body.userId)

  try{
      await User.findByIdAndUpdate(req.body.userId, {$push: {seenMovieList: req.params.name}},);
      // await User.findByIdAndUpdate(req.body.userId, {$pull: {toseeMovieList: req.params.id}},);
      res.status(204).json()
  }catch(err){
    console.log(err.message)
  }
});

router.patch("/deleteMovieWatched/:name", async (req, res) => { 

  try{
      await User.findByIdAndUpdate(req.body.userId, {$pull: {toseeMovieList: req.params.name}},);
      res.status(204).json()
  }catch(err){
    console.log(err.message)
  }
});


//---------- TV SEEN -----------------------------------------------------------------------
router.post("/seenTVList/:name", async (req, res) => { 

  try{
      await User.findByIdAndUpdate(req.body.userId, {$push: {seenTVList: req.params.name}},);
      // await User.findByIdAndUpdate(req.body.userId, {$pull: {toseeMovieList: req.params.id}},);
      res.status(204).json()
  }catch(err){
    console.log(err.message)
  }
});

router.patch("/deleteTVWatched/:name", async (req, res) => { 
  console.log(req.params.id)
  try{
      await User.findByIdAndUpdate(req.body.userId, {$pull: {toseeTVList: req.params.name}},);
      res.status(204).json()
  }catch(err){
    console.log(err.message)
  }
});

//--------------------- CREATE LIST -------------------------- CREATE LIST -------------------------- CREATE LIST -------
router.post("/createList", async (req, res, next) => { 

  const { listName, publishedBy, publishedUsername } = req.body

  try {
    const createList = await List.create({ listName, publishedBy, publishedUsername })

    const user = await User.findByIdAndUpdate(publishedBy, 
      {$push: {myLists: createList._id}}, {new : true})

     res.status(201).json({createList, user})
  } catch (err) {
      res.status(400).json(err.message)
  }

})

//---------------- ADD tmdbId TO CREATED LISTS --------------- ADD tmdbId TO CREATED LISTS --------------- ADD tmdbId TO CREATED LISTS 

router.post("/addToCustomListONE/:id", async (req, res) => { 

    try{
        await List.findByIdAndUpdate(req.body.listId, {$push: {TMDBids: req.params.id}},);
        res.status(204).json()
    }catch(err){
      console.log(err.message)
    }
});


router.post("/addToCustomListTWO/:id", async (req, res) => { 

    try{
        await List.findByIdAndUpdate(req.body.listId, {$push: {TMDBids: req.params.id}},);
        res.status(204).json()
    }catch(err){
      console.log(err.message)
    }
});

router.post("/addToCustomListTHREE/:id", async (req, res) => { 

    try{
        await List.findByIdAndUpdate(req.body.listId, {$push: {TMDBids: req.params.id}},);
        res.status(204).json()
    }catch(err){
      console.log(err.message)
    }
});


//---------------- GET ONE LIST ---------------- GET ONE LIST ---------------- GET ONE LIST ---------------- GET ONE LIST 
router.get("/getListONE/:listId", async (req, res) => {

  // const listId = req.body.listId
console.log("req.params.listId")
console.log(req.params.listId)

    // try{
    //   const userListONE = await  List.findById(req.params.listId).populate
    //   res.status(200).json(res)
    // }catch(err){
    //   console.log(err.message)
    // }

    const id = req.params.listId

    List
      .findById(id)
      .then(response => res.json(response))
      .catch(err => res.status(500).json(err))
  })

//---------------- GET ONE IDS LIST ------------- GET ONE IDS LIST ------------ GET ONE IDS LIST ------------ GET ONE IDS LIST 
router.get("/getIdsListONE/:listId", async (req, res) => {

  // const listId = req.body.listId
console.log("req.params.listId")
console.log(req.params.listId)

    try{
      const userListONE = await  List.findById(req.params.listId).populate("TMDBids")
      res.status(200).json({TMDBids: userListONE.TMDBids})
    }catch(err){
      console.log(err.message)
    }

    // const id = req.params.listId

    // List
    //   .findById(id).populate("TMDBids")
    //   .then(response => res.json(response))
    //   .catch(err => res.status(500).json(err))
  })

module.exports = router
