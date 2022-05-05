import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import './Products';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (

        <div className='container mt-5'>
            <h2 className='text-center mb-3'>Our Inventory</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">

                {products.slice(0, 6).map(product => <Product
                    key={product._id}
                    product={product}></Product>)
                }

            </div>
            <div className=' text-center mt-4 '>
                <Link to="/manageinventories" className=" px-5 btn btn-danger" >Manage Items</Link>
            </div>

        </div>

    );
};

export default Products;