import ListingCard from "./ListingCard";
import { useState, useEffect } from "react";
import { CardColumns } from "reactstrap";
import axios from "axios";

/** ListingsList
 *
 * Props:
 * - None
 *
 * States:
 * - listings: [{id, name, description, price, street, city, state, zip, photoUrl}, ...]
 * - isLoading: boolean
 *
 * RoutesList -> ListingsList -> ListingCard
 */
function ListingsList() {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function getAndSetAllListingsOnMount() {
    async function getAndSetAllListings() {
      const resp = await axios.get("http://localhost:3001/listings");
      setListings(resp.data.listings);
    }
    getAndSetAllListings();
    setIsLoading(false);
  }, []);

  if (isLoading) return <p>Loading...!</p>;
  return (
    <CardColumns>
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </CardColumns>
  );
}

export default ListingsList;
