import axios from "axios";
import { useParams, useEffect, useState } from "react";

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
  const id = useParams();

  const HOSTNAME = process.env.HOSTNAME || "http://localhost:3001";

  useEffect(function getAndSetListingOnMount() {
    async function getAndSetListing() {
      const resp = axios.get(`${HOSTNAME}/listing/${id}`);
      setListing(resp.data);
    }
    getAndSetListing();
    setIsLoading(false);
  });

  if (isLoading) return <p>Loading...!</p>;
  return (
    <div className="Listing">
      <h3>{listing.name}</h3>
      <h5>{listing.genre}</h5>
      <p>{listing.description}</p>
      <img className="Listing-image" src={listing.photoUrl} />
      <p>Cost: ${listing.price}</p>
      <p>
        Address: {listing.street},{listing.city}, {listing.state}, {listing.zip}
      </p>
    </div>
  );
}

export default Listing;
