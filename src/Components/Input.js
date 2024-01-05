import { useState } from "react"

function Input({ setUser }) {
    const [username, setUsername] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = `https://api.github.com/users/${username}`
        console.log(url)
        const response = await fetch(url)
        const data = await response.json()
        setUser(data)
        setUsername('')
        console.log(data)
    }

    const clear = () => {
        setUsername('')
        setUser(null)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
                <input type='submit' />
            </form>
            <button onClick={clear}>clear</button>
        </div>
    )
}

export default Input