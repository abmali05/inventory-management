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

    const deliver = (event) => {
        event.preventDefault();


        const url = `http://localhost:5000/inventory/${productId}`;
        if (product.quantity >= 1) {
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


    }
    // if ((product.description).length > 50) {
    //     product.description = product.description.substring(0, 50) + " ...";
    // }

    const restock = (event) => {
        event.preventDefault();
        const quantity = event.target.quantity.value;

        const newQuantity = { quantity };

        const url = `http://localhost:5000/inventory/${productId}`;

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



            <div className='container'>
                <div className="row w-50 mx-auto">
                    <div className="col">
                        <div className="card h-100">
                            <img src={product.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Brand: {product.name}</h5>
                                <p className="card-text fw-bold">Price: ${product.price}</p>
                                <p className="card-text fw-bold">Quantity:

                                    {product.quantity === '0' ? 'Sold out' : product.quantity}
                                </p>
                                <p className="card-text fw-bold">Supplier: {product.supplier}</p>
                                <p className="card-text "><b>Description:</b>         {product.description}</p>
                            </div>
                            <div className="card-footer">
                                <div className="d-grid">
                                    <input type="button" className='btn btn-primary' onClick={deliver} value={product.quantity === '0' ? 'Restock' : 'Delivered.'}
                                    />

                                </div>

                                <form onSubmit={restock} >

                                    <div className="row my-3">

                                        <div className=" d-block">
                                            <input type="text" name="quantity" className="form-control" id="inputEmail4" placeholder='Insert value' />
                                        </div>
                                    </div>

                                    <div className='row mb-3 w-50 mx-auto'>
                                        <input type="submit" className="  btn btn-primary" value="Restock" />
                                    </div>

                                </form>


                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    );
};

export default ProductDetails;