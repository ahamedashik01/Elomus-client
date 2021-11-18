import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const MangeWatch = () => {
    return (
        <div className="py-5">
            <Container className="my-5">
                <Row className="d-flex justify-content-center align-items-center g-4">
                    <Col xs={12} md={6} className="p-3">
                        <div>
                            <div className="d-flex flex-column justify-content-center align-items-top">
                                <div className="text-start mb-3">
                                    <h1>Manage your <span className="text-primary">smartwatch</span> with the help of smartphone.</h1>
                                    <hr className="w-50 bg-primary me-auto" />
                                    <hr className="w-50 bg-primary mx-auto" />
                                </div>
                                <div className="text-start mt-4">
                                    <p>Elomus Core combines advanced smartwatch technology with elegant watch design. Its stainless steel casing provides ultimate durability and houses a stunning AMOLED display, for a truly future-proof device. Wear it your way with any compatible watch strap or with a selection of Elomus modules; engineered to empower, Elomus is the ultimate sidekick.</p>
                                    <div className='d-flex justify-content-start align-items-top mt-5'>
                                        <div className='d-flex justify-content-center me-4 align-items-top'>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <img className="w-100" src="https://cdn.shopify.com/s/files/1/0016/5412/8710/files/icon1-static4-elomus3_afc9a197-e844-44b6-84ea-f9be31c224fc.png?v=1534474599" alt="" />
                                            </div>
                                        </div>
                                        <div className="text-start ">
                                            <h6 className="fw-bold">Connectivity</h6>
                                            <p>WiFi & BLE connectivity • iOS & Android compatible</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-start align-items-top mt-4'>
                                        <div className='d-flex justify-content-center me-4 align-items-top'>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <img className="w-100" src="https://cdn.shopify.com/s/files/1/0016/5412/8710/files/icon2-static4-elomus3.png?v=1534474619" alt="" />
                                            </div>
                                        </div>
                                        <div className="text-start ">
                                            <h6 className="fw-bold">Productivity</h6>
                                            <p>Calls & Calendar management • Siri personal assistant</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-start align-items-top mt-4'>
                                        <div className='d-flex justify-content-center me-4 align-items-top'>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <img className="w-100" src="https://cdn.shopify.com/s/files/1/0016/5412/8710/files/icon3-static4-elomus3.png?v=1534474653" alt="" />
                                            </div>
                                        </div>
                                        <div className="text-start ">
                                            <h6 className="fw-bold">Control</h6>
                                            <p>Smartphone music • Compatible Bluetooth enabled devices</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mb-5">
                        <div>
                            <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0016/5412/8710/files/img-static4-elomus3.jpg?v=1534474444" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MangeWatch;