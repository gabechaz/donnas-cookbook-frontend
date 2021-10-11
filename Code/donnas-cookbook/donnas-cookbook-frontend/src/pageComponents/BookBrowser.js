import { useEffect, useState } from "react"
import UserLi from './UserLi'

function BookBrowser ({API}) {



    const [page, setPage] = useState(1)
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch(`${API}/users`)
        .then(res => res.json())
        .then(users => setUsers(users))
    }, [API])




    const books = users.map(user => {
        return (
            <UserLi  key={user.id} user={user} />
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