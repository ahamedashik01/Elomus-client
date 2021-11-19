import React from 'react';
import { Container } from 'react-bootstrap';

const Subscribe = () => {
    return (
        <div style={{ backgroundColor: '#F8F8F8' }} className="py-5">
            <Container className="d-flex justify-content-center align-items-center flex-column">
                <h6>Our News</h6>
                <h2 className="fw-bold"><span className="text-primary">SIGN</span> UP FOR LATEST NEWS</h2>
                <hr className="w-50 bg-primary mx-auto" />
                <hr className="w-50 bg-primary ms-auto" />
                <div className="w-100 my-5 d-flex justify-content-center sub align-items-center">
                    <input style={{ backgroundColor: 'white' }} className="w-50 shadow me-4 d-block border border-0 px-5 py-3 rounded-pill" type="text" placeholder='Enter your email address here...' />
                    <button className="btn btn-primary px-5 py-3 shadow rounded-pill">Subscribe</button>
                </div>
            </Container>
        </div>
    );
};

export default Subscribe;