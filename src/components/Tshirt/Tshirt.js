import React from 'react';
import './Tshirt.css';

const Tshirt = ({tshirt, handleAddToCart}) => {
    const {picture, name, price, gender} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>Name: <small>{name}</small></h2>
            <p>Price: <small>{price}</small></p>
            <p><small>{gender}</small></p>
            <button onClick={() => handleAddToCart(tshirt)}>Buy This</button>
        </div>
    );
};

export default Tshirt;