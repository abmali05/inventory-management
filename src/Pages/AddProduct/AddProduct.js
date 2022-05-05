import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddProduct = () => {

    const [user] = useAuthState(auth);

    const ProductSubmit = event => {
        event.preventDefault();

        const product = {
            email: user.email,
            name: event.target.name.value,
            description: event.target.description.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            supplier: event.target.supplier.value,
            img: event.target.img.value
        }

        fetch('http://localhost:5000/addproduct', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product),

        })
            .then(res => res.json())
            .then(data => data)



    }

    return (
        <div className='row mt-5'>
            <h2 className='text-center mb-3'>Please Add Product</h2>
            <form onSubmit={ProductSubmit} className="w-50 mx-auto">

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" name="email" className="form-control" placeholder='your email' value={user.email} readOnly />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" name="name" className="form-control" placeholder='Product Name' required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <input type="text" name="description" className="form-control" placeholder='Description' required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Price</label>
                    <div className="col-sm-10">
                        <input type="text" name="price" className="form-control" placeholder='Price' required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Quantity</label>
                    <div className="col-sm-10">
                        <input type="text" name="quantity" className="form-control" placeholder='Quantity' required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Supplier</label>
                    <div className="col-sm-10">
                        <input type="text" name="supplier" className="form-control" placeholder='Supplier' required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Img URL</label>
                    <div className="col-sm-10">
                        <input type="text" name="img" className="form-control" placeholder='Image URL' required />
                    </div>
                </div>

                <div className='row mb-3 w-50 mx-auto'>
                    <input type="submit" className="  btn btn-danger" value="Add Product" />
                </div>

            </form>
        </div>
    );
};

export default AddProduct;