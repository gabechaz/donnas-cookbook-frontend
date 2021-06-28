function RecipeDraft ({recipeTitle, ingList}) {

    const ingsList = ingList.map(ing => {
        return (
            <li>{ing.name}</li>
        )
    })


    return (
        <div>
        <h3>{recipeTitle}</h3>
        
            <ul>
            {ingsList}
            </ul>
        </div>
            
        

    )
}

export default RecipeDraft