import {useEffect, useState} from 'react'
import IngredientAdder from './IngredientAdder'
import InstructionAdder from './InstructionAdder'


function RecipeDraft ({setNewIngredient, setIngredientList, recipeTitle, ingredientList, newIngredient, instructionList, setInstructionList, instructionLis, setInstructionLis}) {


    //change the inredientList and ingslist state variable names to look more like instructionList and instruction Lis for consisencty and readability 
    //move all the deconstructed values from recipe maker down to recipe draft, they dont need to be up there



    const [ingsList, setIngsList] = useState([])



    const [newInstruction, setNewInstruction] = useState("")
    

    function removeIngredient(e) {
        setIngredientList()
    }

    useEffect(() => {
        console.log(instructionList)
  `      setInstructionLis(instructionList.map(instruction => {
            return (
                <li key={instruction[1]}>{instruction}</li> )
        }))`
       
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