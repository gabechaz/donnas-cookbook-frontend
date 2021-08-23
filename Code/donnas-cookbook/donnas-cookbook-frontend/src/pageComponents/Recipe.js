import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import InstructionAdder from './InstructionAdder'

function Recipe ({API}) {

    const {id} = useParams()

    const [recipe, setRecipe] = useState(null)

    const [ingredients, setIngredients] = useState([])

    const [ingredientLis, setIngredientLis] = useState(null)

    const [instructions, setInstructions] = useState([])

    const [instructionLis, setInstructionsLis] = useState(null)

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
        if (recipe) {
            setInstructions(recipe.instructions)
        }
    }
    ,[recipe]
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

    useEffect(() => {
        setInstructionsLis(instructions.map(instruction => {
            return (
                <li key = {instruction.id}>{instruction.instruction}</li>
            )
        }))
    }

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
                    <br />

                    <h3>Instructions</h3>
                    <ul>
                        {instructionLis}
                    </ul>
                </div>
                : 
                <h1>Loading</h1>
            }
        
        </div>
    )
}

export default Recipe