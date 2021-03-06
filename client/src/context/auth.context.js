import React, { useState, useEffect } from "react";
import { verify } from './../services/auth.service'
import { useNavigate } from 'react-router-dom'

// const API_URL = "http://localhost:5005";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const navigate = useNavigate()


  const updateUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
  }

  useEffect(() => verifyStoredToken(), []) //please, check if there is any existing token available

  const verifyStoredToken = () => {                           //  <==  ADD  
    // Get the stored token from the localStorage
    const storedToken = localStorage.getItem('authToken');
    
    // If the token exists in the localStorage
    if (storedToken) {
      // We must send the JWT token in the request's "Authorization" Headers
      verify(storedToken)
        .then((response) => {
          // If the server verifies that JWT token is valid  
          const user = response.data;
          updateUser(user);
          setIsLoggedIn(true);
          setIsLoading(false);
        })
        .catch((error) => {
          // If the server sends an error response (invalid token) 
          setIsLoggedIn(false);
          setUser(null);
          setIsLoading(false);
        });      
    } else {
      // If the token is not available
      setIsLoading(false);
    }   
  }

  const logInUser = token => {
    localStorage.setItem('authToken', token)
    verifyStoredToken()
  }

  const logOutUser = () => {
    // Upon logout, remove the token from the localStorage
    localStorage.removeItem("authToken");
    
    // Update the state variables
    setIsLoggedIn(false);
    updateUser(null);
    navigate('/')
  }  



  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user, logInUser, logOutUser, updateUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthProviderWrapper, AuthContext };
