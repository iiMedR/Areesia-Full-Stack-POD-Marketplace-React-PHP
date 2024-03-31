import './App.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';


class App extends Component  {
  render(){
    return (
        <Router>
          <ScrollToTop />
          <Routes>
          </Routes>
        </Router>
    );
  }

}

export default App;
