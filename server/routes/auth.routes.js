const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

const router = express.Router();
const saltRounds = 10;

const { isAuthenticated } = require('./../middlewares/jwt.middleware')



// POST /auth/signup  - Creates a new user in the database -------------------------------------------------------------------------
router.post('/signup', (req, res) => {
const { username, password, email, myLists, toseeTVList, seenTVList, toseeMovieList, seenMovieList } = req.body;

// Check if email or password or name are provided as empty string 
if (email === '' || password === '' || username === '') {
    res.status(400).json({ message: "Provide email, password and name" });
    return;
}

// Use regex to validate the email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
if (!emailRegex.test(email)) {
    res.status(400).json({ message: 'Provide a valid email address.' });
    return;
}

// Use regex to validate the password format
const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
if (!passwordRegex.test(password)) {
    res.status(400).json({ message: 'Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.' });
    return;
}


// Check the users collection if a user with the same email already exists
User
    .findOne({ username })
    .then((foundUser) => {
    // If the user with the same username already exists, send an error response
        if (foundUser) {
            res.status(400).json({ message: "User already exists." });
            return;
        }

        // If email is unique, proceed to hash the password
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);

        // Create the new user in the database
        // We return a pending promise, which allows us to chain another `then` 
        return User.create({ email, password: hashedPassword, username, myLists, toseeTVList, seenTVList, toseeMovieList, seenMovieList  });
    })
    .then((createdUser) => {
    // Deconstruct the newly created user object to omit the password
    // We should never expose passwords publicly
    const { email, username, _id, myLists, toseeTVList, seenTVList, toseeMovieList, seenMovieList, createdAt  } = createdUser;
    
    // Create a new object that doesn't expose the password
    const user = { email, username, _id, myLists, toseeTVList, seenTVList, toseeMovieList, seenMovieList, createdAt };

    // Send a json response containing the user object
    res.status(201).json({ user: user });
    })
    .catch(err => {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" })
    });
});



// POST  /auth/login - Verifies email and password and returns a JWT --------------------------------------------
router.post('/login', (req, res, next) => {
    const { username, password } = req.body;
  
    // Check if email or password are provided as empty string 
    if (username === '' || password === '') {
      res.status(400).json({ message: "Provide username and password." });
      return;
    }
  
    // Check the users collection if a user with the same username exists
    User
        .findOne({ username })
        .then((foundUser) => {
      
            if (!foundUser) {
            // If the user is not found, send an error response
            res.status(401).json({ message: "User not found." })
            return;
            }
    
            // Compare the provided password with the one saved in the database
            const passwordCorrect = bcrypt.compareSync(password, foundUser.password);
    
            if (passwordCorrect) {
            // Deconstruct the user object to omit the password
            const { _id, username, email, myLists, toseeTVList, seenTVList, toseeMovieList, seenMovieList, createdAt  } = foundUser;
            
            // Create an object that will be set as the token payload. This is the data that will be sent to the front.
            const payload = { _id, username, email, myLists, toseeTVList, seenTVList, toseeMovieList, seenMovieList, createdAt  };
    
            // Create and sign the token
            const authToken = jwt.sign( 
                payload,
                process.env.TOKEN_SECRET,
                { algorithm: 'HS256', expiresIn: "6h" }
            );
    
            // Send the token as the response
            res.status(200).json({ authToken: authToken });
            }
            else {
            res.status(401).json({ message: "Incorrect password" });
            }
    
        })
      .catch(err => res.status(500).json({ message: "Internal Server Error" }));
});


// GET  /auth/verify  -  Used to verify JWT stored on the client
router.get('/verify', isAuthenticated, (req, res, next) => {       // <== CREATE NEW ROUTE ----------------------------------
 
    // If JWT token is valid the payload gets decoded by the
    // isAuthenticated middleware and made available on `req.payload`
    console.log(`req.payload`, req.payload);
   
    // Send back the object with user data
    // previously set as the token payload
    res.status(200).json(req.payload);
  });




  //aix?? va a http://localhost:5005/api/auth/myprofile/:userId  // <== GOES TO MY PROFILE -----------------
router.get("/myprofile/:userId", (req, res) => {
    const id = req.params.userId

    // try{
    //     await User.findById(id)
    //     res.status(200).json(res)
    // }catch(err){
    //     console.log(err.message)
    // }
    User
      .findById(id)
      .then(response => res.json(response))
      .catch(err => res.status(500).json(err))
  })

module.exports = router;
