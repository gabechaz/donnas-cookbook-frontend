import {useEffect, useState} from 'react'
import IngredientAdder from './IngredientAdder'
import InstructionAdder from './InstructionAdder'


function RecipeDraft ({setNewIngredient, setIngredientList, recipeTitle, ingredientList, newIngredient, instructionList, setInstructionList, instructionLis, setInstructionLis}) {


    //change the inredientList and ingslist state variable names to look more like instructionList and instruction Lis for consisencty and readability 
    //move all the deconstructed values from recipe maker down to recipe draft, they dont need to be up there



    const [ingsList, setIngsList] = useState([])



    const [newInstruction, setNewInstruction] = useState("")


    //This function is an onClick function for the remove-instruction-buttom element adjacent to the instruction li. It uses the jsx att
    //ribute of name to set the instructionList state variable to a filtered version of itself less any that match the name attribtute from the button
    function removeInstruction(e) {
        setInstructionList(instructionList.filter(instruction => instruction !== e.target.getAttribute('name')))
    }

    function removeIngredient(e) {
        setIngredientList()
    }

    useEffect(() => {
        // console.log(instructionList)
       setInstructionLis(instructionList.map(instruction => {
            return (
                <span key={instruction}>
                <span>{instruction}</span>
                <button name={instruction} onClick={removeInstruction}>Remove Instruction</button>
                <br />
                </span> )
        }))
       
    }
    ,[instructionList, removeInstruction, setInstructionLis]
    )

    useEffect (() => {
        setIngredientList(ingredientList.map(ing => {
            return (
                <span>
                <span key={ing.name}>{ing.name}</span>
                {/* <button onClick={remove}>Remove Ingredient</button> */}
                <br />
                </span>
            )
        }))
    }
        , [ingredientList]
    )



    return (
        <div>
        <h3>{recipeTitle}</h3>
            <h4>Ingredients</h4>
          
            <ul>
            <IngredientAdder setNewIngredient={setNewIngredient} newIngredient={newIngredient} ingredientList={ingredientList} setIngredientList={setIngredientList} /> 
            {ingsList}
            <li>{newIngredient}</li>
            </ul>
      
            <h4>Instructions</h4>
            <InstructionAdder instructionList={instructionList} setInstructionList={setInstructionList} newInstruction={newInstruction} setNewInstruction={setNewInstruction} />
            <ul>
          
                {instructionLis}
                <li>{newInstruction}</li>
            </ul>


        </div>
            
        

    )
}

export default RecipeDraft