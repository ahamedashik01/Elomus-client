import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const Intro = () => {
    return (
        <div className="my-5">
            <Container>
                <Row className="g-4">
                    <Col xs={12} md={4}>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <div className='my-4 intro-icon shadow d-flex justify-content-center align-items-center'>
                                <div>
                                    <img className="w-100 text-center" src="https://cdn.shopify.com/s/files/1/0016/5412/8710/files/icon1-static1-elomus3.png?v=1534469853" alt="" />
                                </div>
                            </div>
                            <div className="text-center">
                                <h6>Our Mission</h6>
                                <p>Our mission is to provide Mobile Resource and Information Technology sector with a total business management solution.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <div className='my-4 intro-icon-2 shadow d-flex justify-content-center align-items-center'>
                                <div>
                                    <img className="w-100 text-center" src="https://cdn.shopify.com/s/files/1/0016/5412/8710/files/icon2-static1-elomus3.png?v=1534469905" alt="" />
                                </div>
                            </div>
                            <div className="text-center">
                                <h6>Solutions and Service</h6>
                                <p>We offer total flexibility and customized solutions, tailored to any industry and especially made for your own specifications.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <div className='my-4 intro-icon-3 shadow d-flex justify-content-center align-items-center'>
                                <div>
                                    <img className="w-100 text-center" src="https://cdn.shopify.com/s/files/1/0016/5412/8710/files/icon3-static1-elomus3.png?v=1534469942" alt="" />
                                </div>
                            </div>
                            <div className="text-center">
                                <h6>Areas of Practice</h6>
                                <p>Information Systems and Operations Management, Logistics and Fleet Management, Smartwatch Quality and Safety, Security Installations.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Intro;