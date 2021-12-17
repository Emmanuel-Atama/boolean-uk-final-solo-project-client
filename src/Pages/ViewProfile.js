import { Button } from "@mui/material";

export default function ViewProfile(props) {
  const { profiles } = props;
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
            <div className="two-column-grid">
              <li key={index} className="border-for-li">
                <h3>Username: {username}</h3>
                <p>Gender: {gender}</p>
                <p>City: {city}</p>
                <p>Area: {area}</p>
                <p>Sexual Orientation: {sexuality}</p>
              </li>
              <div>
                <Button variant="contained" color="success" className="button-style">Match With Me</Button>
              </div>
            </div>
          );
        })}
      </ul>
      );
    </>
  );
}
