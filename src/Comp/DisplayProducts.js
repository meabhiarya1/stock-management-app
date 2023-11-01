import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "./DisplayProducts.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const DisplayProducts = ({ products }) => {

  const [product, setProducts] = useState([]);

  useEffect(() => {
    setProducts([...products])
  },[products]);
  // console.log(product)
  const increQty = (event) => {
    const indexOfArray = event.target.value;

    if (product[indexOfArray].quantity == "Out of Stock") {
      product[indexOfArray].quantity = 0;
    }
    product[indexOfArray].quantity = Number(product[indexOfArray].quantity) + 1;
    setProducts([...product]);
  };

  const decreQty = (event) => {
    const indexOfArray = event.target.value;
    if (
      product[indexOfArray].quantity <= 1 ||
      product[indexOfArray].quantity === "Out of Stock"
    ) {
      product[indexOfArray].quantity = "Out of Stock";
    } else {
      product[indexOfArray].quantity =
        Number(product[indexOfArray].quantity) - 1;
    }
    setProducts([...product]);
  };

  const editQty = (event) => {};

  const delQty = (event) => {
    const indexOfArray = event.target.value;
    product.splice(indexOfArray,1)
    setProducts([...product])
  };

  return (
    <>
      {/* search box */}
      <div className="table">
        <div>
          <form>
            <input
              type="name"
              name="text"
              placeholder="Search Here !!!!"
              class="filter-search"
            />
          </form>
        </div>

        <Table striped bordered hover variant="dark" responsive="sm">
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
              <th>
                <DropdownButton id="dropdown-basic-button" title="Quantity">
                  <Dropdown.Item href="Out of Stock">
                    Out of Stock
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Less then 1</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Less then 5</Dropdown.Item>
                </DropdownButton>
              </th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
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
                      variant="danger"
                      onClick={(event) => delQty(event)}
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
    </>
  );
};

export default DisplayProducts;
