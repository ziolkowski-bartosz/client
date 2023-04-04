import React from 'react'
import HomeLayout from "../components/Home";
import Header from '../components/Header';
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="home-motion-div"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <HomeLayout />
    </motion.div>
  );
}

export default Home