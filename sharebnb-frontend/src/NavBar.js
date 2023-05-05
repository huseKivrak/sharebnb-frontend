import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
function NavBar() {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">ShareBnB</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="/listings">Listings</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/listing/new">New Listing</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/messages">Inbox</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/bookings">Bookings</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
export default NavBar;