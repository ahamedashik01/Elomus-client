import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Myorder = (props) => {
    const { order, _id, status } = props.order;

    const handleDelete = id => {
        const procced = window.confirm('Are you sure, you want to cance?');
        if (procced) {
            const url = `https://glacial-sands-61817.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Booking cancled')
                        window.location.reload();
                    }
                });
        }

    }
    return (
        <div className="mb-5 p-3 shadow quality">
            <Table responsive striped bordered hover size="sm">
                <tbody>
                    <tr>
                        <td className="p-2 w-25">
                            <div className="order-img text-start">
                                <img className="w-50" src={order.img1} alt="" />
                            </div>
                        </td>
                        <td className="p-2 my">
                            <h5 className="">{order.title}</h5>
                        </td>
                        <td className="p-2">
                            <h6>Total : ${order.price}</h6>
                        </td>
                        <td className="p-2">
                            <Link to={`/products/${order._id}`}>
                                <button className="btn btn-dark mb-2">See Details</button>
                            </Link>
                        </td>
                        <td className="p-2">
                            <button onClick={() => handleDelete(_id)} className="btn btn-danger">Cancel Order</button>
                        </td>
                        <td className="p-2">
                            <p>{status}</p>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Myorder;