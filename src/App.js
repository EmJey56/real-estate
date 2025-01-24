import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/home/home.jsx";
import Contact from "./components/contact/contact.jsx";
import PropertyDetail from "./components/propertydetails/propertydetails.jsx";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
