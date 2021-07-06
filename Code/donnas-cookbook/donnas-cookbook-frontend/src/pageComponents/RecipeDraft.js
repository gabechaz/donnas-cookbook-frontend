import {useEffect, useState} from 'react'


function RecipeDraft ({recipeTitle, ingList, newIng}) {

    const [ingsList, setIngsList] = []


   
    

    useEffect ( () => {
        const ingsList = ingList.map(ing => {
            return (
                <li>{ing.name}</li>
            )
        })
    }
        , [ingList]
    )



    return (
        <div>
        <h3>{recipeTitle}</h3>
        
            <ul>
            {ingsList}
            </ul>
            <li>{newIng}</li>
        </div>
            
        

    )
}

export default RecipeDraft