import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import 'react-toastify/dist/ReactToastify.css';

const ManageInventories = () => {

    const [inventory, setInventory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://protected-scrubland-50002.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => {
                setInventory(data);
                setLoading(false);
                console.log(data);
            });
    }, [])

    if (loading) {
        return <Loading></Loading>
    }

    const deleteItem = productId => {
        const confirmDelete = window.confirm("Are you sure to delete?");
        if (confirmDelete) {
            const url = `https://protected-scrubland-50002.herokuapp.com/inventory/${productId}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const updateInventory = inventory.filter(inventory => inventory._id !== productId);
                    console.log(updateInventory);
                    setInventory(updateInventory);
                    toast('Product Deleted Successfully');

                })
        }
    }
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='d-flex justify-content-between'>
                    <h2>Total Products: {inventory.length}</h2>
                    <Link to="/addproduct" className="  btn btn-danger" >Add Product</Link>
                </div>

                <small><i>Decending Order</i></small>
                <table className="table table-hover table-bordered border-primary">
                    <thead>
                        <tr>

                            <th scope="col">Picture</th>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Supplier</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody >
                        {
                            inventory.map(inventory =>


                                <tr key={inventory._id}>


                                    <td> <img src={inventory.img} alt="" width="100px" />
                                    </td>
                                    <td> {inventory.name}
                                    </td>
                                    <td> {inventory.quantity === 0 ? ' Sold out' : inventory.quantity}
                                    </td>
                                    <td> {inventory.supplier}
                                    </td>

                                    <td>
                                        <button className='btn btn-outline-danger' onClick={() => deleteItem(inventory._id)}><i className="bi bi-trash"></i> Delete</button>
                                    </td>
                                </tr>

                            )}
                    </tbody>
                </table>




            </div>
            <ToastContainer />
        </div >
    );
};

export default ManageInventories;