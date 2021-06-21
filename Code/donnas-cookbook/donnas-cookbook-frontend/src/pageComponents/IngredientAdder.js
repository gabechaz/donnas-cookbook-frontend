import {useState} from 'react'




function IngredientAdder ({API}) {

    const [newIng, setNewIng] = useState("")

    function handleNewIng (e) {
        setNewIng({name: e.target.value})
    }

    function handleNewIngSubmit (e) {
        e.preventDefault()
        fetch(`${API}/foods`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            }, 
            body: JSON.stringify(newIng)
        })
        .then(res => res.json())
        .then(ing => console.log(ing))
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