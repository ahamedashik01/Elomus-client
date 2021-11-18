import { Rating } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Col } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../../../hooks/useAuth';

const ProductCart = (props) => {
    const { user } = useAuth();
    const { _id, title, price, rating, img1 } = props.product;

    const handleCart = () => {
        if (!user.email) {
            swal({
                title: "Snap☹!! You are not logged in",
                text: "Please, log in to add products to the cart",
                icon: "warning",
                button: "Ok",
                dangerMode: true,
            })
        } else {
            const cart = {
                _id,
                title,
                price,
                img1
            }
            axios.post('https://glacial-sands-61817.herokuapp.com/cart', cart)
                .then(res => {
                    console.log(res);
                    if (res.data.insertedId) {
                        swal({
                            title: "ADDED TO CART",
                            text: "Go to cart to checkout",
                            icon: "success",
                            button: "Aww yiss!",
                        });
                    }
                })
        }

    }


    return (
        <>

            <Col xs={12} md={4}>
                <div className="mx-2 curve shadow-custom quality">
                    <div className="text-start p-3">
                        <button onClick={handleCart} className="btn shadow me-3 btn-primary px-3 rounded-pill ">ADD TO CART</button>
                    </div>
                    <div className="w-75 mx-auto pb-4">
                        <div className="mb-3">
                            <img className="w-100 px-auto img-fluid" src={img1} alt="smartwatch" />
                        </div>
                        <Rating name="half-rating-read" size="small" className="text-primary" defaultValue={rating} precision={0.5} readOnly />
                        <h6 className="mt-2">{title}</h6>
                        <h5 className="mt-2">${price}</h5>
                        <div className="text-end none">
                            <button className="btn shadow btn-outline-primary px-4 rounded-pill ">BUY NOW</button>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    );
};

export default ProductCart;