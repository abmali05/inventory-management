import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="container bg-danger text-white text-center">


            <div className="row d-flex justify-content-between pt-5">
                <div className="col-md-4 mb-3">
                    <h4> Follow us: <i className="bi bi-facebook"></i> <i className="bi bi-youtube"></i> <i className="bi bi-twitter"></i> <i className="bi bi-linkedin"></i>  </h4>                </div>
                <div className="col-md-4 mb-3">
                    <h4>Quick Links</h4>

                    <Link to="/manageinventories" className='text-white text-decoration-none'> Inventory</Link><br />
                    <Link to="/myproduct" className='text-white text-decoration-none'> My Product</Link><br />
                    <Link to="/addproduct" className='text-white text-decoration-none'> Add Product</Link>
                </div>
                <div className="col-md-4 mb-3">
                    <h4>Subscribe Newsletter</h4>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter Email" />
                        <button className="btn btn-outline-light" type="button" id="button-addon2">Button</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Footer;