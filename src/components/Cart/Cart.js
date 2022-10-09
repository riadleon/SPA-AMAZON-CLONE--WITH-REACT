import React from 'react';
import './Cart.css';

const Cart = ({ cart, clearCart }) => {
    // const 
    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;

    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = parseFloat((total + shipping + tax).toFixed(2));
    return (
        <div className='cart'>
            <h4 className='Order'>Order summary</h4>
            <p>Selected item: {quantity}</p>
            <p className='total-price'>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)} </h5>
            <button onClick={clearCart}>Clear</button>
        </div>
    );
};

export default Cart;