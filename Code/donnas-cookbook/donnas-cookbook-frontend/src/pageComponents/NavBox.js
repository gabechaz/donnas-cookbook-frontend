import {useHistory} from 'react-router-dom'


function NavBox ({currentUser, logout}) {

    function handleLoginClick () {
        history.push(`/login`)
    }



const history = useHistory()
    return (
        <div>
            <h3>Navbox</h3>
            {currentUser ? <p onClick={logout}>Log Out</p> : <p onClick={handleLoginClick}>Log In</p> 
            }
        </div>
    )
}

export default NavBox