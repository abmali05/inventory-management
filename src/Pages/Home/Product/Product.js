import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, description, price, quantity, supplier } = product;

    const pageNavigate = useNavigate();

    const productDetails = id => {
        pageNavigate(`/inventory/${id}`);
    }

    return (

        <div className='container'>
            <div className="row">
                <div className="col">
                    <div className="card h-100 ">
                        <img src={img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{price}</p>
                            <p className="card-text"> {quantity === 0 ? 'Sold out' : product.quantity}</p>
                            <p className="card-text">{supplier}</p>
                            <p className="card-text">
                                {/* {description} */}
                                {(description.length > 100 ? description.substring(0, 100) + " ..." : description)}
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