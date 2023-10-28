import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import AddProduct from "./AddProduct";
import './NavBar.css';


const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Button variant="primary" type="submit" className="nav-button">
            Add New Product
          </Button>

          <Button variant="primary" type="submit" className="nav-button">
            Login
          </Button>

          <Button variant="primary" type="submit" className="nav-button">
            Logout
          </Button>
        </Container>
      </Navbar>
      <AddProduct/>
    </>
  );
}

export default NavBar;
