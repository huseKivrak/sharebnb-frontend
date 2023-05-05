function UserPage({user}){
/**
 *   id SERIAL PRIMARY KEY,
  username VARCHAR(25) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(75) NOT NULL,
  password TEXT NOT NULL,
  email TEXT NOT NULL CHECK (position('@' IN email) > 1)
);
 */
  return (
    <div>
      <h1>Hey, {user.firstName}!</h1>
    </div>
  )
}
export default UserPage;