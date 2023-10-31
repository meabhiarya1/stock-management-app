import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddProduct.css";
import DisplayProducts from "./DisplayProducts";
import Modal from "react-bootstrap/Modal";

// const AddProduct = () => {
//   let initialState = [];
//   const [products, setProducts] = useState(initialState);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = e.target;

//     const newProduct = {
//       product_name: formData.product_name.value,
//       price: formData.price.value,
//       height: formData.height.value,
//       width: formData.width.value,
//       thick: formData.thick.value,
//       kilo: formData.kilo.value,
//       grams: formData.grams.value,
//       quantity: formData.quantity.value,
//     };
//     setProducts([...products, newProduct]);
//     console.log(products);
//   };

//   return (
//     <>
//       <div className="form-div">
// <Form className="form" onSubmit={handleSubmit}>
//   <Form.Group className="mb-3" controlId="formBasicEmail">
//     <Form.Label>Product Name</Form.Label>
//     <Form.Control
//       type="text"
//       placeholder="Product name"
//       name="product_name"
//     />
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label>Price</Form.Label>
//     <Form.Control
//       type="number"
//       placeholder="Price per piece"
//       name="price"
//     />
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label>Size :</Form.Label>
//     <br></br>
//     <Form.Control
//       type="number"
//       placeholder="Height in feet"
//       name="height"
//       className="size"
//     />
//     <Form.Control
//       type="number"
//       placeholder="Width in feet"
//       name="width"
//       className="size"
//     />

//       <Form.Control
//         type="number"
//         placeholder="Thickness in mm"
//         name="thick"
//         className="thick"
//       />

//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label>Weight :</Form.Label>
//     <Form.Control
//       type="number"
//       placeholder="Kilo"
//       name="kilo"
//       className="weight"
//     />
//     <Form.Control
//       type="number"
//       placeholder="Grams"
//       name="grams"
//       className="weight"
//     />
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label>Quantity</Form.Label>
//     <Form.Control
//       type="number"
//       placeholder="Quantity"
//       name="quantity"
//     />
//   </Form.Group>

//   <Button variant="primary" type="submit">
//     Add Product
//   </Button>
// </Form>
//       </div>
//         <DisplayProducts products={products}/>
//     </>
//   );
// };

// export default AddProduct;

function AddProduct() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let initialState = [];
  const [products, setProducts] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = e.target;
    const newProduct = {
      product_name: formData.product_name.value,
      price: formData.price.value,
      height: formData.height.value,
      width: formData.width.value,
      thick: formData.thick.value,
      kilo: formData.kilo.value,
      grams: formData.grams.value,
      quantity: formData.quantity.value,
    };
    setProducts([...products, newProduct]);
    // console.log(products);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="modal-button">
        Add New Product to Inventory
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add only new Item not Existing Item !!!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form className="form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product name"
                name="product_name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price per piece"
                name="price"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Size :</Form.Label>
              <br></br>
              <Form.Control
                type="number"
                placeholder="Height in feet"
                name="height"
                className="size"
              />
              <Form.Control
                type="number"
                placeholder="Width in feet"
                name="width"
                className="size"
              />

              <Form.Control
                type="number"
                placeholder="Thickness in mm"
                name="thick"
                className="thick"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Weight :</Form.Label>
              <Form.Control
                type="number"
                placeholder="Kilo"
                name="kilo"
                className="weight"
              />
              <Form.Control
                type="number"
                placeholder="Grams"
                name="grams"
                className="weight"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Quantity"
                name="quantity"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add Product
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <DisplayProducts products={products} />
    </>
  );
}

export default AddProduct;
