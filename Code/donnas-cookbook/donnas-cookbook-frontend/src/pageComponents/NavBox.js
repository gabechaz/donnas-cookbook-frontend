import {useHistory} from 'react-router-dom'


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
    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
    <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
    <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a>
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