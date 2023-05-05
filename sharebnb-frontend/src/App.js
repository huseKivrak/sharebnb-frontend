import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import RoutesList from "./RoutesList";
import { useState } from "react";
import axios from "axios";
import ShareBnBApi from "./api";
import decode from "jwt-decode";
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
function App() {
  console.debug("App");
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState("");
  const HOSTNAME = process.env.HOSTNAME || "http://localhost:3001";

  async function registerUser(data) {
    try {
      const resp = await ShareBnBApi.authenticate(data);
      const token = resp.data.token;
      setToken(token);
      const username = decode(token); //probably want to refactor

      const currUserResp = await axios.get(`${HOSTNAME}/users/${username}`);
      setCurrentUser(currUserResp.data.user);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleLogin(data) {
    try {
      //TODO: confirm login route
      const token = await ShareBnBApi.authenticate(data);
      ShareBnBApi.token = token;
      setToken(token);
      const username = decode(token); //probably want to refactor

      const currUserResp = await axios.get(`${HOSTNAME}/users/${username}`);
      setCurrentUser(currUserResp.data.user);
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
        <RoutesList user={currentUser} handleLogin={handleLogin} registerUser={registerUser}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
