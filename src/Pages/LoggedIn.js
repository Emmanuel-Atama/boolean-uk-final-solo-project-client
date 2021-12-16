import ListOfUsers from "../components/ListOfUsers";
export default function LoggedIn({ profiles, handleLogoutClick, setUsersRequest }) {
  return (
    <div>
      <header className="header-style two-column-grid-header">
        <section>
          <h1>PEREFECT MATCH</h1>
          <p>
            <i>...Love is right here and right now</i>
          </p>
        </section>
        <button className="logout-button" onClick={handleLogoutClick}>
          <strong className="logout">Log Out</strong>
        </button>
      </header>
      <div className="center-profile">
        <ListOfUsers profiles={profiles} setUsersRequest={setUsersRequest}/>
      </div>
    </div>
  );
}
