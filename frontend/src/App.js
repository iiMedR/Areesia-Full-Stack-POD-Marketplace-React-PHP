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
import Settings from './Pages/Settings';
import ClientSignup from './Pages/ClientSignup';
import ClientLogin from './Pages/ClientLogin';
import ClientSettings from './Pages/ClientSettings';
import ClientProfile from './Pages/ClientProfile';


class App extends Component  {
  render(){
    return (
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/Signup" element={<DesignerLoggedIn> <Signup /> </DesignerLoggedIn>}  />
            <Route path="/confirmation" element={<DesignerLoggedIn> <Confirmation /> </DesignerLoggedIn>}  />
            <Route path="/login" element={<DesignerLoggedIn> <Login /> </DesignerLoggedIn>}  />
            <Route path="/settings" element={<DesignerLoggedOut> <Settings /> </DesignerLoggedOut>}  />
            <Route path="/client-signup" element={<ClientLoggedIn> <ClientSignup /> </ClientLoggedIn>}  />
            <Route path="/client-login" element={<ClientLoggedIn> <ClientLogin /> </ClientLoggedIn>}  />
            <Route path="/profile" element={<ClientLoggedOut> <ClientProfile /> </ClientLoggedOut>}  />
            <Route path="/client-settings" element={<ClientLoggedOut> <ClientSettings /> </ClientLoggedOut>}  />
          </Routes>
        </Router>
    );
  }

}

export default App;
