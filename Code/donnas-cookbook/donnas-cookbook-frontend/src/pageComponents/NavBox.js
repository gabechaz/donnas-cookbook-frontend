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
           
                <span onClick={handleRecipeMakerClick}>Recipe Maker</span>
                <span onClick={handleBooksClick}>Recipes</span>
                <span onClick={handleProfileClick}>Profile</span>
                <br />
                <span onClick={logout}>Log Out</span> 
                
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