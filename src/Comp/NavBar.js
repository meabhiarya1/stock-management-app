import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import AddProduct from "./AddProduct";
import './NavBar.css';
import { useState } from "react";


const NavBar = () => {

  const[value, setValue] = useState(false);

  const handleClick = () =>{
    setValue(true);
  }

  const handleClose = () =>{
    setValue(false);
  }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {!value&&<Button variant="primary" type="submit" className="nav-button" onClick={handleClick}>
            Add New Product
          </Button>}

          {value&&<Button variant="primary" type="submit" className="nav-button" onClick={handleClose}>
            Close
          </Button>}

          {/* <Button variant="primary" type="submit" className="nav-button">
            Login
          </Button>

          <Button variant="primary" type="submit" className="nav-button">
            Logout
          </Button> */}
        </Container>
      </Navbar>
      {value && <AddProduct />}
      
    </>
  );
}

export default NavBar;
