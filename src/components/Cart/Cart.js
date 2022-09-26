import React from 'react';
import './Cart.css';

const Cart = (props) => {
    return (
        <div>
            <h4>Order summary</h4>
            <p>Selected item: {props.cart.length}</p>
        </div>
    );
};

export default Cart;