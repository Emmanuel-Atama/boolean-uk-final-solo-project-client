
export default function App() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  // const [posts, setPosts]= useState({})
  console.log({ authenticatedUser });
  function fetchSignUp() {
    fetch("http://localhost:3030/register")
      .then((res) => res.json())
      .then((data) => {
        setAuthenticatedUser(data);
      });
  }
  function fetchSignIn() {
    fetch("http://localhost:3030/login")
      .then((res) => res.json())
      .then((data) => {
        setAuthenticatedUser(data);
      });
  }
  useEffect(() => {
    fetchSignIn();
    fetchSignUp();
  }, []);
  return (
    <div className="three-column-grid">
      
    </div>
  );
}
