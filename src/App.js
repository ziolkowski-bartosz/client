import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/styles/App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SiteContent from "./components/SiteContent";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <SiteContent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
