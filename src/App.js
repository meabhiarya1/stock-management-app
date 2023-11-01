import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; //React Bootstrap
import Button from "react-bootstrap/Button";
import { useState } from "react";
import AddProduct from "./Comp/AddProduct";
import DisplayProducts from "./Comp/DisplayProducts";

function App() {

  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [productToEdit, setProductToEdit] = useState(null);

  const AddProducts = (newProduct) => {
    products.push(newProduct);
    setProducts([...products]);
  };

  // to increment the quantity

  const increQty = (event) => {
    const indexOfArray = event.target.value;

    if (products[indexOfArray].quantity == "Out of Stock") {
      products[indexOfArray].quantity = 0;
    }
    products[indexOfArray].quantity =
      Number(products[indexOfArray].quantity) + 1;
    setProducts([...products]);
  };

   // to decrement the quantity

  const decreQty = (event) => {
    const indexOfArray = event.target.value;
    if (
      products[indexOfArray].quantity <= 1 ||
      products[indexOfArray].quantity === "Out of Stock"
    ) {
      products[indexOfArray].quantity = "Out of Stock";
    } else {
      products[indexOfArray].quantity =
        Number(products[indexOfArray].quantity) - 1;
    }
    setProducts([...products]);
  };

  // to edit the details of product

  const editQty = (event) => {
    setProductToEdit(products[event.target.value]);
    delQty(event);
    handleShow();
  };

  //to delete the product 

  const delQty = (event) => {
    const indexOfArray = event.target.value;
    products.splice(indexOfArray, 1);
    setProducts([...products]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button variant="primary" onClick={handleShow} className="modal-button">
          Add New Product to Inventory
        </Button>
        <AddProduct
          productToEdit={productToEdit}
          handleClose={handleClose}
          show={show}
          AddProducts={AddProducts}
        />
        <DisplayProducts
          products={products}
          increQty={increQty}
          decreQty={decreQty}
          editQty={editQty}
          delQty={delQty}
        />
      </header>
    </div>
  );
}

export default App;

