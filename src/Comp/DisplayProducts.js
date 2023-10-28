import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import "./DisplayProducts.css";

const DisplayProducts = ({ products }) => {
  let initialState = [];
  const [product, setProducts] = useState(initialState);

  const increQty = (event) => {
    const indexOfArray = event.target.value;
    products[indexOfArray].quantity =
      Number(products[indexOfArray].quantity) + 1;
    setProducts([...products]);
  };

  const decreQty = (event) => {
    const indexOfArray = event.target.value;
    if (products[indexOfArray].quantity <= 0) {
      products[indexOfArray].quantity = 0;
    } else {
      products[indexOfArray].quantity =
        Number(products[indexOfArray].quantity) - 1;
    }
    setProducts([...products]);
  };

  const editQty = () =>{

  }

  return (
    <div className="table">
      <Table striped bordered hover variant="dark" >
        <thead>
          <tr>
            <th>Index</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Height</th>
            <th>Width</th>
            <th>Thickness</th>
            <th>Kilo</th>
            <th>Grams</th>
            <th>Quantity</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.product_name}</td>
                <td>{item.price}</td>
                <td>{item.height}</td>
                <td>{item.width}</td>
                <td>{item.thick}</td>
                <td>{item.kilo}</td>
                <td>{item.grams}</td>
                <td>{item.quantity}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={(event) => increQty(event)}
                    value={index}
                    className="button"
                  >
                    +
                  </Button>
                  <Button
                    variant="danger"
                    onClick={(event) => decreQty(event)}
                    value={index}
                    className="button"
                  >
                    -
                  </Button>

                  <Button
                    variant="primary"
                    onClick={(event) => editQty(event)}
                    value={index}
                    className="button"
                  >
                    Edit
                  </Button>

                  <Button
                    variant="primary"
                    onClick={(event) => editQty(event)}
                    value={index}
                    className="button"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default DisplayProducts;
