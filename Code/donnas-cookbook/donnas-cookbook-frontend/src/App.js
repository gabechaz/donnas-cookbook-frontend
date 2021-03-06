
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
import './css-files/App.css'





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
  console.log(40, 'Im trying')
  const token = localStorage.getItem("token") 
  console.log(42, token)
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
        console.log('51', 'authenticated')
        setCurrentUser(userData)
       }
      else {
        console.log(55, 'not authenticated')
      }})
}, [API])

    const [currentUser, setCurrentUser] = useState(null)
// console.log(currentUser.id)
  return (

    <div className="App">
          <h1>Donna's Cookbook!</h1>
          {currentUser ? <h1>Hi {currentUser.username}!</h1> : <h1>Not logged in</h1>}
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
