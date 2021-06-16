import {useState} from 'react'

function RecipeMaker ({API}) {

const [recipeTitle, setRecipeTitle] = useState("")

const [newIngInput, setNewIngInput] = useState(false)


// This page should live update onto what looks like a page in a recipe book


function handleNewIngButton (e) {
e.preventDefault()
setNewIngInput(true)
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
                <button>
                    New Ingredient
                </button>
            </form>
        </div>
    )
}

export default RecipeMaker