import React from 'react';
import './Cart.css';

const Cart = ({cart, removeHandleItem}) => {

    let message;
    if(cart.length === 0){
        message = <p>Please buy at least one item</p>
    }
    else{
        message = <p>Thanks For Buying</p>
    }
    return (
        <div>
            <h2 className={cart.length === 2 ? `orange` : `yellow`}>Order Summary</h2>
            <p className={`bold ${cart.length === 2 ? 'blue' : 'green'}`}>Cart Quantity: {cart.length}</p>
            {
                cart.map(tshirt => <p key={tshirt.id}>
                    {tshirt.name}
                    <button onClick={() => removeHandleItem(tshirt)}>Close</button>
                </p>
                )
            }
            {
                message
            }
            {
                cart.length === 3 ? <p>Three gift</p> : <p>buy kor</p>
            }
            {cart.length === 2 && <h2>Double Item</h2>}
        </div>
    );
};

export default Cart;