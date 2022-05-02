import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='container mb-4'>
            <div className="row row-cols-1 row-cols-md-3 g-4">

                {products.slice(0, 6).map(product => <Product
                    key={product._id}
                    product={product}></Product>)
                }

            </div>
        </div>
    );
};

export default Products;