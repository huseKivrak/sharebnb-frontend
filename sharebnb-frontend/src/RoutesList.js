import { Routes, Route } from "react-router-dom";
import ListingsList from "./ListingsList";
import Listing from "./Listing";
import ListingForm from "./ListingForm";
import BookingsList from "./BookingsList";
import MessagesList from "./MessagesList";
import UserPage from "./UserPage";
import Homepage from "./Homepage";
function RoutesList({user}) {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/listings" element={<ListingsList />} />
      <Route path="/listings/:id" element={<Listing />} />
      <Route path="/listing/new" element={<ListingForm />} />

      <Route path="/account" element={<UserPage user={user}/>} />

			<Route path="/bookings" element={<BookingsList />} />

      <Route path='/messages' element={<MessagesList />} />


    </Routes>
  );
}

export default RoutesList;
