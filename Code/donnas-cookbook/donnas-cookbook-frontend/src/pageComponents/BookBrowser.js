import { useEffect, useState } from "react"
import UserLi from './UserDiv'
import '../css-files/BookBrowser.css'

function BookBrowser ({API}) {



    const [page, setPage] = useState({count: 0})
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch(`${API}/users/${page}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(page)
        })
        .then(res => res.json())
        .then(users => setUsers(users))
    }, [API, page])



    function nextPage() {
        setPage({count: page.count + 5})
    }

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