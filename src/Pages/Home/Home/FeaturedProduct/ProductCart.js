import { Rating } from '@mui/material';
import React from 'react';
import { Alert, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import Footer from '../../../Shared/Footer/Footer';

const ProductCart = (props) => {
    const { _id, title, price, rating, img1 } = props.product;
    const { id } = useParams();

    //alert
    const showALert = () => {
        swal("Snap!💔", "This is not fuctional yet!");
    }

    return (
        <>

            <Col xs={12} md={4}>
                <div className="mx-2 curve shadow-custom quality">
                    <div className="p-3 d-flex justify-content-between align-items-center">
                        <button onClick={showALert} className="btn shadow me-3 btn-white px-3 rounded-pill "><i className="text-primary far fa-heart"></i></button>
                        <button onClick={showALert} className="btn shadow me-3 btn-white px-3 rounded-pill "><i className="text-primary fas fa-shopping-cart"></i></button>
                    </div>
                    <div className="w-75 mx-auto pb-4">
                        <div className="mb-3">
                            <img className="w-100 px-auto img-fluid" src={img1} alt="smartwatch" />
                        </div>
                        <Rating name="half-rating-read" size="small" className="text-primary" defaultValue={rating} precision={0.5} readOnly />
                        <h6 className="mt-2">{title}</h6>
                        <h5 className="mt-2">${price}</h5>
                        <div className="d-flex justify-content-between align-items-center">
                            <Link to={`/product/${_id}`}>
                                <button className="btn shadow btn-outline-primary px-4 rounded-pill ">Details</button>
                            </Link>
                            <Link to={`/buynow/${_id}`}>
                                <button className="btn shadow btn-primary px-4 rounded-pill ">Buy now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    );
};

export default ProductCart;