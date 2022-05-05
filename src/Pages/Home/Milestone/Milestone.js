import React from 'react';
import './Milestone.css';

const Milestone = () => {
    return (
        <div className='container'>
            <h2 className='text-center mt-5'>Milestone</h2>
            <div className="row shadow-lg p-3 mb-5 bg-body rounded">
                <div className="col text-white text-center bg-success">
                    <p className=' icon-size fw-bolder  '> <i className="bi bi-truck"></i></p>
                    <h2>Delivered 5000+</h2>

                </div>
                <div className="col text-white text-center bg-warning">
                    <p className=' icon-size fw-bolder  '> <i class="bi bi-table"></i></p>
                    <h2>Products 8000+</h2>
                </div>
                <div className="col text-white text-center bg-info">
                    <p className=' icon-size fw-bolder  '> <i class="bi bi-people"></i></p>
                    <h2>Users 2000+</h2>
                </div>
            </div>

        </div >
    );
};

export default Milestone;