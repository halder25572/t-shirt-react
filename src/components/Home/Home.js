import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';

const Home = () => {
    const tShirt = useLoaderData();
    const [cart, setCart] = useState([]);

    // handle add to cart
    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if(exists){
            alert('T-Shirt Already Added');
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart); 
        }
        // const newCart = [...cart, tshirt];
        // setCart(newCart);
    }

    // remove Handle Item
    const removeHandleItem = tshirt => {
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining);
    }
    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {
                  tShirt.map(tshirt => <Tshirt 
                    key={tshirt.id}
                     tshirt={tshirt}
                      handleAddToCart={handleAddToCart}
                      ></Tshirt>)  
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} removeHandleItem={removeHandleItem}></Cart>
            </div>
        </div>
    );
};

export default Home;