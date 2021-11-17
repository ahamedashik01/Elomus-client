import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Features = () => {
    return (
        <div className="py-5" style={{ backgroundColor: '#F8F8F8' }}>
            <Container>
                <div>
                    <h6 className="fw-bold">EXPLORE THE AWESOME</h6>
                    <h1>CORE <span className="text-primary">FEATURES</span></h1>
                    <hr className="w-50 bg-primary mx-auto mt-5" />
                    <hr className="w-50 bg-primary ms-auto" />
                    <Row className="mt-5 g-4">
                        <Col xs={12} md={4} className="px-2 py-2">
                            <div className=' d-flex mb-4 justify-content-end align-items-top'>
                                <div className="text-end me-4">
                                    <h6 className="fw-bold">Quick reply</h6>
                                    <p>Respond to texts and messages directly from your wrist (Android Only)</p>
                                </div>
                                <div className='d-flex justify-content-center align-items-top'>
                                    <div className="fetures-icon shadow d-flex justify-content-center align-items-center">
                                        <img className="w-40" src="https://cdn.shopify.com/s/files/1/0016/5412/8710/files/icon1-static3-elomus3_15dfe0a2-d9c1-4a01-a40d-c8eda53336a4.png?v=1534472396" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className=' d-flex mb-4 justify-content-end align-items-top'>
                                <div className="text-end me-4">
                                    <h6 className="fw-bold">2 day battery life</h6>
                                    <p>Maximise your battery life on standby, and tilt your wrist to wake up your display handsfree</p>
                                </div>
                                <div className='d-flex justify-content-center align-items-top'>
                                    <div className="fetures-icon shadow d-flex justify-content-center align-items-center">
                                        <img className="w-40" src="https://cdn.shopify.com/s/files/1/0016/5412/8710/files/icon5-static3-elomus3.png?v=1534472508" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className=' d-flex mb-4 justify-content-end align-items-top'>
                                <div className="text-end me-4">
                                    <h6 className="fw-bold">Siri personal assistant</h6>
                                    <p>Interact with your device with speech)</p>
                                </div>
                                <div className='d-flex justify-content-center align-items-top'>
                                    <div className="fetures-icon shadow d-flex justify-content-center align-items-center">
                                        <img className="w-40" src="https://cdn.shopify.com/s/files/1/0016/5412/8710/files/icon3-static3-elomus3.png?v=1534472443" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className=' d-flex justify-content-end align-items-top'>
                                <div className="text-end me-4">
                                    <h6 className="fw-bold">Anti-glare always-on display</h6>
                                    <p>Discrete, crisp and highly visible outdoors</p>
                                </div>
                                <div className='d-flex justify-content-center align-items-top'>
                                    <div className="fetures-icon shadow d-flex justify-content-center align-items-center">
                                        <img className="w-40" src="https://cdn.shopify.com/s/files/1/0016/5412/8710/files/icon7-static3-elomus3.png?v=1534473911" alt="" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div>
                                <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0016/5412/8710/files/img-static3-elomus3.jpg?v=1534472029" alt="" />
                            </div>
                        </Col>
                        <Col xs={12} md={4} className="px-2 py-2">
                            <div className='d-flex justify-content-start align-items-top mb-4'>
                                <div className='d-flex justify-content-center me-4 align-items-top'>
                                    <div className="fetures-icon shadow d-flex justify-content-center align-items-center">
                                        <img className="w-40" src="https://cdn.shopify.com/s/files/1/0016/5412/8710/files/icon2-static3-elomus3.png?v=1534472411" alt="" />
                                    </div>
                                </div>
                                <div className="text-start ">
                                    <h6 className="fw-bold">Fitness tracking</h6>
                                    <p>Monitor and track your steps and distance day to day</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-start align-items-top mb-4'>
                                <div className='d-flex justify-content-center me-4 align-items-top'>
                                    <div className="fetures-icon shadow d-flex justify-content-center align-items-center">
                                        <img className="w-40" src="https://cdn.shopify.com/s/files/1/0016/5412/8710/files/icon4-static3-elomus3.png?v=1534472477" alt="" />
                                    </div>
                                </div>
                                <div className="text-start ">
                                    <h6 className="fw-bold">Manage calls</h6>
                                    <p>Receive incoming calls or speed dial contacts without reaching for your phone</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-start align-items-top mb-4'>
                                <div className='d-flex justify-content-center me-4 align-items-top'>
                                    <div className="fetures-icon shadow d-flex justify-content-center align-items-center">
                                        <img className="w-40" src="https://cdn.shopify.com/s/files/1/0016/5412/8710/files/icon6-static3-elomus3.png?v=1534472544" alt="" />
                                    </div>
                                </div>
                                <div className="text-start ">
                                    <h6 className="fw-bold">Quick app launch</h6>
                                    <p>Shortcuts to your favorite apps directly on your watchface</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-start align-items-top mb-4'>
                                <div className='d-flex justify-content-center me-4 align-items-top'>
                                    <div className="fetures-icon shadow d-flex justify-content-center align-items-center">
                                        <img className="w-40" src="https://cdn.shopify.com/s/files/1/0016/5412/8710/files/icon8-static3-elomus3.png?v=1534473958" alt="" />
                                    </div>
                                </div>
                                <div className="text-start ">
                                    <h6 className="fw-bold">Music control</h6>
                                    <p>Easily accessible playback commands for your companion device</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Features;