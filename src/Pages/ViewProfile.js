import { Button } from "@mui/material";
import { Link } from "react-router-dom";
// import { useNavigate, useParams } from "react-router-dom";

export default function ViewProfile(props) {
  const { profiles } = props;

// const navigate = useNavigate()

// const { profileid } = useParams()

// const foundProfile = profiles.find((profile) =>{
//   return profile.id === parseInt(profileid)
// })

// console.log("Inside found profile: ", profileid)

// const jumpToProfile = () => {
//   navigate("/ViewProfile")
// };


  return (
    <>
      <header className="header">
        <h1>PEREFECT MATCH</h1>
        <p>
          <i>...Love is right here and right now</i>
        </p>
      </header>
      <ul className="cards">
        {profiles.map((profile, index) => {

          const { username, gender, city, area, sexuality } = profile;

          return (
            <div className="two-column-grid-profile">
              <li key={index} className="border-for-li white-text">
                <h3>Username: {username}</h3>
                <p>Gender: {gender}</p>
                <p>City: {city}</p>
                <p>Area: {area}</p>
                <p>Sexual Orientation: {sexuality}</p>
              </li>
              <div>
                <Button variant="contained" color="success" className="button-style">Match With Me</Button>
                <div className="material-button">
                <Button variant="contained" color="success" className="button-style"> <Link to="/app">Back To Home</Link></Button>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
      );
    </>
  );
}
