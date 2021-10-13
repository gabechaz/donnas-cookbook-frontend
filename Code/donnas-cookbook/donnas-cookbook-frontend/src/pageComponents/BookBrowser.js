import { useEffect, useState } from "react"
import UserLi from './UserDiv'
import '../css-files/BookBrowser.css'

function BookBrowser ({API}) {



    const [page, setPage] = useState(0)
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch(`${API}/users/${page}`)
        .then(res => res.json())
        .then(users => setUsers(users))
    }, [API, page])




    const books = users.map(user => {
        return (
            <UserLi  key={user.id} user={user} />
        )
    })


    return (
    <div>
        <h3>Book Browser</h3>
        <div className ='books-grid'>
            {books}
        </div>
        <button onClick = {nextPage}>Next</button>
          
    </div>
    )
}

export default BookBrowser