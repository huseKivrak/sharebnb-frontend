import { Card, CardText, CardBody, CardTitle, CardImg } from "reactstrap";

/** ListingCard
 *
 * Props:
 * - listing: {name, description, price, street, city, state, zip, photoUrl}
 *
 * States:
 * - None
 *
 * Listing -> ListingCard
 */
function ListingCard({ listing }) {
  // listing = listing.value;
  console.log("listing:", listing);
  return (
    <Card>
      <CardBody>
        <CardTitle>{listing.name}</CardTitle>
        <CardImg src={listing.photoUrl} alt={listing.name} />
        <CardText>Type: {listing.genre}</CardText>
        <CardText>Info: {listing.description}</CardText>
        <CardText>
          Address: {listing.street}, {listing.city}, {listing.state}
          {listing.zip}
        </CardText>
        <CardText>Cost: ${listing.price}/day</CardText>
      </CardBody>
    </Card>
  );
}

export default ListingCard;
