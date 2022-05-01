import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState({});


    useEffect(() => {
        const url = `http://localhost:5000/inventory/${productId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [])

    const increase = (event) => {
        event.preventDefault();

        const url = `http://localhost:5000/inventory/${productId}`;
        const newQuantity = {
            quantity: product.quantity - 1,
        };
        console.log(product.quantity);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newQuantity)
        })
            .then(res => res.json())
            .then(data => setProduct(data));
        window.location.reload(false);
        return;

    }


    return (
        <div>
            <h2>This is product Details</h2>
            <h2>{product.name}</h2>
            <h2>{product.quantity}</h2>
            <input type="button" onClick={increase} value='Decr' />

            <div className='container'>
                <div className='col'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">{product.name}</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark
                                    <img src={product.img} alt="" />
                                </td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>{product.price}</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            {/* <form onSubmit={increase} className="w-50 mx-auto">
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" name="name" className="form-control" id="inputEmail3" placeholder='your name' value={product.name} disabled />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputEmail4" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" name="quantity" className="form-control" ref={quantityRef} id="inputEmail4" value={product.quantity} placeholder='your email' />
                    </div>
                </div>

                <div className='row mb-3 w-50 mx-auto'>
                    <input type="submit" className="  btn btn-primary" value="Sign Up" />
                </div>

            </form> */}
        </div>
    );
};

export default ProductDetails;