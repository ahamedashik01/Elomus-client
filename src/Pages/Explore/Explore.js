import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import ProductCart from '../Home/Home/FeaturedProduct/ProductCart';
import Header from '../Shared/Header/Header';

const Explore = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://glacial-sands-61817.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    return (
        <>
            <div style={{ backgroundImage: `url('https://i.ibb.co/hZBWq0q/bkg-static5-elomus3.jpg')` }}>
                <Header></Header>
                <div className="py-5 mt-5 text-white">
                    <h1>Explore</h1>
                </div>
            </div>
            <Container>
                <div className="border border-1 mt-5 text-start px-4 py-3 curve">
                    <small>Showing 1 to 8 of 8 items</small>
                </div>
                <Row className="g-5 mt-3">
                    {
                        products.length === 0 ?
                            <div>
                                <Spinner className="mx-auto" animation="grow" />
                            </div>
                            :
                            products.map(product => <ProductCart
                                key={product._id}
                                product={product}
                            >
                            </ProductCart>)
                    }
                </Row>
                <div className="border border-1 mt-5 text-start px-4 py-3 curve">
                    <small>Showing 1 to 8 of 8 items</small>
                </div>
            </Container>
        </>
    );
};

export default Explore;