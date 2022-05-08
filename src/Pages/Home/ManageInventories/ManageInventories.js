import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageInventories = () => {

    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => {
                setInventory(data);
                console.log(data);
            });
    }, [])


    const deleteItem = productId => {
        const confirmDelete = window.confirm("Are you sure to delete?");
        if (confirmDelete) {
            const url = `http://localhost:5000/inventory/${productId}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const updateInventory = inventory.filter(inventory => inventory._id !== productId);
                    console.log(updateInventory);
                    setInventory(updateInventory);
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
                                        <button className='btn btn-outline-danger' onClick={() => deleteItem(inventory._id)}><i class="bi bi-trash"></i> Delete</button>
                                    </td>
                                </tr>

                            )}
                    </tbody>
                </table>




            </div>
        </div >
    );
};

export default ManageInventories;