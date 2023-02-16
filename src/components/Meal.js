import React from 'react'
import '../styles/Meal.css';
import mealImage from '../assets/meals_photos/kluski_slaskie.jpg'

export default function Meal(props) {
    return (
        <div className="container">
            <h2>{props.name}</h2>
            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit minima velit aliquid ipsa magnam tempora ipsum ullam laborum? Natus, adipisci perspiciatis omnis</p>
            <button className="buy">Add to cart</button>
            <div className="img-container">
                <img alt="Image of a meal" src={mealImage} />
            </div>
        </div>
    );
}
