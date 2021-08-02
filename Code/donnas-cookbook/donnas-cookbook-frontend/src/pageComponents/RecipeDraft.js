import {useEffect, useState} from 'react'
import IngredientAdder from './IngredientAdder'
import InstructionAdder from './InstructionAdder'


function RecipeDraft ({setNewIng, setIngList, recipeTitle, ingList, newIng}) {


    //move all the deconstructed values from recipe maker down to recipe draft, they dont need to be up there



    const [ingsList, setIngsList] = useState([])

    const [instructionList, setInstructionList] = useState([])

    const [newInstruction, setNewInstruction] = useState("")

    const [instructionLis, setInstructionLis] = useState(null)

   
    

    useEffect(() => {
        console.log(instructionList)
        setInstructionLis(instructionList.map(instruction => {
            return (
                <li key={instruction[1]}>{instruction}</li> )
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