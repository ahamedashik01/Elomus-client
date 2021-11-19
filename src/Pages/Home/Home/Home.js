import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container } from 'react-bootstrap';
import Review from '../../Dashboard/Review/Review';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Features from '../Features/Features';
import MangeWatch from '../MangeWatch/MangeWatch';
import Specs from '../Specs/Specs';
import Welcome from '../Welcome/Welcome';
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';
import Intro from './Intro/Intro';
import Subscribe from './Subscribe/Subscribe';


const Home = () => {
    return (
        <>
            <div className="banner" >
                {/* header  */}
                <Header></Header>
                {/* banner  */}
                <div className="banner-box text-start py-5 ">
                    <Container className="py-5">
                        <div className="w-50 me-auto mt-5">
                            <div className="first-line py-3">
                                <h5 className="text-white fst-italic">Sale 25% Discount</h5>
                                <hr className="w-50 bg-white mx-auto" />
                                <hr className="w-50 bg-white me-auto" />
                                <h1 className="fxl fw-bold">CoWatch - <br /> Mineral Silver</h1>
                                <p className="text-white">CoWatch Smartwatch In Mineral Silver Style. $70 Off Retail Price Exclusively For Elomus<br />  Customers.</p>
                                <Button className="mt-5 px-4 py-2 text-dark shadow btn btn-primary text-white rounded-pill" ><i className="far fa-share-square me-2"></i>Shop Now</Button>
                                <div className="py-3"></div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            <Intro></Intro>
            <Welcome></Welcome>
            <Features></Features>
            <MangeWatch></MangeWatch>
            <FeaturedProduct></FeaturedProduct>
            <Specs></Specs>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </>
    );
};

export default Home;