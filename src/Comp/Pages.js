import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; //React Bootstrap
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import AddProduct from "./Comp/AddProduct";
import DisplayProducts from "./Comp/DisplayProducts";
import NavBar from "./Comp/NavBar";

const Pages = () => {
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

  // to filter through quantity

  const filterQuantity = (event) => {
    if (event.target.value === "total") {
      setUpdatedItems(products);
    } else if (event.target.value === "0") {
      const filterQuantityProducts = products.filter((item, index) => {
        return item.quantity === "Out of Stock" || item.quantity == "0";
      });
      setUpdatedItems(filterQuantityProducts);
    } else {
      const filterQuantityProducts = products.filter((item, index) => {
        return item.quantity <= Number(event.target.value);
      });
      setUpdatedItems(filterQuantityProducts);
    }
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

    if (products[indexOfArray].quantity === "Out of Stock") {
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

  // to handle save

  const handleSave = (event) => {
    alert("save clicked");
  };

  //to handle logout

  const handleLogout = (event) => {
    alert("logout clicked");
  };

  return (
    <div>
      <NavBar
        handleSave={handleSave}
        handleShow={handleShow}
        handleLogout={handleLogout}
      />
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
        filterQuantity={filterQuantity}
      />
    </div>
  );
};

export default Pages;
