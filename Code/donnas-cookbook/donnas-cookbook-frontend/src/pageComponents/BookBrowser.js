import { useEffect, useState } from "react"

function BookBrowser ({API}) {



    const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch(`${API}/users`)
        .then(res => res.json())
        .then(users => setUsers(users))
    }, [API])


    function goToUserPage (e) {
        console.log(e.target)
    }

    const books = users.map(user => {
        return (
            <li onClick={goToUserPage} key={user.id}>{user.username}</li>
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