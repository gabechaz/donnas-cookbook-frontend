import {useState} from 'react'



function Signup ({API, setCurrentuser}) {


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


    function signup (e) {
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
        console.log(user)
        localStorage.setItem("token", user.token)
        setCurrentuser(user)
    })
}




    return (
        <div>
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
        </form>
        </div>
    )

}

export default Signup