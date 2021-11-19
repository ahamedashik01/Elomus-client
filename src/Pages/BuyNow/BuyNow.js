import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import swal from 'sweetalert';
import Header from '../Shared/Header/Header';
import "./BuyNow.css"

const BuyNow = () => {
    const [products, setProducts] = useState([]);
    const { id } = useParams();
    const { user } = useAuth();
    const { _id, title, price, img1, detailsdes, brand, } = products;
    // alert 
    const showAlert = () => {
        swal({
            title: "Succesfully Booked!",
            text: "We are meeting soon!",
            icon: "success",
            button: "Aww yiss!",
        })
    }

    const url = `https://glacial-sands-61817.herokuapp.com/products/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // form 
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.order = products;
        data.status = 'pending';
        axios.post('https://glacial-sands-61817.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    showAlert();
                    reset();
                }
            })
    }
    return (
        <>
            <div style={{ backgroundImage: `url('https://i.ibb.co/hZBWq0q/bkg-static5-elomus3.jpg')` }}>
                <Header></Header>
                <div className="py-5 mt-5 text-white">
                    <h1>Buy Now</h1>
                </div>
            </div>
            <div>
                <Container className="py-5">
                    <Row className="g-4">
                        <Col sm={12} md={5} className="mb-5 quality">
                            <div className="p-3 shadow ">
                                <div className="des text-start mt-2">
                                    <h3 className="mb-3">{title}</h3>
                                    <hr />
                                    <div className="p-2 rounded-pill bg-primary text-white d-flex justify-content-between align-items-center">
                                        <h4 className="ps-3">Total Cost</h4>
                                        <h4 className="pe-3"><i className="fas fa-pound-sign me-1"></i>{price} GBP</h4>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <img className="w-50 px-auto img-fluid" src={img1} alt="smartwatch" />
                                </div>
                                <div className="des text-start py-3">
                                    <h6 className="text-primary">Description</h6>
                                    <p>{detailsdes}</p>
                                </div>
                                <div className="text-start">
                                    <small>Brand :{brand}</small>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={7}>
                            <div className="order-adder shadow p-2 quality">
                                <h4 className="my-4 text-center px-4"> Your Details</h4>
                                <hr />
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input placeholder="Recipient Full Name" readonly type="text" {...register("recipientName", { required: true })} value={user.displayName} />
                                    <input placeholder="Recipient Email" type="email" value={user.email} readOnly {...register("recipientEmail", { required: true })} />
                                    <input placeholder="Recipient Phone Number" type="number" {...register("phoneNumber", { required: true })} />
                                    <input placeholder="Adrress" type="text" {...register("address", { required: true })} />
                                    <input placeholder="City" type="text" {...register("City", { required: true })} />
                                    <input placeholder="Country" type="text" {...register("Country", { required: true })} />
                                    <input placeholder="Zip code" type="text" {...register("zipCode", { required: true })} />
                                    <input className="btn btn-dark" type="submit" value="BOOK PACKAGE" />
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default BuyNow;