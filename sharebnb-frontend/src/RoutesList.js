import { Routes, Route } from "react-router-dom";
import ListingsList from "./ListingsList";
import Listing from "./Listing";
import ListingForm from "./ListingForm";
import MessagesList from "./MessagesList";
import UserPage from "./UserPage";
import Homepage from "./Homepage";
import RegisterForm from "./RegisterForm";

/** RoutesList
 *
 * Props:
 * - user:
 * { id, username, firstName, lastName, listings, bookings, conversations }
 *   - listings: [{ id, name, description, price, street, city, state, zip, genre }]
 *   - bookings: [{ id, ownerId, renterId, listingId, createdAt }]
 *   - conversations: [{ id, renterId, ownerId, listingId }]
 *
 * States:
 * - None
 *
 * App -> RoutesList ->
 * [Homepage, RegisterForm, UserPage,
 *            ListingsList, Listing, ListingForm, BookingsList, MessagesList]
 */
function RoutesList({ user, handleLogin, registerUser }) {
  console.debug("RoutesList");

  return (
    <Routes>
      <Route path="/" element={<Homepage handleLogin={handleLogin} />} />
      <Route path="/register" element={<RegisterForm registerUser={registerUser}/>} />
      <Route path="/listings" element={<ListingsList />} />
      <Route path="/listings/:id" element={<Listing />} />
      <Route path="/listing/new" element={<ListingForm />} />
      {user && (
        <>
          <Route path="/account" element={<UserPage user={user} />} />
          <Route
            path="/bookings"
            element={<ListingsList userBookings={user.bookings} />}
          />
          <Route
            path="/messages"
            element={<MessagesList conversations={user.conversations} />}
          />
        </>
      )}
    </Routes>
  );
}

export default RoutesList;
