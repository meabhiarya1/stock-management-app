import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; //React Bootstrap
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import AddProduct from "./Comp/AddProduct";
import DisplayProducts from "./Comp/DisplayProducts";

function App() {
  const [products, setProducts] = useState([]);
  const [updatedItems, setUpdatedItems] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setEditEvent(null);
    setProductToEdit(null);
  };
  const handleShow = () => setShow(true);
  const [productToEdit, setProductToEdit] = useState(null);
  const [editEvent, setEditEvent] = useState(null);

  useEffect(() => {
    setUpdatedItems(products);
  }, [products]);

  const AddProducts = (newProduct) => {
    products.push(newProduct);
    setProducts([...products]);
  };

  // to search the product

  const searchProducts = (event) => {
    const filterProducts = products.filter((item, index) => {
      return item.product_name
        .toUpperCase()
        .includes(event.target.value.toUpperCase());
    });
    setUpdatedItems(filterProducts);
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
    setEditEvent(event);
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
          delQty={delQty}
          editEvent={editEvent}
        />

        <DisplayProducts
          products={updatedItems}
          increQty={increQty}
          decreQty={decreQty}
          editQty={editQty}
          delQty={delQty}
          searchProducts={searchProducts}
        />
      </header>
    </div>
  );
}

export default App;
