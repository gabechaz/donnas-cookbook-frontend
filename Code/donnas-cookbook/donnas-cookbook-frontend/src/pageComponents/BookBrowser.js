import { useEffect } from "react"

function BookBrowser ({API}) {

    useEffect(() => {
        fetch(`API/books`)
    }, [])

    return (
        <div>
            Book Browser
        </div>
    )
}

export default BookBrowser