import { useState } from "react";

export default function ListOfUser(props) {
  const { profiles, setUsersRequest} = props
  console.log("Inside profile:", props)

  const [selectedProfile, setSelectedProfile] = useState("")
  // const [senderId, setSenderId] = useState(0)
  const [receiverId, setReceiverId] = useState(0)
  // const [accepted, setAccepted] = useState(false)

  const API_URL = process.env.REACT_APP_API_URL;

const handleSubmitRequest = receiverId => {
  // event.preventDefault()

  const requestToCreate = {
    // senderId,
    receiverId,
    // accepted,
  }

  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestToCreate),
  }
fetch(`${API_URL}/usersRequest`, fetchOptions)
.then(res => res.json())
.then(newRequest => {
console.log("Inside newRequest Fetch: ", newRequest)

const requestToAdd = {
  ...newRequest,
}
setUsersRequest(requestToAdd)
})
}
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
                <option>Filter By Gender</option>               
               
                <option value="Man">Man</option>
                <option value="Woman">Woman</option>
             
              </select>
            </form>
</div>
      <ul className="member-cards">
        {profiles
         .filter((profile) => {
          if (
            selectedProfile === profile.gender || selectedProfile === ""
          ) {
            return true;
          } else {
            return false;
          }
        })
        .map((profile, index) => {
          console.log("Inside the profile map:", profile);

          const { username, gender, city, area, sexuality } = profile;

          return (
            <div className="two-column-grid">
            <li key={index} className="border-for-li">
              <h3>Username: {username}</h3>
              <p>Gender: {gender}</p>
              {/* <p>City: {city}</p>
              <p>Area: {area}</p> */}
              <p>Sexual Orientation: {sexuality}</p>
            </li>
            <div>
            <button className="button-style"> View Profile </button>
            <button onClick={()=>handleSubmitRequest(profile.id)} className="button-style"> Match With Me</button>
            </div>
            </div>
          );
        })}
      </ul>
    </>
  );
}