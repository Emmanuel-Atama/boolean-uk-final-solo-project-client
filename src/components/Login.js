import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login({authenticatedUser, setAuthenticatedUser}) {
  
  const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: "",
      })
    
      console.log({authenticatedUser})

      const API_URL = process.env.REACT_APP_API_URL;

    const handleSubmit = event => {
        event.preventDefault()
      
        console.log("Inside handleSubmit: ", { user })
      
        const fetchOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({...user}),
        }
      
        fetch(`${API_URL}/login`, fetchOptions)
          .then(res => res.json())
          .then(loginData => {
            const token = loginData.token
      console.log("Inside login: ", loginData)
            if (token) {
              setAuthenticatedUser(token)
      
              localStorage.setItem("token", JSON.stringify(token))

              navigate("/app")
            }
          })
      }
      const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        setUser({ ...user, [name]: value });
      };
    return(
             <main>
        <form className="form-stack" onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={handleChange} />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
          />
          <button type="submit">Log In With Email</button>
        </form>
      </main>
    )
}