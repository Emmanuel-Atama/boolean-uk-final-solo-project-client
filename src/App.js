import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoggedIn from "./Pages/LoggedIn";
import NotLoggedIn from "./Pages/NotLoggedIn";
import { useNavigate } from "react-router-dom";
import MembersLogIn from "./Pages/MembersLogIn";
import Register from "./components/Register";
import ViewProfile from "./Pages/ViewProfile";

export default function App() {
const navigate = useNavigate()
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [profiles, setProfiles] = useState([]);
  const [usersRequest, setUsersRequest] = useState([])
// const [requestEdit, setRequestEdit] = useState([])
const [images, setImages] = useState([])

console.log("Images: ", images)
  const API_URL = process.env.REACT_APP_API_URL;

  console.log({ authenticatedUser, usersRequest });
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
  function fetchImages() {
    fetch(`${API_URL}/images`)
    .then((res) => res.json())
      .then((imageData) => {
        console.log("images fetch: ", imageData)
        setImages(imageData);
      });
  }

  useEffect(() => {
    fetchImages();
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
      <Route  path="/app" element={<LoggedIn profiles={profiles} handleLogoutClick={handleLogoutClick} setUsersRequest={setUsersRequest} images={images}/>}/>
    <Route path="/MembersLogIn" element={<MembersLogIn authenticatedUser={authenticatedUser} setAuthenticatedUser={setAuthenticatedUser} />}/>
    <Route path="/NotLoggedIn" element = {<Register authenticatedUser={authenticatedUser} setAuthenticatedUser={setAuthenticatedUser}/> }/>
    <Route path="/ViewProfile/:profileid" element={<ViewProfile profiles={profiles} />} />
    </Routes>
  );
}