import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import ListingCard from "./ListingCard";
import ShareBnBApi from "./api";
/** Listing
 *
 * Props:
 * - None
 *
 * States:
 * - listing: {name, description, price, street, city, state, zip, photoUrl}
 *
 * RoutesList -> Listing -> ListingCard
 */
function Listing() {
  const [listing, setListing] = useState({
    name: "",
    description: "",
    price: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    photoUrl: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  /** getAndSetListingOnMount:
   *
   *
   */
  useEffect(
    function getAndSetListingOnMount() {
      async function getAndSetListing() {
        try {
          const listing = await ShareBnBApi.getListing(id);
          setListing(listing);
        } catch (error) {
          console.error(error);
          //if listing doesn't exist, redirect to listings page
          <Navigate to="/listings" />;
        }
      }
      getAndSetListing();
      setIsLoading(false);
    },
    [id]
  );

  if (isLoading) return <p>Loading...!</p>;
  return <ListingCard listing={listing} />;
}

export default Listing;
