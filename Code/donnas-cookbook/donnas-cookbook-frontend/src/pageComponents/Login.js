import {useState} from 'react'
import {useHistory} from 'react-router-dom'

function Login ({setCurrentUser, API}) {

    const history = useHistory()

    const [username, setUserName] = useState("")

    function handleUsername(e) {
        setUserName(e.target.value)
    }

    const [password, setPassword] = useState("")

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleSubmit (e) {
        e.preventDefault()

        const loginObject = {
            username:username,
            password: password
        }
        fetch(`${API}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                body: JSON.stringify(loginObject)
            }
        })
        .then(r => r.json())
        .then(user => {
            if (user.errors) {
                console.log(user.errors)
            }

            else {
                localStorage.setItem("token", user.token)
                setCurrentUser(user)
                console.log(user)
                history.push('/books')
            }

        })
    }




    // const addNewCurrentUser = (newCurrentUser) => {
    //     fetch("https://dataminr-backend.herokuapp.com/login", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         'Accept': "application/json"},
    //         body: JSON.stringify(newCurrentUser)
    //       }
    //     )
    //       .then((r) => r.json())
    //       .then((newUser) => {
    //         console.log(newUser)
    //         if (newUser.errors){
    //           console.log(newUser.errors)
    //         } else {
    //           const {user, token} = newUser
    //           console.log(newUser)
    //           localStorage.setItem("token", token )
    //         setCurrentUser(user)
    //         history.push('/questions')}
    


    return (
        <div>
        <h1>Login</h1>
        <form>
            <label>
                Username
                <input value = {username} onChange = {handleUsername}  />
            </label>

            <br />

            <label>
                Password
                <input type='password' value={password} onChange={handlePassword} />
            </label>
            <br />
            <label>
                <button onClick = {handleSubmit}>Submit</button>
            </label>
        </form>
        </div>
    )
}

export default Login