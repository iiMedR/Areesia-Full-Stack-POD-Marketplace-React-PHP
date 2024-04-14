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
import Login from './Pages/Login'
import ClientSignup from './Pages/ClientSignup';
import ClientLogin from './Pages/ClientLogin';


class App extends Component  {
  render(){
    return (
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/Signup" element={<DesignerLoggedIn> <Signup /> </DesignerLoggedIn>}  />
            <Route path="/login" element={<DesignerLoggedIn> <Login /> </DesignerLoggedIn>}  />
            <Route path="/client-signup" element={<ClientLoggedIn> <ClientSignup /> </ClientLoggedIn>}  />
            <Route path="/client-login" element={<ClientLoggedIn> <ClientLogin /> </ClientLoggedIn>}  />
          </Routes>
        </Router>
    );
  }

}

export default App;
