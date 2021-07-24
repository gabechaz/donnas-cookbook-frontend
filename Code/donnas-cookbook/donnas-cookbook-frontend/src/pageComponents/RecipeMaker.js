import {useState} from 'react'
import IngredientAdder from './IngredientAdder.js'
import RecipeDraft from './RecipeDraft.js'

function RecipeMaker ({API}) {

//This state variable holds the active new ingredient until it can be added to the recipe draft component
const [newIng, setNewIng] = useState("")

//This is a state variable that keeps track of all the ingredients as they are added to the recipe
//This variable should be an array. T
const [ingList, setIngList] = useState([])

const [newIngInput, setNewIngInput] = useState(false)

const [recipeTitle, setRecipeTitle] = useState("Recipe Title") 

// This page should live update onto what looks like a page in a recipe book


//This function toggles whether the input for a new ingredient is visible by using the bang
//operator on a boolean state variable
function handleNewIngButton (e) {
e.preventDefault()
setNewIngInput(!newIngInput)
}


//This function is an event handler to change the state variable concering the title of the recipe
function handleRecipeTitle (e) {
    setRecipeTitle(e.target.value)
}

function addIngredient(recipeId, ingredientName) {
    console.log(ingredientName)
    const ingredientObject = {
        name: ingredientName,
        recipe_id: recipeId
    }
    fetch(`${API}/ingredients`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(ingredientObject)
    })
    .then(res => res.json())
    .then(ingredient => console.log("ingredient log",ingredient))
}

function addIngredients (recipeId) {
    ingList.map(ingredient => addIngredient(recipeId, ingredient.name))
}

function addRecipe () {
const recipeObject ={
    user_id: 1,
    name: recipeTitle
}
fetch(`${API}/recipes`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(recipeObject)
})
.then(res => res.json())
.then(recipe => addIngredients(recipe.id))


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
                {newIngInput ? <IngredientAdder setNewIng={setNewIng} newIng={newIng} ingList={ingList} setIngList={setIngList} /> : null}

  
            </form>

            <RecipeDraft newIng={newIng} ingList={ingList} recipeTitle={recipeTitle} />
            <button onClick={addRecipe}>Submit Recipe</button>
        </div>
    )
}

export default RecipeMaker