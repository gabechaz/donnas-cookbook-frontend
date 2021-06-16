import {useState} from 'react'
import IngredientAdder from './IngredientAdder.js'
import RecipeDraft from './RecipeDraft.js'

function RecipeMaker ({API}) {

const [recipeTitle, setRecipeTitle] = useState("")

const [newIngInput, setNewIngInput] = useState(false)

const recipe 

// This page should live update onto what looks like a page in a recipe book


function handleNewIngButton (e) {
e.preventDefault()
setNewIngInput(!newIngInput)
}

function handleRecipeTitle (e) {
    setRecipeTitle(e.target.value)
}

    return (
        <div>
            Recipe Maker
            <br />
            <form>
                <label>
                    Recipe Title:
                    <input type='text' value = {recipeTitle} onChange={handleRecipeTitle} />
                </label>
                <br />
                <button onClick = {handleNewIngButton}>
                    {!newIngInput ? 'New Ingredient' : 'Hide Form' }
                </button>
                <br />
                {newIngInput ? <IngredientAdder /> : null}
            </form>

            <RecipeDraft />
        </div>
    )
}

export default RecipeMaker