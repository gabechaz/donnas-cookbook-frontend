
import { useEffect, useState } from "react"
import { Switch, Route, useHistory } from "react-router-dom"
// import {useState} from 'react'
import BookBrowser from './pageComponents/BookBrowser'
import RecipeBrowser from './pageComponents/RecipeBrowser'
import Profile from './pageComponents/Profile'
import Recipe from './pageComponents/Recipe'
import RecipeMaker from  './pageComponents/RecipeMaker'
import Signup from './pageComponents/Signup'
import Login from './pageComponents/Login'
import NavBox from './pageComponents/NavBox'





function App() {


const history = useHistory()

const API = 'http://localhost:3000'

function logout () {
  localStorage.removeItem("token")
  fetch(`${API}/users/logout`, {
    method: "POST"
  })
  .then(user => {
    setCurrentUser(null)
  })
  history.push('/login')

}


// Live Authentication
useEffect(() => {
  const token = localStorage.getItem("token") 
  fetch(`${API}/users/me`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(userData => { 
      if (userData)
      {
        setCurrentUser(userData)
       }})
}, [API])

    const [currentUser, setCurrentUser] = useState(null)

  return (

    <div className="App">
          <h1>Donna's Cookbook!</h1>
          {currentUser ? <h1>Logged in{currentUser.id}</h1> : <h1>Not logged in</h1>}
          <br />
          <NavBox logout={logout} currentUser={currentUser} />
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
