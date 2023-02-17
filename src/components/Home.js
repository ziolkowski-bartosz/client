import React from 'react'
import "../styles/Home.css"
import Header from "../components/Header";
import ContactForm  from '../components/ContactForm';

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-area">
        <h2 className="home-h2">Let us make you feel at Poland</h2>
        <ContactForm />
      </div>
    </>
  );
}

export default Home