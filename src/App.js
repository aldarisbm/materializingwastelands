import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ContactUs from './components/ContactUs'
import HomePage from './components/HomePage'
import Footer from './components/Footer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
  <Router>
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/contact-us" component={ContactUs} />
      <Footer/>
    </div>
	</Router>
  );
}

export default App;
