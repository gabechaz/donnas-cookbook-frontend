import {useHistory} from 'react-router-dom'
import '../css-files/NavBox.css'


function NavBox ({currentUser, logout}) {

    function handleLoginClick () {
        history.push(`/login`)
    }

    function handleSignupClick() {
        history.push('/signup')
    }

   function handleRecipeMakerClick() {
        history.push('/recipe-maker')
    }

    function handleBooksClick() {
        history.push('/books')
    }

    function handleProfileClick() {
        history.push(`/users/${currentUser.id}`)
    }



const history = useHistory()
    return (
        <div>
            <h3>Navbox</h3>
            {currentUser ? 
                <div>

                <p onClick={logout}>Log Out</p> 
                <p onClick={handleRecipeMakerClick}>Recipe Maker</p>
                <p onClick={handleBooksClick}>Recipes</p>

                <div class="nav">
  <input type="checkbox" id="nav-check"></input>
  <div class="nav-header">
    <div class="nav-title">
      Donna's Cookbook
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <a onClick={logout}>Log Out</a>
    <a onClick={handleRecipeMakerClick}>Recipe Maker</a>
    <a onClick={handleBooksClick}>Recipes</a>
    <a onClick={handleProfileClick}>Profile</a>
  </div>

</div>         
                
                </div>
                
                
                :<div>
                    <p onClick={handleLoginClick}>Log In</p> 
                    <p onClick={handleSignupClick}>Sign Up</p>
                </div> 
            }
      
        </div>
    )
}

export default NavBox