import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const PDetail = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        // Runs ONCE after initial rendering
        // and after every rendering ONLY IF `prop` or `state` changes
        const url = `http://localhost:5000/inventory/${productId}`;

        // const result = expensiveOp(props.value);

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
    // if ((product.description).length > 50) {
    //     product.description = product.description.substring(0, 50) + " ...";
    // }

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
            // .then(data => setProduct(data));
            .then(data => {
                const updateInventory = product.find(product => (product._id === productId));
                setProduct(updateInventory);
            })
        event.target.reset();
        // window.location.reload(false);

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

                                    {product.quantity === 0 ? 'Sold out' : product.quantity}

                                </p>
                                <p className="card-text fw-bold">Supplier: {product.supplier}</p>
                                <p className="card-text "><b>Description:</b>
                                    {product.description}


                                </p>
                            </div>
                            <div className="card-footer">
                                <div className="d-grid">
                                    <input type="button" className='btn btn-primary' onClick={deliver} value="Delivered" disabled={product.quantity === 0 ? true : false}
                                    />

                                </div>

                                <form onSubmit={restock} >

                                    <div className="row my-3">

                                        <div className=" d-block">
                                            <input type="number" name="quantity" className="form-control" id="inputEmail4" placeholder='Insert value to restock/Add More' />
                                        </div>
                                    </div>

                                    <div className='row mb-3 w-50 mx-auto'>
                                        <input type="submit" className="  btn btn-primary" value="Restock/Add More" />
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

export default PDetail;