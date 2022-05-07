import React, { useState } from 'react';

import Loading from '../../Shared/Loading/Loading';
import TopBrands from '../../TopBrands/TopBrands';
import Banner from '../Banner/Banner';
import Milestone from '../Milestone/Milestone';
import Products from '../Products/Products';

const Home = () => {


    return (

        <div>



            <Banner></Banner>
            <Products></Products>
            <Milestone></Milestone>
            <TopBrands></TopBrands>




        </div>
    );
};

export default Home;