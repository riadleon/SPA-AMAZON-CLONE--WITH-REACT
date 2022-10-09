import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './ReviewItem.css'
const ReviewItem = ({ product }) => {
    const { name, price, quantity, img, shipping } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">

                <div className="review-detials">
                    <p> {name} </p>
                    <p> Price: ${price} </p>
                    <p> Shipping: ${shipping} </p>
                    <p> Quantity: {quantity} </p>
                </div>
                <div className="delete-container">
                    <button className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashCan}></FontAwesomeIcon>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ReviewItem;