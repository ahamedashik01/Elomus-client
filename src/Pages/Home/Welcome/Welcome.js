import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Welcome = () => {
    return (
        <div className="py-5">
            <Container>
                <Row className="d-flex justify-content-center align-items-center g-4">
                    <Col xs={12} md={6} className="mb-5">
                        <div>
                            <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0016/5412/8710/files/img-static2-elomus3.jpg?v=1534470158" alt="" />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div className="text-center">
                                    <h6>ABOUT US</h6>
                                    <h1>WELCOME TO <span className="text-primary">ELOMUS</span></h1>
                                    <hr className="w-50 bg-primary mx-auto" />
                                    <hr className="w-50 bg-primary ms-auto" />
                                </div>
                                <div className="text-start mt-4">
                                    <p>The inventor or Elomus, MED is a technology provider bringing novel sensors, proprietary algorithms, and application software to deliver fashionable connected devices with actionable insights to promote health and wellness.<br /> <br />MED is supported by renowned quality microelectronics manufacturer, to provide innovative product design and purpose-driven functionalities at the most competitive pricing.</p>

                                    <button className="btn btn-primary mt-4 px-4 py-2 rounded-pill shadow"><i className="far fa-share-square me-2"></i>Read More</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Welcome;