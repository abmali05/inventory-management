import React from 'react';
import { useNavigate } from 'react-router-dom';


const Product = ({ product }) => {
    const { _id, name, img, description, price, quantity, supplier } = product;

    const pageNavigate = useNavigate();

    const productDetails = id => {
        pageNavigate(`/inventory/${id}`);
    }

    return (

        <div className='container '>
            <div className="row ">
                <div className="col ">
                    <div className="card  ">
                        <img src={img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">{name}</h4>
                            <p className="card-text m-0 fw-bold">Price: ${price}</p>
                            <p className="card-text m-0 fw-bold">Quantity: {quantity === 0 ? 'Sold out' : product.quantity}</p>
                            <p className="card-text fw-bold">Supplier: {supplier}</p>
                            <p className="card-text">
                                {/* {description} */}
                                {(description.length > 35 ? description.substring(0, 35) + " ..." : description)}
                            </p>
                        </div>
                        <div className="card-footer">
                            <div className="d-grid">
                                <button onClick={() => productDetails(_id)} className="btn btn-danger" type="button"><i class="bi bi-arrow-clockwise"></i> Update</button>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default Product;