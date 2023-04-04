import React from 'react'
import Home from "../pages/Home";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Menu from "../pages/Menu";
import {
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/menu" element={<Menu />} />
                <Route exact path="/cart" element={<Cart />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes