import { useEffect, useState } from "react"

function BookBrowser ({API}) {

    useEffect(() => {
        fetch(`${API}/users`)
        .then(res => res.json())
        .then(users => console.log(users))
    }, [API])

    const [users, setUsers] = useState([])

    return (
        <div>
            Book Browser
        </div>
    )
}

export default BookBrowser