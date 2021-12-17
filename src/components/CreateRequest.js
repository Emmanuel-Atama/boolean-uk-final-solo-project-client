export default function CreateRequest(props) {

  const [senderId, setSenderId] = useState(0)
  const [receiverId, setReceiverId] = useState(0)
  const [accepted, setAccepted] = useState(false)

  const API_URL = process.env.REACT_APP_API_URL;

    const handleRequestSubmit = event => {
      event.preventDefault()
    
      const requestToCreate = {
        senderId,
        receiverId,
        accepted,
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
    
    const requestToAdd = {
      ...newRequest,
    }
    setUsersRequest(requestToAdd)
    })
    }

    return(
        <>
                    <header className="header">
        <h1>PEREFECT MATCH</h1>
        <p>
          <i>...Love is right here and right now</i>
        </p>
      </header>
      <form className="form-stack" onSubmit={handleRequestSubmit}>
<h2>Match Request</h2>
<label htmlFor="sender">Sender ID</label>
<input type="id" name="sender"/>
<label htmlFor="receiver">Receiver ID</label>
<input type="id" name="receiver"/>
<label htmlFor="accepted">Request Status</label>
<input type="boolean" name="accepted"/>
      </form>
      <button type="submit">Submit Request</button>
        </>
    )
}