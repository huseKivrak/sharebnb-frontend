import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import RoutesList from "./RoutesList";
import { useState } from "react";
/** App
 *
 */
const HOSTNAME = process.env.HOSTNAME || "http://localhost:3001";
function App() {
  const [currentUser, setCurrentUser] = useState(null);

  async function handleLogin(data) {
    try {
			//TODO: confirm login route
      const resp = await axios.post(`${HOSTNAME}/auth/login`, data);
      setCurrentUser(resp.data.user);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <BrowserRouter>
      <div className="App">
        <h1>ShareBnB</h1>
        <NavBar />
        <RoutesList user={currentUser} handleLogin={handleLogin} />
      </div>
    </BrowserRouter>
  );
}

export default App;
