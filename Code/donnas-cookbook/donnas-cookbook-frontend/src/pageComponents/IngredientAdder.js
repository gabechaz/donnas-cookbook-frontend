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


function IngredientAdder ({API, ingList, setIngList}) {

    console.log(ingList)

    const [newIng, setNewIng] = useState("")

    function handleNewIng (e) {
        setNewIng({name: e.target.value})
    }

    function handleNewIngSubmit (e) {
        e.preventDefault()
        let newIngList = ingList
        console.log(newIngList)
        newIngList.push(newIng)
        setIngList(newIngList)
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