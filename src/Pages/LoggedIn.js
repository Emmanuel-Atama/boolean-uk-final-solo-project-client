import { Button } from "@mui/material";
import ListOfUsers from "../components/ListOfUsers";
export default function LoggedIn({ profiles, handleLogoutClick, setUsersRequest, images}) {
  return (
    <div>
      <header className="header-style two-column-grid-header">
        <section>
          <h1>PEREFECT MATCH</h1>
          <p>
            <i>...Love is right here and right now</i>
          </p>
        </section>
        <Button variant="contained" color="success" type="submit" className="logout-button" onClick={handleLogoutClick}>Log Out</Button>
      </header>
      <div className="center-profile">
        <ListOfUsers profiles={profiles} setUsersRequest={setUsersRequest} images={images}/>
      </div>
    </div>
  );
}
