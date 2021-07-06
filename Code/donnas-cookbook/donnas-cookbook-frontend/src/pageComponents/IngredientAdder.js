import {useState} from 'react'




// fetch(`${API}/foods`, {
//     method: "POST",
//     headers: {
//         "content-type": "application/json"
//     }, 
//     body: JSON.stringify(newIng)
// })
// .then(res => res.json())
// .then(ing => console.log(ing))


function IngredientAdder ({API, ingList, setIngList, newIng, setNewIng}) {

    console.log(ingList)


    function handleNewIng (e) {
        setNewIng(e.target.value)
    }

    function handleNewIngSubmit (e) {
        e.preventDefault()
        // let list = ingList
        // list.push(<li>newIng</li>)
        // setIngList(list)
        console.log(ingList)
    }


    return (
        <form>
        <label>
        Enter New Ingredient Name
            <input type='text' value={newIng.name} onChange={handleNewIng} />
        </label>
        <button onClick={handleNewIngSubmit}>Submit</button>
        </form>
 
    )
}

export default IngredientAdder