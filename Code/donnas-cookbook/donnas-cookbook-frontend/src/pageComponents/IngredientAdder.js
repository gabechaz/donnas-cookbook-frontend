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
{/* <<<<<<< HEAD */}
        <input value={newIng} onChange={handleNewIng}/>
        <br/><br/>
        <button onClick={handleNewIngSubmit}>Add Ingredient</button>
=======

        Enter New Ingredient Name
            <input type='text' value={newIng} onChange={handleNewIng} />

        <button onClick={handleNewIngSubmit}>Submit</button>
>>>>>>> fb352b8fa86cb9bc7dad12758ac151d14bdf5a59
        </form>
 
    )
}

export default IngredientAdder