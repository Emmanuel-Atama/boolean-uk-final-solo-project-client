import { useState } from "react";

export default function ViewRequest(props) {
  const { requestEdit, setAccepted } = props;
  // const [senderId, setSenderId] = useState("")
  // const [receiverId, setReceiverId] = useState("")
  const [accepted, setAccepted] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    console.log("Inside Request To Edit: ", requestEdit);
    if (requestEdit) {
      setAccepted(requestEdit.accepted);
    }
  });

  const handleRequestSubmit = (event) => {
    event.preventDefault();
    const requestToUpdate = {
      accepted: false,
    };
    const fetchRequest = {
      method: "PUT",
      headers: {
        "Content-Type": "applicatiion/json",
      },
      body: JSON.stringify(requestToUpdate),
    };
    fetch(`${API_URL}/usersRequest/${requestEdit.id}`, fetchOptions)
      .then((res) => res, json())
      .then((updatedRequest) => {
        console.log("Inside updatedRequest: ", updatedRequest);
        const updatedRequests = usersRequest.map((userRequest) => {
          if (userRequest.id === contactEdit.id) {
            return {
              ...updatedRequest,
            };
          } else {
            return userRequest;
          }
        });
        setAccepted(updatedRequests);
      });
  };

  return (
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
        <input type="id" name="sender" />
        <label htmlFor="receiver">Receiver ID</label>
        <input type="id" name="receiver" />
        <label htmlFor="accepted">Request Status</label>
        <input type="boolean" name="accepted" />
      </form>
      <button type="submit">Submit Response</button>
    </>
  );
}
