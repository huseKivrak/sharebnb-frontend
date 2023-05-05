import ListingCard from "./ListingCard";
import { useState, useEffect } from "react";
import { CardColumns } from "reactstrap";
import ShareBnBApi from './api';

/** ListingsList
 *
 *  shows user-owned listings if provided,
 *  otherwise shows all listings from api
 *
 * Props:
 * - userListings (optional)
 *
 * States:
 * - listings: [{id, name, description, price, street, city, state, zip, genre, (photoUrl?)}, ...]
 * - isLoading: boolean
 *
 * RoutesList -> ListingsList -> ListingCard
 */
function ListingsList({ userListings = null }) {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /** getAndSetListingsOnMount
   *
   */
  useEffect(function getAndSetListingsOnMount() {
    //only show user-owned listings:
    if (userListings) {
      setListings(userListings);
      setIsLoading(false);
      return;
    }

    async function getAndSetAllListings() {
      const listings = await ShareBnBApi.getListings();
      setListings(listings);
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
