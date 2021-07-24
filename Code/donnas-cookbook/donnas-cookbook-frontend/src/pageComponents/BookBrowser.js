import { useEffect, useState } from "react"

function BookBrowser ({API}) {



    const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch(`${API}/users`)
        .then(res => res.json())
        .then(users => setUsers(users))
    }, [API])



    const books = users.map(user => {
        return (
            <li>{user.username}</li>
        )
    })


    return (
        <div>
            Book Browser
            {books}
        </div>
    )
}

export default BookBrowser