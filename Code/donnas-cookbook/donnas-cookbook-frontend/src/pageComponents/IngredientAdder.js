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




    function handleNewIng (e) {
        setNewIng(e.target.value)
    }

    function handleNewIngSubmit (e) {
        e.preventDefault()
        setIngList([...ingList, {name: newIng}])
        setNewIng("")
        console.log(ingList)
    }


    return (
        <form>
        <label>
        <br/>
            <input type='text' value={newIng} onChange={handleNewIng} />
        </label>
        <br/><br/>
        <button onClick={handleNewIngSubmit}>Add Ingredient</button>
        </form>
 
    )
}

export default IngredientAdder