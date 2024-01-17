import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Signup from './Signup';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/update/:id" element={<UpdateProduct/>}/>
        <Route path="/profile" element={<h1>Profile</h1>}/>
        <Route path="/logout" element={<h1>logout Component</h1>}/>
         </Route>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;
