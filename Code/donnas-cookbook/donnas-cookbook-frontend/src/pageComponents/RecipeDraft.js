import {useEffect, useState} from 'react'
import IngredientAdder from './IngredientAdder'
import InstructionAdder from './InstructionAdder'


function RecipeDraft ({setNewIng, setIngList, recipeTitle, ingList, newIng, instructionList, setInstructionList, instructionLis, setInstructionLis}) {


    //move all the deconstructed values from recipe maker down to recipe draft, they dont need to be up there



    const [ingsList, setIngsList] = useState([])



    const [newInstruction, setNewInstruction] = useState("")


    //This function is an onClick function for the remove-instruction-buttom element adjacent to the instruction li. It uses the jsx att
    //ribute of name to set the instructionList state variable to a filtered version of itself less any that match the name attribtute from the button
    function removeInstruction(e) {
        setInstructionList(instructionList.filter(instruction => instruction !== e.target.getAttribute('name')))
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
    ,[instructionList]
    )

    useEffect (() => {
        setIngsList(ingList.map(ing => {
            return (
                <li key={ing.name}>{ing.name}</li>
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