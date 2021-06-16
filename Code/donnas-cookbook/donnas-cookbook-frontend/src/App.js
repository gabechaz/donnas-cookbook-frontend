
import { Switch, Route } from "react-router-dom"
// import {useState} from 'react'
import BookBrowser from './pageComponents/BookBrowser'
import RecipeBrowser from './pageComponents/RecipeBrowser'
import Profile from './pageComponents/Profile'
import Recipe from './pageComponents/Recipe'
import RecipeMaker from  './pageComponents/RecipeMaker'


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


      <Route path="/books" exact>
          <BookBrowser />
      </Route>
   
      <Route path="/users/:id" exact>
        <Profile  />
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
