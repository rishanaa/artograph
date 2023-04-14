import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Page/Home';
import Cart from './Components/Cart';
import Header from './Page/Header';
import CraftProducts from './Components/CraftProducts';
import ArtProducts from './Components/ArtProducts';
import HomeDecor from './Components/HomeDecor';
import Login from './Page/Login';
import SingleView from './Components/SingleView';
import SingleView1 from './Components/SingleView1';
import SellerLogin from './Page/SellerLogin';
import SellerRegister from './Components/SellerRegister';
import CreateProduct from './Page/Dashboard/CreateProduct';
import AllProducts from './Page/Dashboard/AllProducts';
import UpdateProduct from './Page/Dashboard/UpdateProduct';
import Products from './Components/Products';


function App() {
  return (
    
       
       <Router>
       <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products/>} />
                <Route path="/user-cart" element={<Cart/>} />
                <Route path="/Craft-products" element={<CraftProducts/>} />
                <Route path="/Art-products" element={<ArtProducts/>} />
                <Route path="/Home-decor" element={<HomeDecor/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/single-view/:id" element={<SingleView/>} />
                <Route path="/single-view1" element={<SingleView1/>} />
                <Route path="/seller-login" element={<SellerLogin/>} />
                <Route path="/seller-register" element={<SellerRegister/>} />
                <Route path="/add-items" element={<CreateProduct/>} />
                <Route path="/all-products" element={<AllProducts/>} />
                <Route path="/update-product/:id" element={<UpdateProduct/>} />
                
                
            </Routes>
        </Router>
    
    
  );
}

export default App;
