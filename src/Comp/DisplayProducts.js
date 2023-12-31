import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import "./DisplayProducts.css";

const DisplayProducts = ({
  products,
  increQty,
  decreQty,
  editQty,
  delQty,
  searchProducts,
  filterQuantity,
}) => {

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
              onChange={(event) => searchProducts(event)}
            />
          </form>
        </div>

        <Table striped bordered hover variant="dark" className="table">
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
                <select
                  onChange={(e)=>filterQuantity(e)}
                  className="select-options"
                >
                  <option value="total">Quantity</option>
                  <option value="5">Less then 5</option>
                  <option value="10">Less then 10</option>
                  <option value="0">Out of Stock</option>
                </select>
              </th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => {
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
