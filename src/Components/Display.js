function Display({ user }) {
    return (
        <div>
            <h1>{user.login}</h1>
            <img src={user.avatar_url} alt='profile' />
            <p>Profile: <a href={user.html_url} targets='blank'> HERE</a></p>
            {user.blog && <p>Blog: {user.blog}</p>}
        </div>
    )
}

export default Display