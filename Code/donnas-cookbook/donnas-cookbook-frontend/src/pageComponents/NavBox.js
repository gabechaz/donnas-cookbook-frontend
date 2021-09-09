import {useHistory} from 'react-router-dom'


function NavBox ({currentUser}) {

    function handleLoginClick () {
        history.push(`/login`)
    }

const history = useHistory()
    return (
        <div>
            <h3>Navbox</h3>
            {currentUser ? <p>Log Out</p> : <p onClick={handleLoginClick}>Log In</p> 
            }
        </div>
    )
}

export default NavBox