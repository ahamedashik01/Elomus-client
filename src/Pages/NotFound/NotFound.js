import { Link } from 'react-router-dom';
import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const NotFound = () => {
    return (
        <>
            <div style={{ backgroundImage: `url('https://i.ibb.co/hZBWq0q/bkg-static5-elomus3.jpg')` }}>
                <Header></Header>
                <div className="py-5 mt-5 text-white">
                    <h1>OPS SORRY</h1>
                </div>
            </div>
            <div>
                <div className="py-5 my-5">
                    <img className="img-fluid" src="http://ary-themes.com/html/bold_touch/medicoz/images/icons/error.png" alt="" />
                </div>
                <div className="py-5 my-5">
                    <h1>Page Not Found</h1>
                    <h5 className="mb-5">Please try one of the following pages:</h5>
                    <Link to="/home"><button className="btn btn-primary rounded-pill px-4 text-white me-4">HOME PAGE</button></Link>
                    <Link to="/contact"><button className="btn btn-primary rounded-pill px-4 text-white">CONTACT US</button></Link>

                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default NotFound;