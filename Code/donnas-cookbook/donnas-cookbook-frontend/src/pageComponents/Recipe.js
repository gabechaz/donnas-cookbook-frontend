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
            console.log(recipe)
            // handleIngredientLis(recipe.ingredients)
            // handleInstructionLis(recipe.instructions)
        })
    }
    , [API]
    )

    function love() {
        fetch(`API`)
    }

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
        setRecipe(r)
        handleInstructionLis()
        handleIngredientLis()
        console.log(recipe)
    }






    return (
        <div className = 'outer-recipe-div'>
            {recipe ? 
                <div>
                    <h1 className = 'recipe-title'>{recipe.name}</h1>
                    <h3 className = 'ingredients-subheading'>Ingredients</h3>
                    <ul className='ingredients-ul'>
                        {ingredientLis}
                    </ul>
                    <br />

                    <h3 className = 'instructions-subheading'>Instructions</h3>
                    <ul className='instructions-li'>
                        {instructionLis}
                    </ul>

                    <h3 className='note-heading'>Note</h3>
                    <p className='note'>{recipe.note}</p>
                    <button onClick={love}>Love</button>
                </div>
                : 
                <h1 className = 'loading-heading'>Loading</h1>
            }
        
        </div>
    )

    handleIngredientLis()
    handleInstructionLis()
}

export default Recipe