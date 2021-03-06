import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductCart from './ProductCart';

const Packages = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://glacial-sands-61817.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    return (
        <div className="my-5 py-5" >
            <Container className="mb-5">
                <h6>FEATURED</h6>
                <h1 className="mb-5"><span className="text-primary">SMARTWATCH</span> PRODUCTS</h1>
                <hr className="w-50 bg-primary mx-auto mt-5" />
                <hr className="w-50 bg-primary ms-auto" />
                <Row className="g-5 mt-3">
                    {
                        products.length === 0 ?
                            <div>
                                <Spinner className="mx-auto" animation="grow" />
                            </div>
                            :
                            products.slice(0, 6).map(product => <ProductCart
                                key={product._id}
                                product={product}
                            >
                            </ProductCart>)
                    }
                </Row>
                <div className="text-center mt-5 pt-5">
                    <Link to="/explore">
                        <button className="btn btn-primary px-4 rounded-pill">Explore More 💬</button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default Packages;