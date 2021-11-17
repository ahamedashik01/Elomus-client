import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import Intro from './Intro/Intro';


const Home = () => {
    return (
        <>
            <div className="banner" >
                {/* header  */}
                <Header></Header>
                {/* banner  */}
                <div className="banner-box text-start py-5">
                    <Container className="py-5">
                        <div className="py-5"></div>
                        <div className="first-line py-3">
                            <h5 className="text-white">Sale 25% Discount</h5>
                            <h1 className="fxl fw-bold">CoWatch - <br /> Mineral Silver</h1>
                            <p className="text-white">CoWatch Smartwatch In Mineral Silver Style. $70 Off Retail Price Exclusively For Elomus<br />  Customers.</p>
                            <Button className="mt-4 px-4 py-2 text-dark shadow btn btn-primary text-white rounded-pill" >Shop Now</Button>
                            <div className="py-3"></div>
                        </div>
                    </Container>
                </div>
            </div>
            <Intro></Intro>
        </>
    );
};

export default Home;