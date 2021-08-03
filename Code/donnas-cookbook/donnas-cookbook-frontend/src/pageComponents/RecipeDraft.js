import {useEffect, useState} from 'react'
import IngredientAdder from './IngredientAdder'
import InstructionAdder from './InstructionAdder'


function RecipeDraft ({setNewIng, setIngList, recipeTitle, ingList, newIng, instructionList, setInstructionList, instructionLis, setInstructionLis}) {

    //fix the ingredient state variable names across all components
    //move all the deconstructed values from recipe maker down to recipe draft, they dont need to be up there



    const [ingsList, setIngsList] = useState([])



    const [newInstruction, setNewInstruction] = useState("")
    
    function removeInstruction(e) {
        setInstructionList(instructionList.filter(instruction => instruction !== e.target.getAttribute('name')))
    }

    function removeIngredient(e) {
        setIngList(ingList.filter(ingredient => ingredient.name !== e.target.getAttribute('name') ))
    }
 
    useEffect(() => {
        console.log(instructionList)
        setInstructionLis(instructionList.map(instruction => {
            return (
                <span>
                    <span key={instruction[1]}>{instruction}</span>
                    <button name={instruction} onClick={removeInstruction}>Remove Instruction</button>
                <br />
                </span>
                 )
        }))
       
    }
    ,[instructionList]
    )

    useEffect (() => {
        setIngsList(ingList.map(ing => {
            return (
                <span>
                <span key={ing.name}>{ing.name}</span>
                <button  name={ing.name} onClick={removeIngredient}>Remove Ingredient</button>
                <br />
                </span>
            )
        }))
    }
        , [ingList]
    )



    return (
        <div>
        <h3>{recipeTitle}</h3>
            <h4>Ingredients</h4>
          
            <ul>
            <IngredientAdder setNewIng={setNewIng} newIng={newIng} ingList={ingList} setIngList={setIngList} /> 
            {ingsList}
            <li>{newIng}</li>
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