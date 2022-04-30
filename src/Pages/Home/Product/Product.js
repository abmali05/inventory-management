import React from 'react';

const Product = ({ product }) => {
    const { _id, name, img, description, price, quantity, supplier } = product;
    return (
        <div>
            <h2>This product</h2>
            <h4>{name}</h4>
            <h4>{price}</h4>
            <h4>{quantity}</h4>
            <img src={img} alt="" />
        </div>
    );
};

export default Product;