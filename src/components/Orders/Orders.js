import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const products = useLoaderData();
    return (
        <div>
            <h3>This is orders : {products.length} </h3>
        </div>
    );
};

export default Orders;