import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Register(props) {

  const { authenticatedUser, setAuthenticatedUser } = props;
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    gender:"",
    city: "",
    area: "",
    sexuality: "",
  });

  const API_URL = process.env.REACT_APP_API_URL;
  
  console.log({ authenticatedUser });

  useEffect(() => {
    const userAsString = localStorage.getItem("user");

    if (userAsString) {
      const user = JSON.parse(userAsString);

      setAuthenticatedUser(user);
    }
  }, [setAuthenticatedUser]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user }),
    };

    fetch(`${API_URL}/register`, fetchOptions)
      .then((res) => res.json())
      .catch(console.log)
      .then((data) => {
        const token = data.token;

        if (token) {
          setAuthenticatedUser(token);

          localStorage.setItem("token", JSON.stringify(token));
        }
      });
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <main>
        <form className="form-stack" onSubmit={handleSubmit}>
          <h2>Register</h2>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={handleChange} />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
          />
          <label htmlFor="username"> Username </label>
          <input
            type="username"
            id="username"
            name="username"
            onChange={handleChange}
          />
          <label> Gender </label>
          <select name="gender" id="gender" onChange={handleChange}>
            <option>--Please choose an option--</option>
            <option value="man">Man</option>
            <option value="woman">Woman</option>
            <option value="IDK">Prefer Not To Say</option>
          </select>
          <label htmlFor="city"> City </label>
          <input type="city" id="city" name="city" onChange={handleChange} />
          <label htmlFor="area"> Area </label>
          <input type="area" id="area" name="area" onChange={handleChange} />
          <label> Sexual Orientation </label>
          <select name="sexuality" id="sexuality" onChange={handleChange}>
            <option Reqiuired>--Please choose an option--</option>
            <option value="straight">Straight</option>
            <option value="gay">Gay</option>
            <option value="lesbian">Lesbian</option>
            <option value="bisexual">Bi-Sexual</option>
            <option value="IDK">Prefer Not To Say</option>
          </select>
          <button type="submit" className="button-style">
            Sign Up
          </button>
        </form>
        <h3>Already a member? <Link to="/MembersLogIn"><i>Login</i></Link></h3>
      </main>
    </>
  );
}
