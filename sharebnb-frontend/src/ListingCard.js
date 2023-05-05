import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
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
  return (
    <Card>
      <CardImg top width="100%" src={listing.photoUrl} alt={listing.name} />
      <CardBody>
        <CardTitle>{listing.name}</CardTitle>
        <CardText>Type: {listing.genre}</CardText>
        <CardText>Info: {listing.description}</CardText>
        <CardText>
          Address: {listing.street}, {listing.city}, {listing.state}{" "}
          {listing.zip}
        </CardText>
        <CardText>Cost: ${listing.price}/day</CardText>
      </CardBody>
    </Card>
  );
}

export default ListingCard;
