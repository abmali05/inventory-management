import React from 'react';
import img from '../Banner/banner1.jpg';

const Banner = () => {
    return (
        <div style={{
            backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center",
            height: "350px"

        }}>
            <div class=" h-100 text-white d-flex justify-content-center align-items-center">
                <div>
                    <h2 className='bg-danger p-2'> Welcome to our Divine Inventory!</h2>
                    <h5 className='bg-light p-2 text-dark'>We are here to deliver the product at your door step.</h5>

                </div>
            </div>

            {/* <h2 className='p-5'>hello</h2> */}

            {/* <img src={img} class="img-fluid" alt="..."></img> */}
            {/* <img src="https://images.pexels.com/photos/4487361/pexels-photo-4487361.jpeg?auto=compress&cs=tinysrgb&h=750&w=1060" class="img-fluid" alt="..."></img> */}

            {/* <div class="card bg-dark text-white">
                <img src={img} class="card-img opacity-50" alt="..." />
                <div class="card-img-overlay ">
                    <h5 class="card-title mt-5">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text">Last updated 3 mins ago</p>
                </div>
            </div>
            <div class=" h-100 d-flex justify-content-center align-items-center">
                <div>
                    <img src={img} class="card-img opacity-50" alt="..." />
                    Items are Centered horizontally and vertically
                </div>
            </div> */}



        </div>
    );
};

export default Banner;