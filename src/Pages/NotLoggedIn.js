import Login from "../components/Login";
import Register from "../components/Register";
export default function NotLoggedIn({
  authenticatedUser,
  setAuthenticatedUser,
}) {
  return (
    <>
      <div className="grid-container">
        <header className="header">
          <h1>PEREFECT MATCH</h1>
          <p>
            <i>...Love is right here and right now</i>
          </p>
        </header>
        <aside className="left-aside">
          <Login
            authenticatedUser={authenticatedUser}
            setAuthenticatedUser={setAuthenticatedUser}
          />
        </aside>
        <main className="main">
          <Register
            authenticatedUser={authenticatedUser}
            setAuthenticatedUser={setAuthenticatedUser}
          />
        </main>
        <footer className="footer"></footer>
      </div>
    </>
  );
}
