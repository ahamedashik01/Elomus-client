import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import SingleOrder from './SingleOrder';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    const url = 'https://glacial-sands-61817.herokuapp.com/orders'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div className="container">
            <h1 className="my-4">Manage All Orders</h1>

            {
                orders.length === 0 ?
                    <Spinner className="mx-auto" animation="grow" />
                    :
                    orders.map(order => <SingleOrder
                        key={order._id}
                        order={order}
                    >

                    </SingleOrder>)
            }

        </div>
    );
};

export default ManageAllOrders;