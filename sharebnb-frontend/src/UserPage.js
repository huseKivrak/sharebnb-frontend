import { Link } from 'react-router-dom';
/** UserPage
 *
 * Props:
 * - user:
 * { id, username, firstName, lastName, listings, bookings, conversations }
 *   - listings: [{ id, name, description, price, street, city, state, zip, genre }]
 *   - bookings: [{ id, ownerId, renterId, listingId, createdAt }]
 *   - conversations: [{ id, renterId, ownerId, listingId }]
 *
 * States:
 * - None
 *
 * RoutesList -> UserPage
 */
function UserPage({ user }) {
  console.debug("UserPage");

  return (
    <div>
      <h1>Hey, {user.firstName}!</h1>
      <h2>Your Listings:</h2>
      <ul>
        {user.listings.map ? (
          user.listings.map((l) => (
            <li key={l.id}>
              <Link to={`/listings/${l.id}`}>{l.name}</Link>
            </li>
          ))
        ) : (
          <p>You haven't listed any properties!</p>
        )}
      </ul>

      <h2>Your Bookings:</h2>
      <ul>
        {user.bookings ? (
          user.bookings.map((b) => (
            <li key={b.id}>
              <Link to={`/listings/${b.listingId}`}>{b.listingId}</Link>
            </li>
          ))
        ) : (
          <p>You haven't booked any properties!</p>
        )}
      </ul>
      <h2>Inbox:</h2>
      <ul>
        {user.conversations ? (
          user.conversations.map((c) => (
            <li key={c.id}>
              <Link to={`/messages/${c.id}`}>{c.id}</Link>
            </li>
          ))
        ) : (
          <p>No messages!</p>
        )}
      </ul>
    </div>
  );
}
export default UserPage;
