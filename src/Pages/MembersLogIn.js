import Login from "../components/Login";

export default function MembersLogIn(props) {
    const { authenticatedUser, setAuthenticatedUser} = props
    
    return(
        <>
        <header className="header">
        <h1>PEREFECT MATCH</h1>
        <p>
          <i>...Love is right here and right now</i>
        </p>
      </header>
      <Login authenticatedUser={authenticatedUser} setAuthenticatedUser={setAuthenticatedUser} />
        </>
    )
}