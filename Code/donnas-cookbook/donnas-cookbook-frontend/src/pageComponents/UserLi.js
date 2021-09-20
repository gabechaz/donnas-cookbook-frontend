import {useHistory} from 'react-router-dom'

function UserLi ({user}) {

    console.log(user)
    let history = useHistory()

    function goToUserPage () {
        console.log(user.id)
        history.push(`/users/${user.id}`)
    }


    return (
        <li onClick={goToUserPage}>
            {user.username} {user.recipeCount} Recipes
        </li>
    )
}

export default UserLi