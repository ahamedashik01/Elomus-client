import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Myorder from '../Myorder/Myorder';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    const url = 'https://glacial-sands-61817.herokuapp.com/orders';


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    const filterOrder = orders.filter(e => e.recipientEmail === user.email);
    console.log(filterOrder);

    return (
        <div className="container h100">
            <h1 className="my-4"> MY ORDER</h1>

            {
                orders.length === 0 ?
                    <Spinner className="mx-auto" animation="grow" />
                    :
                    filterOrder.map(order => <Myorder
                        key={order._id}
                        order={order}
                    >

                    </Myorder>)
            }

        </div>
    );
};

export default MyOrders;