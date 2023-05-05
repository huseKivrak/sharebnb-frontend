import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import RoutesList from "./RoutesList";
import { useEffect, useState } from "react";
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
  console.log("App component");
  console.log("currentUser", currentUser);

  async function registerUser(data) {
    try {
      const currentToken = await ShareBnBApi.authenticate(data);
      ShareBnBApi.token = currentToken;
      setToken(currentToken);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleLogin(username, password) {
    try {
      console.log("username, password", username, password);

      const currentToken = await ShareBnBApi.login(username, password);
      ShareBnBApi.token = currentToken;
      console.log("currentToken", currentToken);
      setToken(currentToken);
    } catch (error) {
      //inauth error handling in LoginForm
      //TODO: handle errors by type (NotFoundError, BadRequestError)

      console.error(error);
    }
  }

  useEffect(
    function loadUserInfo() {
      console.debug("App useEffect loadUserInfo", "token=", token);

      async function getCurrentUser() {
        if (token) {
          try {
            let { username } = decode(token);
            // put the token on the Api class so it can use it to call the API.
            ShareBnBApi.token = token;
            let currentUser = await ShareBnBApi.getCurrentUser(username);
            setCurrentUser(currentUser);
          } catch (err) {
            console.error("App loadUserInfo: problem loading", err);
            setCurrentUser("getCurrentUserError"); //TODO: change;just for debug
          }
        } else {
          setCurrentUser("noTokenError"); //TODO: change;just for debug
        }
      }
      getCurrentUser();
    },
    [token]
  );

  return (
    <BrowserRouter>
      <div className="App">
        <h1>ShareBnB</h1>
        <NavBar />
        <RoutesList
          user={currentUser}
          handleLogin={handleLogin}
          registerUser={registerUser}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
