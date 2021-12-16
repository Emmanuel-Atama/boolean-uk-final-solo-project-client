import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoggedIn from "./Pages/LoggedIn";
import NotLoggedIn from "./Pages/NotLoggedIn";
import { useNavigate } from "react-router-dom";
import MembersLogIn from "./Pages/MembersLogIn";
import Register from "./components/Register";

export default function App() {
const navigate = useNavigate()
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [profiles, setProfiles] = useState([]);
  const [usersRequest, setUsersRequest] = useState([])

  const API_URL = process.env.REACT_APP_API_URL;

  console.log({ authenticatedUser });
function handleLogoutClick() {
  localStorage.removeItem("token")

  setAuthenticatedUser(null)

  navigate("/")
}

  function fetchProfiles() {
    fetch(`${API_URL}/profile`)
      .then((res) => res.json())
      .then((data) => {
        setProfiles(data);
      });
  }
  useEffect(() => {
    fetchProfiles();
    if (!authenticatedUser) {
      const token = localStorage.getItem("token")

    if (token) {
      setAuthenticatedUser(token)
navigate("/app")
    } else {
      navigate("/")
    }
    }
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <NotLoggedIn
            authenticatedUser={authenticatedUser}
            setAuthenticatedUser={setAuthenticatedUser}
          />
        }
      />
      <Route  path="/app" element={<LoggedIn profiles={profiles} handleLogoutClick={handleLogoutClick} setUsersRequest={setUsersRequest}/>}/>
    <Route path="/MembersLogIn" element={<MembersLogIn authenticatedUser={authenticatedUser} setAuthenticatedUser={setAuthenticatedUser} />}/>
    <Route path="/NotLoggedIn" element = {<Register authenticatedUser={authenticatedUser} setAuthenticatedUser={setAuthenticatedUser}/> }/>
    </Routes>
  );
}