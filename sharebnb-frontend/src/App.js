import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import RoutesList from "./RoutesList";
import { useState } from "react";
import axios from "axios";

/** App
 *
 * Props:
 * - None
 *
 * States:
 * - currentUser:
 *  { id, username, firstName, lastName, listings, bookings, conversations }
 *   - listings: [{ id, name, description, price, street, city, state, zip, genre }]
 *   - bookings: [{ id, ownerId, renterId, listingId, createdAt }]
 *   - conversations: [{ id, renterId, ownerId, listingId }]
 *
 * App -> [NavBar, RoutesList(user, handleLogin)]
 */
const HOSTNAME = process.env.HOSTNAME || "http://localhost:3001";
function App() {
  console.debug("App");
  const [currentUser, setCurrentUser] = useState(null);

  async function handleLogin(data) {
    try {
      //TODO: confirm login route
      const auth = await axios.post(`${HOSTNAME}/auth/login`, data);
      const username = auth.data.user.username; //probably want to refactor

      const resp = await axios.get(`${HOSTNAME}/users/${username}`);
      setCurrentUser(resp.data.user);
    } catch (error) {
      //inauth error handling in LoginForm
      //TODO: handle errors by type (NotFoundError, BadRequestError)

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
