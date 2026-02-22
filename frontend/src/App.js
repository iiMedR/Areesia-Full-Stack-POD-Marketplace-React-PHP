import './App.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ClientLoggedOut from './components/Client/LoggedOutRoute';
import ClientLoggedIn from './components/Client/LoggedInRoute';
import DesignerLoggedOut from './components/Designer/DesignerLoggedOutRoute';
import DesignerLoggedIn from './components/Designer/DesignerLoggedInRoute';
import Signup from './Pages/Signup';
import Confirmation from './Pages/Confirmation';
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard';
import Settings from './Pages/Settings';
import Addnewdesign from './Pages/Addnewdesign';
import Managedesigns from './Pages/Managedesigns';
import Withdrawal from './Pages/Withdrawal';
import Hoodies from './Pages/Hoodies';
import HomePage from './Pages/HomePage'
import Products from './Pages/Products';
import Product from './Pages/Product';
import ClientSignup from './Pages/ClientSignup';
import ClientLogin from './Pages/ClientLogin';
import ClientSettings from './Pages/ClientSettings';
import Cart from './Pages/Cart';
import ClientOrders from './Pages/ClientOrders';
import ClientProfile from './Pages/ClientProfile';
import Invoice from './Pages/Invoice';
import DesignerPage from './Pages/DesignerProfile';


class App extends Component  {
  render(){
    return (
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />}  />
            <Route path="/Signup" element={<DesignerLoggedIn> <Signup /> </DesignerLoggedIn>}  />
            <Route path="/confirmation" element={<DesignerLoggedIn> <Confirmation /> </DesignerLoggedIn>}  />
            <Route path="/login" element={<DesignerLoggedIn> <Login /> </DesignerLoggedIn>}  />
            <Route path="/dashboard" element={<DesignerLoggedOut> <Dashboard /> </DesignerLoggedOut>}  />
            <Route path="/settings" element={<DesignerLoggedOut> <Settings /> </DesignerLoggedOut>}  />
            <Route path="/Add-new-design" element={<DesignerLoggedOut> <Addnewdesign /> </DesignerLoggedOut>}  />
            <Route path="/manage-designs" element={<DesignerLoggedOut> <Managedesigns /> </DesignerLoggedOut>}  />
            <Route path="/withdrawals" element={<DesignerLoggedOut> <Withdrawal /> </DesignerLoggedOut>}  />
            <Route path="/Add-new-design/hoodies" element={<DesignerLoggedOut> <Hoodies /> </DesignerLoggedOut>}  />
            <Route path="/products" element={<Products />}  />
            <Route path="/products/product" element={<Product />}  />
            <Route path="/client-signup" element={<ClientLoggedIn> <ClientSignup /> </ClientLoggedIn>}  />
            <Route path="/client-login" element={<ClientLoggedIn> <ClientLogin /> </ClientLoggedIn>}  />
            <Route path="/profile" element={<ClientLoggedOut> <ClientProfile /> </ClientLoggedOut>}  />
            <Route path="/client-settings" element={<ClientLoggedOut> <ClientSettings /> </ClientLoggedOut>}  />
            <Route path="/cart" element={<Cart />}  />
            <Route path="/Orders" element={<ClientLoggedOut> <ClientOrders /> </ClientLoggedOut>}  />
            <Route path="/invoice" element={<ClientLoggedOut> <Invoice /> </ClientLoggedOut>}  />
            <Route path="/designer" element={<DesignerPage />}  />
          </Routes>
        </Router>
    );
  }

}

export default App;
