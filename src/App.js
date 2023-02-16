import './App.css';
import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  const [listOfMeals, setListOfMeals] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((res) => {
      setListOfMeals(res.data);
    });
  }, [])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
