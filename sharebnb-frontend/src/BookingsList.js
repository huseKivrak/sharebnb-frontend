import { useState, useEffect } from "react";
import axios from "axios";
import ListingCard from './ListingCard';


/** BookingsList
 *
 * Props:
 * - None
 *
 * States:
 * - bookings : [{ id, ownerId, renterId, listingId, createdAt }, ...]
 * - isLoading: boolean
 *
 * App -> RoutesList -> BookingsList
 */
function BookingsList({ bookings = null }) {
  console.debug("BookingsList");
  const [isLoading, setIsLoading] = useState(true);
  const [bookings, setBookings] = useState([]);

  const HOSTNAME = process.env.HOSTNAME || "http://localhost:3001";
  /** getAndSetBookingsOnMount
   *
   * api call to set bookings
   *
   */
  useEffect(function getAndSetBookingsOnMount() {
    console.debug("BookingsList effect");

    if (bookings) {
      setBookings(bookings);
      setIsLoading(false);
      return;
    }

    async function getAndSetBookings() {
      console.debug("BookingsList api call");
      try {
        const resp = await axios.get(`${HOSTNAME}/bookings`);
        /**
         * OR
         *
         * const resp = await axios.get(`${HOSTNAME}/listings`);
         * const bookings = resp.data.listings.filter(l => l.ownerId === currentUser.id);
         *                                                  l.isBooked === true
         * OR (probably best):
         *                Listing.findAll(isBooked)
         *
         */
        const userBookings = resp.data.bookings;
        setBookings(userBookings);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getAndSetBookings();
  }, []);

  if (isLoading) return <p>Loading...!</p>;
  return <div>

  </div>;
}
export default BookingsList;
