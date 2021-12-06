import { useEffect, useState } from "react";

export default function Register({authenticatedUser, setAuthenticatedUser}) {

  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  console.log({authenticatedUser})

  useEffect(() => {
    const userAsString = localStorage.getItem("user")

    if (userAsString) {
      const user = JSON.parse(userAsString)

      setAuthenticatedUser(user)
    }
  }, [setAuthenticatedUser])

  const handleSubmit = (event) => {
    event.preventDefault();

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    fetch("http://localhost:3030/register", fetchOptions)
      .then((res) => res.json())
      .catch(console.log)
      .then((registerData) => {
        const token = registerData.token;

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
          <button type="submit">Sign Up</button>
        </form>
        {/* {authenticatedUser && <div>Secrets</div>} */}
      </main>
    </>
  );
}
