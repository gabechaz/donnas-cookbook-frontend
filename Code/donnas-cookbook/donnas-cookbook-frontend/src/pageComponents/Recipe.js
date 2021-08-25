import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import InstructionAdder from './InstructionAdder'

function Recipe ({API}) {



    const {id} = useParams()

    const [recipe, setRecipe] = useState({ingredients:[{name:'loading'}], instructions:[]})

    // const [ingredients, setIngredients] = useState([])

    const [ingredientLis, setIngredientLis] = useState(null)

    // const [instructions, setInstructions] = useState([])

    const [instructionLis, setInstructionsLis] = useState(null)

    useEffect(() => {
        fetch(`${API}/recipes/${id}`)
        .then(res => res.json())
        .then(recipe => {
            setRecipe(recipe)
            handleIngredientLis(recipe.ingredients)
            handleInstructionLis(recipe.instructions)
        })
    }
    , [API]
    )


    function handleIngredientLis(ingredients) {
        console.log('ingredients handled')
        setIngredientLis(ingredients.map(ingredient => {
            return (
                <li key={ingredient.id}>{ingredient.name}</li>
            )
        }))

    }

    function handleInstructionLis(instructions) {
        console.log('handled')

        setInstructionsLis(instructions.map(instruction => {
            return (
                <li key = {instruction.id}>{instruction.instruction}</li>
            )
        }))

    }

    function handleRecipe(r) {
        console.log(recipe)
        setRecipe(r)
        handleInstructionLis()
        handleIngredientLis()
        console.log(recipe)
    }






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

    handleIngredientLis()
    handleInstructionLis()
}

export default Recipe