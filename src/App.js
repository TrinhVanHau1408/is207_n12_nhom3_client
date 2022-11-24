import './App.css';
// import Layout from './components/Layout';
import {  Routes, BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/Home'
import CheckoutPage from './pages/Checkout'
import ProductListPage from './pages/ProductList'

const styles = {
  app: "",
  btnViewMore: "py-2 px-4 bg-[#2A254B] text-white rounded-lg sm:w-fit w-full mx-auto text-center hover:md:scale-110 hover:bg-yellow-500 duration-200",
}

function App() {
  return (
    // <div className=""><CheckoutPage /></div>
    <BrowserRouter> 
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<CheckoutPage />} path="/checkout" />
        <Route element={<ProductListPage />} path="/product" />
      </Routes>     
    </BrowserRouter>
  );
}

export default App;
