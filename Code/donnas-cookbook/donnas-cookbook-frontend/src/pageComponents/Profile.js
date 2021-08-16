import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import RecipeTile from './RecipeTile'

function Profile ({API}) {

const loadingRecipTile = <RecipeTile recipeName = 'Loading' />

const [recipeTiles, setRecipeTiles] = useState([loadingRecipTile])

const [thisUser, setThisUser] = useState({username:"Loading", nationality: "Loading"})

const [recipes, setRecipes] = useState(["Loading"])

//Gets id from params so profile component can make a fetch request to get user info
const {id} = useParams()

//useEffect call to fetch users info

useEffect(
    () => {
        fetch(`${API}/users/${id}`)
        .then(res => res.json())
        .then(user => setThisUser(user))
    }, []
)



useEffect(() => {
    fetch(`${API}/books/${id}`)
    .then(res => res.json())
    .then(recipes => {
        console.log(recipes)
        setRecipes(recipes)
        setRecipeTiles(recipes.map(recipe => {
            return (
            <RecipeTile recipeName = {recipe} />
            )
        }))
        } )
}, [API]
)

// function handleRecipeTiles(){

// }



    return (
        <div>
            <h1>Profile</h1>
        <h2>{thisUser.username}</h2>
        <div>{recipeTiles}</div>
        </div>
    )
}

export default Profile