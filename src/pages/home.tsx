const Home = () => {
    const UserName = process.env.REACT_APP_USER_NAME

    return (
        <>
            <h1>Hello {UserName} !!</h1>
            We are here to learn React !
        </>
    )
}

export default Home