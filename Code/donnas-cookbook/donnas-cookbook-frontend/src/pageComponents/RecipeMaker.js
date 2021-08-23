import {useState} from 'react'
import IngredientAdder from './IngredientAdder.js'
import RecipeDraft from './RecipeDraft.js'

function RecipeMaker ({API}) {

//This state variable holds the active new ingredient until it can be added to the recipe draft component
const [newIng, setNewIng] = useState("")

const [instructionList, setInstructionList] = useState([])

const [instructionLis, setInstructionLis] = useState(null)

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

function addInstruction(recipeId, instruction, next) {
    console.log('adding instruction')
    const instructionObject = {
    recipe_id: recipeId,
    instruction: instruction,
    next: next
    }
    fetch(`${API}/instructions`, {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(instructionObject)
    })
    .then(res => res.json())
    .then(instruction => console.log('instruction log',instruction))
}

function addInstructions(recipeId) {
console.log(instructionList.length)
    for (let i = 0; i < instructionList.length; i++) {
        addInstruction(recipeId, instructionList[i],i)
    }


}

function addIngredient(recipeId, ingredientName) {
    console.log(ingredientName)
    const ingredientObject = {
        name: ingredientName,
        recipe_id: recipeId,
    
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
  
    // ingList.map(ingredient => addIngredient(recipeId, ingredient.name))
    for (let i = 0; i < ingList.length; i ++) {
            setTimeout(addIngredient(recipeId, ingList[i].name), 1)
    }
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
.then(recipe => {
    addInstructions(recipe.id)
    addIngredients(recipe.id)})


}



    return (
        <div>
            <button onClick={addIngredients}button>test</button>
            Recipe Maker
            <br />
            <form>
                <label>
                    Recipe Title:
                    <input type='text' value = {recipeTitle} onChange={handleRecipeTitle} />
                </label>
                
                <br />
      

  
            </form>

            <RecipeDraft instructionList={instructionList} setInstructionList={setInstructionList} instructionLis={instructionLis} setInstructionLis={setInstructionLis} setNewIng={setNewIng} setIngList={setIngList} newIng={newIng} ingList={ingList} recipeTitle={recipeTitle} />
            <button onClick={addRecipe}>Submit Recipe</button>
        </div>
    )
}

export default RecipeMaker