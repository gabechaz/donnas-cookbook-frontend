import {useState} from 'react'

const [name, setName] = useState("")

const [nationality, setNationality] = useState("")

function Signup () {
    return (
        <form>
            <label>
                Name
                <input type='text'></input>
            </label>
            <label>
                Nationality
                <input type='text'></input>
            </label>
        </form>
    )

}

export default Signup