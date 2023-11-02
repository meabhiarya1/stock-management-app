import React, { useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddProduct.css";
import Modal from "react-bootstrap/Modal";

function AddProduct({ productToEdit, AddProducts, handleClose, show, delQty, editEvent }) {
  const nameRef = useRef();
  const priceRef = useRef();
  const heightRef = useRef();
  const widthRef = useRef();
  const thicknessRef = useRef();
  const kiloRef = useRef();
  const gramsRef = useRef();
  const quantityRef = useRef();

  useEffect(() => {
    if (productToEdit) {
      nameRef.current.value = productToEdit.product_name;
      priceRef.current.value = productToEdit.price;
      heightRef.current.value = productToEdit.height;
      widthRef.current.value = productToEdit.width;
      thicknessRef.current.value = productToEdit.thick;
      kiloRef.current.value = productToEdit.kilo;
      gramsRef.current.value = productToEdit.grams;
      quantityRef.current.value = productToEdit.quantity;
    }
  }, [productToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = e.target;
    const newProduct = {
      product_name: formData.product_name.value.toUpperCase(),
      price: formData.price.value,
      height: formData.height.value,
      width: formData.width.value,
      thick: formData.thick.value,
      kilo: formData.kilo.value,
      grams: formData.grams.value,
      quantity: formData.quantity.value,
    };
    if (editEvent) {
      delQty(editEvent);
    }
    AddProducts(newProduct);
    setNull();
  };

  const setNull = () => {
    nameRef.current.value = null;
    priceRef.current.value = null;
    heightRef.current.value = null;
    widthRef.current.value = null;
    thicknessRef.current.value = null;
    kiloRef.current.value = null;
    gramsRef.current.value = null;
    quantityRef.current.value = null;
  };

  return (
    <>
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
                ref={nameRef}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price per piece"
                name="price"
                ref={priceRef}
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
                ref={heightRef}
              />
              <Form.Control
                type="number"
                placeholder="Width in feet"
                name="width"
                className="size"
                ref={widthRef}
              />

              <Form.Control
                type="number"
                placeholder="Thickness in mm"
                name="thick"
                className="thick"
                ref={thicknessRef}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Weight :</Form.Label>
              <Form.Control
                type="number"
                placeholder="Kilo"
                name="kilo"
                className="weight"
                ref={kiloRef}
              />
              <Form.Control
                type="number"
                placeholder="Grams"
                name="grams"
                className="weight"
                ref={gramsRef}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label >Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Quantity"
                name="quantity"
                ref={quantityRef}
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
    </>
  );
}

export default AddProduct;
