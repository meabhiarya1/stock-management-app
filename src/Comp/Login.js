import "./Login.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = ({ selected, setSelected, handleLoginForm }) => {
  return (
    <Form className="login-form" onSubmit={(event) => handleLoginForm(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Mobile Number"
          name="mobile_num"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />
      </Form.Group>

      <select
        className="select-login"
        onChange={(e) => setSelected(e.target.value)}
        value={selected}
        name="shop"
      >
        <option value="shop-1">Gandhi Chowk</option>
        <option value="shop-2">Shop 2</option>
        <option value="shop-3">Shop 3</option>
      </select>

      <Button variant="primary" type="submit" className="login-button">
        Login
      </Button>
    </Form>
  );
};

export default Login;
