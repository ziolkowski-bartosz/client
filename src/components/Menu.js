import React from 'react'
import Meal from './Meal'
import "../styles/Menu.css"
import axios from "axios";
import { useState, useEffect } from "react";

const Menu = () => {
    const [listOfMeals, setListOfMeals] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/meals").then((res) => {
            setListOfMeals(res.data);
        });
    }, []);

    return (
        <>
            <h1>Meals</h1>
            <div className='menu'>
                {listOfMeals.map((meal) => {
                    return <Meal name={meal.name} />;
                })}
            </div>
        </>
    );
}

export default Menu