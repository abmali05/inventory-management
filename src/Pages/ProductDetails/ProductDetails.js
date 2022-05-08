import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';


const ProductDetails = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const backToHome = () => {
        navigate('/');
    }


    useEffect(() => {

        const url = `http://localhost:5000/inventory/${productId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setLoading(false);
            });


    }, [product, productId]);

    if (loading) {
        return <Loading></Loading>
    }
    const deliver = () => {

        const url = `http://localhost:5000/inventory/${productId}`;

        const productQuantity = parseInt(product.quantity);

        if (productQuantity >= 1) {
            const newQuantity = {
                quantity: productQuantity - 1,
            };

            console.log(newQuantity);
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newQuantity)
            })
                .then(res => res.json())
                .then(data => setProduct(data));


        }


    }


    const restock = (event) => {
        event.preventDefault();
        const addQuantity = event.target.quantity.value;

        if (addQuantity <= 0 || addQuantity == null || addQuantity == undefined) {
            return (alert('Please insert a value greater than 0'));
        }

        const quantityInt = parseInt(addQuantity);

        // const CurrentQuantity = quantityInt + parseInt(product.quantity);
        // const newobject = { ...product, quantity: CurrentQuantity }

        const newQuantity = {
            quantity: parseInt(product.quantity) + quantityInt,
        };

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
        event.target.reset();

    }


    return (
        <div>

            <div className='container my-5'>
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <div className="card h-100">
                            <img src={product.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">{product.name}</h4>
                                <p className="card-text fw-bold">Price: ${product.price}</p>
                                <p className="card-text fw-bold">Quantity: {product.quantity === 0 ? ' Sold out' : product.quantity}

                                </p>
                                <p className="card-text fw-bold">Supplier: {product.supplier}</p>
                                <p className="card-text "><b>Description:</b> {product.description}


                                </p>
                            </div>
                            <div className="card-footer">
                                <div className="d-grid">
                                    <button className='btn btn-danger' onClick={deliver} disabled={product.quantity === 0 ? true : false}><i class="bi bi-truck"></i> Delivered</button>
                                    {/* <input type="button" className='btn btn-primary' onClick={deliver} value=" Delivered" disabled={product.quantity === 0 ? true : false}
                                    /> */}

                                </div>

                                <form onSubmit={restock} >

                                    <div className="row my-3">

                                        <div className=" d-block">
                                            <input type="number" name="quantity" className="form-control" id="inputEmail4" placeholder='Insert value to restock/Add More' />
                                        </div>
                                    </div>

                                    <div className='row mb-3 w-50 mx-auto'>
                                        <button className="  btn btn-danger"><i className="bi bi-plus-square"></i> Restock</button>

                                    </div>

                                </form>


                            </div>
                        </div>
                        <div className='text-center mt-2'> <Link to="/" className="  btn btn-danger" >Back</Link></div>

                    </div>


                </div>
            </div>


        </div>
    );
};

export default ProductDetails;