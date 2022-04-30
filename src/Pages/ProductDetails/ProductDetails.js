import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${productId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [])


    return (
        <div>
            <h2>This is product Details</h2>
            <h2>{product.name}</h2>
            {console.log(product?.name)}
        </div>
    );
};

export default ProductDetails;