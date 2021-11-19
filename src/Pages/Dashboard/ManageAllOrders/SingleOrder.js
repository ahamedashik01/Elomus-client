
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import React from 'react';

const SingleOrder = (props) => {
    const { order, _id, status, recipientName, recipientEmail } = props.order;

    //alert
    const handleAlert = () => {
        swal({
            title: "Ops, Sorry!",
            text: "Approval is not Availvale right now!",
            icon: "warning",
            button: "Understood",
        })
    }

    const handleDelete = id => {
        const procced = window.confirm('Are you sure, you want to cancel?');
        if (procced) {
            const url = `https://glacial-sands-61817.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('order cancled')
                        window.location.reload();
                    }
                });
        }
    }
    return (
        <div className="mb-5 p-3 shadow quality">

            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Package Name</th>
                        <th>Cost</th>
                        <th>Recipient Name</th>
                        <th>Recipient Email</th>
                        <th>Package Details</th>
                        <th>Cancle order</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="p-2">
                            <div className="order-img me-5">
                                <img className="img-fluid w-50" src={order.img1} alt="" />
                            </div>
                        </td>
                        <td className="p-2">
                            <h5>{order.title}</h5>
                        </td>
                        <td className="p-2">
                            <h6>Total : ${order.price}</h6>
                        </td>
                        <td className="p-2">
                            <p>{recipientName}</p>
                        </td>
                        <td className="p-2">
                            <p>{recipientEmail}</p>
                        </td>
                        <td className="p-2">
                            <Link to={`/product/${order._id}`}>
                                <button className="btn btn-dark mb-2">See Details</button>
                            </Link>
                        </td>
                        <td className="p-2">
                            <button onClick={() => handleDelete(_id)} className="btn btn-danger">Cancel order</button>
                        </td>
                        <td className="p-2">
                            <p>{status}</p> <br />
                            <button onClick={() => handleAlert()} className="btn btn-success">Approve</button>
                        </td>
                    </tr>

                </tbody>
            </Table>
        </div>
    );
};

export default SingleOrder;