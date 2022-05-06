import React from 'react';
import img1 from './samsung-logo1.png';
import img2 from './xiaomi-logo5.png';
// import img2 from './xiaomi-logo5.png';
import img3 from './vivo-logo3.png';

const TopBrands = () => {
    return (

        <div class="container mt-5">
            <h2 className='text-center mb-3'>Top Brands</h2>

            <div class="row text-center">
                <div class="col-md-4 mb-2">
                    <img src={img1} alt="..." style={{ width: "250px", height: "auto" }} className='img-responsive' />
                </div>
                <div class="col-md-4 mb-4">
                    <img src={img3} alt="..." style={{ width: "250px", height: "auto" }} className='img-responsive' />
                </div>
                <div class="col-md-4 mb-2">
                    <img src={img2} alt="..." style={{ width: "240px", height: "auto" }} className='img-responsive' />
                </div>
                {/* <div class="col-md-3">
                    <img src={img3} alt="..." style={{ width: "250px", height: "auto" }} className='img-responsive' />
                </div> */}
            </div>
        </div>
        // <div>
        //     <div class="d-flex align-items-center">
        //         <div class="flex-shrink-0">
        //             <img src={img1} alt="..." style={{ width: "250px", height: "auto" }} className='img-responsive' />
        //         </div>
        //         <div class="flex-grow-1 ms-3">
        //             This is some content from a media component. You can replace this with any content and adjust it as needed.
        //         </div>
        //     </div>
        //     <div class="d-flex align-items-center">
        //         <div class="flex-shrink-0">
        //             <img src={img2} alt="..." style={{ width: "100px", height: "auto" }} className='img-responsive' />
        //         </div>
        //         <div class="flex-grow-1 ms-3">
        //             This is some content from a media component. You can replace this with any content and adjust it as needed.
        //         </div>
        //     </div>
        //     <div class="d-flex align-items-center">
        //         <div class="flex-shrink-0">
        //             <img src={img3} alt="..." style={{ width: "250px", height: "auto" }} className='img-responsive' />
        //         </div>
        //         <div class="flex-grow-1 ms-3">
        //             This is some content from a media component. You can replace this with any content and adjust it as needed.
        //         </div>
        //     </div>
        // </div>
    );
};

export default TopBrands;