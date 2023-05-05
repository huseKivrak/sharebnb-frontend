import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListingCard from "./ListingCard";
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

  const HOSTNAME = process.env.HOSTNAME || "http://localhost:3001";

  useEffect(
    function getAndSetListingOnMount() {
      async function getAndSetListing() {
        const resp = await axios.get(`${HOSTNAME}/listings/${id}`);
        setListing(resp.data.listing);
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
