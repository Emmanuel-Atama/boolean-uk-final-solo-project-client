import ListOfUsers from "../components/ListOfUsers";
export default function LoggedIn({profiles, handleLogoutClick}) {
    return(
        <>
        <header className="header">
        <h1>PEREFECT MATCH</h1>
        <p>
          <i>...Love is right here and right now</i>
        </p>
      </header>
        <div className="center-profile">
        <p onClick={handleLogoutClick}><strong className="logout">Log Out</strong></p>
        <ListOfUsers profiles={profiles} />
        </div>
        </>
    )
}