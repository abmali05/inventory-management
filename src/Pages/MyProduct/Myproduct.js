import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Myproduct = () => {

    const [myproduct, setMyproduct] = useState([]);
    const [inventory, setInventory] = useState([]);
    const [loading, setLoading] = useState(true);

    const [user] = useAuthState(auth);

    useEffect(() => {
        const email = user.email;
        console.log(email);
        const url = `https://protected-scrubland-50002.herokuapp.com/myproduct?email=${email}`;
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
                setLoading(false)
            });
    }, [user, inventory]);

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