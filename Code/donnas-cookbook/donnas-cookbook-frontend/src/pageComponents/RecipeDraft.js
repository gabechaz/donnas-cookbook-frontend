import {useEffect, useState} from 'react'


function RecipeDraft ({recipeTitle, ingList, newIng}) {

    const [ingsList, setIngsList] = useState([])


   
    

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
        
            <ul>
            {ingsList}
            </ul>
            <li>{newIng}</li>
        </div>
            
        

    )
}

export default RecipeDraft