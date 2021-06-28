import {useState} from 'react'
import IngredientAdder from './IngredientAdder.js'
import RecipeDraft from './RecipeDraft.js'

function RecipeMaker ({API}) {


const [newIngInput, setNewIngInput] = useState(false)

const [recipeTitle, setRecipeTitle] = useState("Recipe Title") 

// This page should live update onto what looks like a page in a recipe book


function handleNewIngButton (e) {
e.preventDefault()
setNewIngInput(!newIngInput)
}

function handleRecipeTitle (e) {
    setRecipeTitle(e.target.value)
}

const [ingList, setIngList] = useState([{name: "Put Ingredients Here"}])

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
                {newIngInput ? <IngredientAdder ingList={ingList} setIngList={setIngList} /> : null}
            </form>

            <RecipeDraft ingList={ingList} recipeTitle={recipeTitle} />
        </div>
    )
}

export default RecipeMaker