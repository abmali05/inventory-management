import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Myproduct = () => {

    const [myproduct, setMyproduct] = useState([]);
    const [inventory, setInventory] = useState([]);

    const [user] = useAuthState(auth);

    useEffect(() => {
        const email = user.email;
        console.log(email);
        const url = `http://localhost:5000/myproduct?email=${email}`;
        console.log(url);
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },

        })
            .then(res => res.json())
            .then(data => {
                setMyproduct(data);
                console.log(data);
            });
    }, [user, inventory]);


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
                <h2>My Products: {myproduct.length}</h2>
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
                            myproduct.map(myproduct =>


                                <tr key={myproduct._id}>
                                    <td> <img src={myproduct.img} alt="" width="100px" />
                                    </td>
                                    <td> {myproduct.name}
                                    </td>
                                    <td> {myproduct.quantity === 0 ? ' Sold out' : myproduct.quantity}
                                        {/* {myproduct.quantity} */}
                                    </td>
                                    <td> {myproduct.supplier}
                                    </td>

                                    <td>
                                        <button className='btn btn-outline-danger'
                                            onClick={() => deleteItem(myproduct._id)}
                                        >Delete</button>
                                    </td>
                                </tr>

                            )}
                    </tbody>
                </table>




            </div>
        </div >
    );
};

export default Myproduct;