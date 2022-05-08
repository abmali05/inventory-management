import React from 'react';
import img1 from './samsung-logo1.png';
import img2 from './xiaomi-logo5.png';
// import img2 from './xiaomi-logo5.png';
import img3 from './vivo-logo3.png';

const TopBrands = () => {
    return (

        <div className="container my-5">
            <h2 className='text-center mb-3'>Top Brands</h2>

            <div className="row text-center">
                <div className="col-md-4 mb-2">
                    <img src={img1} alt="..." style={{ width: "250px", height: "auto" }} className='img-responsive' />
                </div>
                <div className="col-md-4 mb-4">
                    <img src={img3} alt="..." style={{ width: "250px", height: "auto" }} className='img-responsive' />
                </div>
                <div className="col-md-4 mb-2">
                    <img src={img2} alt="..." style={{ width: "240px", height: "auto" }} className='img-responsive' />
                </div>

            </div>
        </div>

    );
};

export default TopBrands;