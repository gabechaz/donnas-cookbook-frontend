import {useHistory} from 'react-router-dom'
import '../css-files/UserDiv.css'

function UserDiv ({user}) {

    // console.log(user)
    let history = useHistory()

    function goToUserPage () {
        console.log(user.id)
        history.push(`/users/${user.id}`)
    }

    // console.log(user.recipeCount, 'recipe count')

    return (
        <div className = 'user-div' onClick={goToUserPage}>
            {user.username} {user.recipeCount} Recipes {user.id}
        </div>
    )
}

export default UserDiv