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



const history = useHistory()
    return (
        <div>
            <h3>Navbox</h3>
            {currentUser ? 
                <div>
                <p onClick={logout}>Log Out</p> 
                <p onClick={handleRecipeMakerClick}>Recipe Maker</p>
                <p onClick={handleBooksClick}>Recipes</p>
                
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