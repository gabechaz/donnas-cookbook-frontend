
import { Switch, Route } from "react-router-dom"
import BookBrowser from './pageComponents/BookBrowser'
import RecipeBrowser from './pageComponents/RecipeBrowser'
import Profile from './pageComponents/Profile'
import Recipe from './pageComponents/Recipe'


function App() {
  return (
    <div className="App">
      <Switch>

      <Route path = '/books' exact>
          <BookBrowser />
      </Route>
   
      <Route path = '/users/:id' exact>
        <Profile  />
      </Route>

      <Route path = '/recipes/:id' exact>
        <Recipe />  
      </Route>

      <Route path = '/recipes/:id'>
        <RecipeBrowser  />
      </Route>

      </Switch>
    </div>
  );
}

export default App;
