import { useState } from "react";

export default function ListOfUser(props) {
  const { profiles} = props
  console.log("Inside porfile:", props)

  const [selectedProfile, setSelectedProfile] = useState("")



  return (
    <>
<div className="two-column-grid">
<h2 className="align-center">List of Perfect Match Users</h2>
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
      <ul className="cards">
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
              <p>City: {city}</p>
              <p>Area: {area}</p>
              <p>Sexual Orientation: {sexuality}</p>
            </li>
            <div>
            <button className="button-style"> View Profile </button>
            <button className="button-style"> Match With Me</button>
            </div>
            </div>
          );
        })}
      </ul>
    </>
  );
}