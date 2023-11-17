import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; //React Bootstrap
import Button from "react-bootstrap/Button";

const NavBar = ({ handleSave, handleShow, handleLogout }) => {
  return (
    <div>
      <Button
        variant="success"
        onClick={handleSave}
        className="modal-button-save"
      >
        Save
      </Button>

      <Button
        variant="primary"
        onClick={handleShow}
        className="modal-button-add"
      >
        Add New Product to Inventory
      </Button>

      <Button
        variant="danger"
        onClick={handleLogout}
        className="modal-button-logout"
      >
        Logout
      </Button>
    </div>
  );
};

export default NavBar;
