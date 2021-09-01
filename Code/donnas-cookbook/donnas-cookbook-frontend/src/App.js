
import { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom"
// import {useState} from 'react'
import BookBrowser from './pageComponents/BookBrowser'
import RecipeBrowser from './pageComponents/RecipeBrowser'
import Profile from './pageComponents/Profile'
import Recipe from './pageComponents/Recipe'
import RecipeMaker from  './pageComponents/RecipeMaker'
import Signup from './pageComponents/Signup'
import Login from './pageComponents/Login'





function App() {

const API = 'http://localhost:3000/'

useEffect(() => {
  const token = localStorage.getItem("token") 
  fetch(`${API}/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((response) => response.json())
    .then((userData) => { 
      if (userData?.id)
      {setCurrentUser(userData)}})
}, [API])

    const [currentUser, setCurrentUser] = useState(null)

  return (

    <div className="App">
          <h1>Donna's Cookbook!</h1>
          {currentUser ? <h1>Logged in</h1> : <h1>Not logged in</h1>}
    <Switch>

      <Route path='/signup'>
        <Signup API={API} currentUser={currentUser} setCurrentUser={setCurrentUser} />
      </Route>

      <Route path='/login'>
          <Login API={API} setCurrentUser={setCurrentUser} />
      </Route>


      <Route path="/books" exact>
          <BookBrowser API={API} />
      </Route>
   
      <Route path="/users/:id" exact>
        <Profile API={API}  />
      </Route>

      <Route path="/recipe/:id" exact>
        <Recipe API={API} />  
      </Route>

      <Route path="/recipes/:id">
        <RecipeBrowser  />
      </Route>

      <Route path="/recipe-maker">
        <RecipeMaker currentUser={currentUser} API={API} />
      </Route>

      </Switch>

      </div>

  );
}

export default App;
