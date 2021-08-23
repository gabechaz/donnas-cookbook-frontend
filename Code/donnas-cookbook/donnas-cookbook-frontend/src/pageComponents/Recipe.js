import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

function Recipe ({API}) {

    const {id} = useParams()

    const [recipe, setRecipe] = useState(null)

    const [ingredients, setIngredients] = useState([])

    const [ingredientLis, setIngredientLis] = useState(null)

    useEffect(() => {
        fetch(`${API}/recipes/${id}`)
        .then(res => res.json())
        .then(recipe => setRecipe(recipe))
    }
    , [API]
    )

    useEffect(() => {
        if (recipe) {
            setIngredients(recipe.ingredients)
        }
    }
    , [recipe]
    )

    useEffect(() => {
        setIngredientLis(ingredients.map(ingredient => {
            return (
                <li key={ingredient.id}>{ingredient.name}</li>
            )
        }))
    }
    ,[ingredients]
    )

    

    return (
        <div>
            {recipe ? 
                <div>
                    <h1>{recipe.name}</h1>
                    <h3>Ingredients</h3>
                    <ul>
                    {ingredientLis}
                    </ul>
                </div>
                : 
                <h1>Loading</h1>
            }
        
        </div>
    )
}

export default Recipe