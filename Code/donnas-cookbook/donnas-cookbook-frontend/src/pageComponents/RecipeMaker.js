import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import IngredientAdder from './IngredientAdder.js'
import RecipeDraft from './RecipeDraft.js'
import '../css-files/RecipeMaker.css'

function RecipeMaker ({API, currentUser}) {

    // console.log(currentUser.id, 'maker id')

const history = useHistory()

//This state variable holds the active new ingredient until it can be added to the recipe draft component
const [newIng, setNewIng] = useState("")

const [instructionList, setInstructionList] = useState([])

const [instructionLis, setInstructionLis] = useState(null)

//This is a state variable that keeps track of all the ingredients as they are added to the recipe
//This variable should be an array. T
const [ingList, setIngList] = useState([])

const [newIngInput, setNewIngInput] = useState(false)

const [recipeTitle, setRecipeTitle] = useState("Enter Title Here") 

const [note, setNote] = useState("")


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

function handleNote(e) {
    setNote(e.target.value)
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

function addInstructions(recipeId) {    for (let i = 0; i < instructionList.length; i++) {

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
    for (let i = 0; i < ingList.length; i ++) {
            setTimeout(addIngredient(recipeId, ingList[i].name), 1)
    }
}

function addRecipe () {
const recipeObject ={
    user_id: currentUser.id,
    name: recipeTitle,
    note: note
}
fetch(`${API}/recipes`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(recipeObject)
})
.then(res => res.json())
.then(recipe => {
    console.log('recipe log', recipe)
    console.log(currentUser.id, "id")
    addInstructions(recipe.id)
    addIngredients(recipe.id)
    history.push(`/recipe/${recipe.id}`)    
})
}



    return (
        <>
        <div className = 'recipe-maker-container'>
            <h1 className = 'recipe-maker-text'>Recipe Maker</h1>
            <br />
            <form className = 'ingredients-form'>    
              
                <input className = 'recipe-title' type='text' value = {recipeTitle} onChange={handleRecipeTitle} />  

            </form>
            
            <RecipeDraft instructionList={instructionList} setInstructionList={setInstructionList} instructionLis={instructionLis} setInstructionLis={setInstructionLis} setNewIng={setNewIng} setIngList={setIngList} newIng={newIng} ingList={ingList} recipeTitle={recipeTitle} />
            
            <h3 className = 'recipe-maker-text'>Note</h3>
            <br/>
            <textarea value={note} onChange={handleNote} rows='5' cols = '20' type='text' />
            <br/>
            <button onClick={addRecipe}>Submit Recipe</button>
        </div>
        </>
    )
}

export default RecipeMaker