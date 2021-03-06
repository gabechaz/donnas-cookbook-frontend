import {useState} from 'react'
import {useHistory} from 'react-router-dom'



function Signup ({API, setCurrentUser}) {

    const history = useHistory()

    const [username, setUsername] = useState("")

    function handleUsername (e) {
        setUsername(e.target.value)
    }

    const [password, setPassword] = useState("")

    function handlePassword (e) {
        setPassword(e.target.value)
    }

    const [nationality, setNationality] = useState("")

    function handleNationality(e) {
        setNationality(e.target.value)
    }

    const [errors, setErrors] = useState("")

    function handleErrors(errors) {
        setErrors(errors)
    }


    function signup(e) {
    e.preventDefault()
    const signupObj = {
        username: username,
        password: password,
        nationality: nationality
    }

    console.log(signupObj)
    fetch(`${API}/users`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(signupObj)
    })
    .then(res => res.json())
    .then(user => {
        if (user.id)
        {
        history.push('/recipe-maker')
        console.log(user)
        localStorage.setItem("token", user.token)
        setCurrentUser(user.user)
        history.push('/books')
        }
        else {
            setErrors(user.errors)
        }
    })
}


function pushTest() {
    history.push('/books')
}

    return (
        <div>
            <button onClick={pushTest}>push test</button>
        <h1>Signup</h1>
        <form>
            <label>
                Username
                <input onChange={handleUsername} type='text'></input>
            </label>

            <br />

            <label>
                Password
                <input onChange={handlePassword} type='password'></input>
            </label>

            <br />

            <label>
                Nationality
                <input onChange={handleNationality} type='text'></input>
            </label>

            <br />

            <button onClick={signup}>
                Submit
            </button>
            <br />
            <div>
            {errors}
            </div>
        </form>
        </div>
    )

}

export default Signup