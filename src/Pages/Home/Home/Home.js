import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import Products from '../Products/Products';

const Home = () => {
    // const [loading, setLoading] = useState(true);

    // if (loading) {
    //     setLoading(false)
    // }

    return (

        <div className='container'>


            <div className='row'>
                <Products></Products>
                <Link to="/manageinventories" className="btn btn-primary w-50 mx-auto" >Manage Items</Link>
            </div>


        </div>
    );
};

export default Home;