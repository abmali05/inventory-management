import React from 'react';
import img1 from './samsung-logo.png';
import img2 from './apple-logo.png';
import img3 from './vivo-logo.png';

const TopBrands = () => {
    return (
        <div>
            <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                    <img src={img1} alt="..." style={{ width: "250px", height: "auto" }} className='img-responsive' />
                </div>
                <div class="flex-grow-1 ms-3">
                    This is some content from a media component. You can replace this with any content and adjust it as needed.
                </div>
            </div>
            <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                    <img src={img2} alt="..." style={{ width: "100px", height: "auto" }} className='img-responsive' />
                </div>
                <div class="flex-grow-1 ms-3">
                    This is some content from a media component. You can replace this with any content and adjust it as needed.
                </div>
            </div>
            <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                    <img src={img3} alt="..." style={{ width: "250px", height: "auto" }} className='img-responsive' />
                </div>
                <div class="flex-grow-1 ms-3">
                    This is some content from a media component. You can replace this with any content and adjust it as needed.
                </div>
            </div>
        </div>
    );
};

export default TopBrands;