import React from 'react';
import img from '../Banner/banner1.jpg';

const Banner = () => {
    return (
        <div style={{
            backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center",
            height: "350px"

        }}>
            <div className=" h-100 text-white d-flex justify-content-center align-items-center">
                <div>
                    <h2 className='bg-danger p-2'> Welcome to our Divine Inventory!</h2>
                    <h5 className='bg-light p-2 text-dark'>We are here to deliver the product at your door step.</h5>

                </div>
            </div>


        </div>
    );
};

export default Banner;