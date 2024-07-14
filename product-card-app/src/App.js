import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
function App() {
  return (
    <div className="App">
            <h1>Product List</h1>
            <ProductList />
        </div>
  );
}

export default App;
