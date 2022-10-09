import React from 'react';
import './ReviewItem.css'
const ReviewItem = ({ product }) => {
    const { name, price, quantity, img } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">

                <div className="review-detials">
                    <p> {name} </p>
                    <p> Price: {price} </p>
                    <p> Quantity: {quantity} </p>
                </div>
                <div className="delete-container">
                    <button>Delete</button>
                </div>

            </div>
        </div>
    );
};

export default ReviewItem;