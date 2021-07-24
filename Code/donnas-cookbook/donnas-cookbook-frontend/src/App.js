
import { Switch, Route } from "react-router-dom"
// import {useState} from 'react'
import BookBrowser from './pageComponents/BookBrowser'
import RecipeBrowser from './pageComponents/RecipeBrowser'
import Profile from './pageComponents/Profile'
import Recipe from './pageComponents/Recipe'
import RecipeMaker from  './pageComponents/RecipeMaker'
import Signup from './pageComponents/Signup'



// Next work on adding ingredients!!!!


function App() {

const API = 'http://localhost:3000/'

    const user = {
      id: 1,
      name: "Gabe"
    }

  return (

    <div className="App">
          <h1>Donna's Cookbook!</h1>

    <Switch>

      <Route path='/signup'>
        <Signup API={API} />
      </Route>


      <Route path="/books" exact>
          <BookBrowser API={API} />
      </Route>
   
      <Route path="/users/:id" exact>
        <Profile API={API}  />
      </Route>

      <Route path="/recipes/:id" exact>
        <Recipe />  
      </Route>

      <Route path="/recipes/:id">
        <RecipeBrowser  />
      </Route>

      <Route path="/recipe-maker">
        <RecipeMaker API={API} />
      </Route>

      </Switch>

      </div>

  );
}

export default App;
