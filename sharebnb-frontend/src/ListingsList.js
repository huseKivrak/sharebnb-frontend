import ListingCard from "./ListingCard";
import { useState, useEffect } from "react";
import { CardColumns } from "reactstrap";
import ShareBnBApi from "./api";

/** ListingsList
 *
 *  shows user-owned listings if provided,
 *  otherwise shows all listings from api
 *
 * Props:
 * - userBookings:  *  [{ id, ownerId, renterId, listingId, createdAt }] (optional)
 *
 * States:
 * - listings: [{id, name, description, price, street, city, state, zip, genre, (photoUrl?)}, ...]
 * - isLoading: boolean
 *
 * RoutesList -> ListingsList -> ListingCard
 */

function ListingsList({ userBookings = null }) {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
console.debug("ListingsList");

  /** getAndSetListingsOnMount
   *
   */
  useEffect(function getAndSetListingsOnMount() {
    async function getAndSetAllListings() {
      let shownListings = await ShareBnBApi.getListings();
      //only show user-owned listings:
      if (userBookings) {
        console.log("userBookings:", userBookings);
        const userBookingListingIds = userBookings.map((b) => b.listingId);
        console.log("userBookingListingIds:", userBookingListingIds);
        const bookings = shownListings.filter((l) =>
          userBookingListingIds.includes(l.listingid)
        );
        shownListings = [...bookings];
      }

      setListings(shownListings);
    }
    getAndSetAllListings();
    setIsLoading(false);
  }, []);

  if (isLoading) return <p>Loading...!</p>;
  return (
    <CardColumns>
      {listings.map((l) => (
        <ListingCard key={l.id} listing={l} />
      ))}
    </CardColumns>
  );
}

export default ListingsList;
