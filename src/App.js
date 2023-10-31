import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //React Bootstrap
import AddProduct from './Comp/AddProduct';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddProduct/>
      </header>
    </div>
  )
}

export default App;
