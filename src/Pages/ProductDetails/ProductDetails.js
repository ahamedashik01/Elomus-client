import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import Subscribe from '../Home/Home/Subscribe/Subscribe';
import Header from '../Shared/Header/Header';

const ProductDetails = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    //alert
    const showALert = () => {
        swal("Snap!💔", "This is not fuctional yet!");
    }

    const url = `https://glacial-sands-61817.herokuapp.com/products/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const { _id, title, price, shortdes, detailsdes, brand, availability, Tags, rating, img1 } = product;

    return (
        <>
            <div style={{ backgroundImage: `url('https://i.ibb.co/hZBWq0q/bkg-static5-elomus3.jpg')` }}>
                <Header></Header>
                <div className="py-5 mt-5 text-white">
                    <h1>Explore</h1>
                </div>
            </div>
            <Container className="my-5">
                <Row>
                    <Col className="px-5" xs={12} md={6}>
                        <div className="border border-1 curve p-5">
                            <img className="img-fluid w-100" src={img1} alt="" />
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="p-5">
                        <div className="text-start d-flex flex-column">
                            <Rating name="half-rating-read" size="small" className="text-primary mb-2" defaultValue={rating} precision={0.5} readOnly />
                            <h3 className="mb-4">{title}</h3>
                            <h4 className="mb-4 text-primary">${price}</h4>
                            <p>{shortdes}</p>
                            <div className="my-3">
                                <hr className="w-75 me-auto" />
                                <p className="mb-2">Brand: {brand}</p> <br />
                                <p>Availability: {availability}</p>
                                <hr className="w-75 me-auto" />
                            </div>
                            <div className="w-75 me-auto d-flex align-items-center">
                                <Link to={`/product/${_id}`}>
                                    <button onClick={showALert} className="btn me-4 shadow btn-primary px-4 rounded-pill ">Add to cart</button>
                                </Link>
                                <Link to={`/buynow/${_id}`}>
                                    <button className="btn shadow btn-primary px-4 rounded-pill ">Buy now</button>
                                </Link>
                            </div>
                            <small className="mt-5">Tags: {Tags}</small>
                        </div>
                    </Col>
                </Row>
                <div className="border border-1 mt-5 text-start px-4 py-3 curve">
                    <small>Description</small>
                </div>
                <div className="w-75 text-start p-3">
                    <p>{detailsdes}</p>
                </div>
            </Container>
            <Subscribe></Subscribe>
        </>
    );
};

export default ProductDetails;