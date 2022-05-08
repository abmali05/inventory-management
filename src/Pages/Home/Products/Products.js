import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import './Products';
import Loading from '../../Shared/Loading/Loading';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://protected-scrubland-50002.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setProducts(data));
        setLoading(false);
    }, []);

    if (loading) {
        return <Loading></Loading>
    }
    return (

        <div className='container mt-5'>
            <h2 className='text-center mb-3'>Our Inventory</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 ">

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