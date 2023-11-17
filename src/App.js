import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; //React Bootstrap
import { useState } from "react";
import Pages from "./Pages";

function App() {

  //to handle login

  const [selected, setSelected] = useState("shop-1");

  const handleLoginForm = (event) => {
    event.preventDefault();
    const loginData = event.target;
    const loginFormData = {
      mobile_num: loginData.mobile_num.value,
      password: loginData.password.value,
      shop: selected,
    };
    console.log(loginFormData);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <Login setSelected={setSelected} selected={selected} handleLoginForm={handleLoginForm}/> */}
        <Pages />
      </header>
    </div>
  );
}

export default App;
