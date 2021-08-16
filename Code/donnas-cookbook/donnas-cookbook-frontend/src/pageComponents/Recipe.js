import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

function Recipe ({API}) {

    const {id} = useParams()

    const [recipe, setRecipe] = useState(null)

    useEffect(() => {
        fetch(`${API}/recipes/${id}`)
        .then(res => res.json())
        .then(recipe => console.log(recipe))
    }
    , [API]
    )



    return (
        <div>
            Recipe
        </div>
    )
}

export default Recipe