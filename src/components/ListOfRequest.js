export default function ListOfRequest(props) {
  const { usersRequest } = props;
  return (
    <>
      <ul>
        {usersRequest.map((usersReques, index) => {
          // console.log("Inside Users Request Map: ", usersRequest);

          const { senderId, receiverId, accepted } = usersReques;
          return (
            <div>
              <li key={index} className="border-for-li">
                <p>Sender ID: {senderId}</p>
                <p>Receiver ID: {receiverId}</p>
                <p>Request Status: Accepted - {accepted}</p>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
}
