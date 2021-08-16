import {useHistory} from 'react-router-dom'

function RecipeTile ({recipeName, id}) {
    
    const history = useHistory()

    function handleClick(){
        history.push(`/recipe/${id}`)
    }

    return (
        <div>
        <h3 onClick = {handleClick}>{recipeName}</h3>
        </div>
    )
}

export default RecipeTile