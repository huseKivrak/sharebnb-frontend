import { Routes, Route } from "react-router-dom";
import ListingsList from "./ListingsList";
import Listing from "./Listing";
import ListingForm from "./ListingForm";
import BookingsList from "./BookingsList";
import Messages from "./Messages";
import UserPage from "./UserPage";

function RoutesList() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/listings" element={<ListingsList />} />
      <Route path="/listings/:id" element={<Listing />} />
      <Route path="/listing/new" element={<ListingForm />} />

      <Route path="/account" element={<UserPage />} />

			<Route path="/bookings" element={<BookingsList />} />

      <Route path='/messages' element={<Messages />} />


    </Routes>
  );
}

export default RoutesList;
