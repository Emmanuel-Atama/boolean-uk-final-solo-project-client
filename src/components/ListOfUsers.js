import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ListOfUser(props) {
  const { profiles, setUsersRequest, images } = props

  console.log("Inside Image props: ", props)

  const [selectedProfile, setSelectedProfile] = useState("");
  // const [senderId, setSenderId] = useState(0)
  const [receiverId, setReceiverId] = useState(0);
  // const [accepted, setAccepted] = useState(false)

  const API_URL = process.env.REACT_APP_API_URL;

  const handleSubmitRequest = (receiverId) => {
    // event.preventDefault()

    const requestToCreate = {
      // senderId,
      receiverId,
      // accepted,
    };

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestToCreate),
    };
    fetch(`${API_URL}/usersRequest`, fetchOptions)
      .then((res) => res.json())
      .then((newRequest) => {
        const requestToAdd = {
          ...newRequest,
        };
        setUsersRequest(requestToAdd);
      });
  };
  // const selectedGender = new Set(profiles.map((profile) => profil.gender))

  const navigate = useNavigate()

  const { profileid } = useParams()
  
  const foundProfile = profiles.find((profile) =>{
    return profile.id === parseInt(profileid)
  })
  
  console.log("Inside found profile: ", profileid)
  
  const jumpToProfile = () => {
    navigate(`/ViewProfile/${profileid}`)
  };
  

  return (
    <>
      <div className="two-column-grid-header">
        <h2 className="members-h2">PM Members</h2>
        <form>
          <select
            onChange={(event) => setSelectedProfile(event.target.value)}
            name="filter-by-profile"
            id="filter-by-profile"
            value={selectedProfile}
          >
            <option value="">Filter By Gender</option>
          
            <option value="man">man</option>
          <option value="woman">woman</option>
          </select>
        </form>
      </div>
      <ul className="member-cards">
        {profiles
          .filter((profile) => {
            if (selectedProfile === profile.gender || selectedProfile === "") {
              return true;
            } else {
              return false;
            }
          })
          .map((profile, index) => {
      // profile.images.map(image => <p>{image.url}</p>)
            const { username, gender, sexuality } = profile;
// console.log("Inside images map: ", image.url)
            return (
              <div className="two-column-grid">
                <li key={index} className="border-for-li">
                  {/* <p>{images.url}</p> */}
                  <h3 className="h3-styling">Username: {username}</h3>
                  <p>Gender: {gender}</p>
                  <p>Sexual Orientation: {sexuality}</p>
                </li>
                <div>
                  <Button
                    variant="contained"
                    color="success"
                    type="submit"
                    onClick={() => handleSubmitRequest(profile.id)}
                  >
                    Match With Me
                  </Button>
                  <div className="material-button">
                    <Button variant="contained" color="success" type="submit" onClick={jumpToProfile}>
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
      </ul>
    </>
  );
}
