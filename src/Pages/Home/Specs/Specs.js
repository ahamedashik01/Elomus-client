import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

const Specs = () => {
    return (
        <div style={{ backgroundImage: `url('https://cdn.shopify.com/s/files/1/0016/5412/8710/files/slider2-elomus3-1920x900_1920x900.progressive.jpg?v=1534467260')`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center', width: '100 %' }}>
            <Container className="pb-5">
                <div className="py-5 text-white">
                    <h6>The Watch In Detail</h6>
                    <h1>TECH <span className="text-primary">SPECS</span></h1>
                </div>
                <Row className="g-4">
                    <Col xs={12} md={6}>
                        <Table striped borderless responsive>
                            <tbody>
                                <tr>
                                    <td className="text-white text-start">Thickness:</td>
                                    <td className="text-white text-end">13.3mm</td>
                                </tr>
                                <tr>
                                    <td className="text-white text-start">Diameter:</td>
                                    <td className="text-white text-end">41mm</td>
                                </tr>
                                <tr>
                                    <td className="text-white text-start">Weight:</td>
                                    <td className="text-white text-end">60 grams</td>
                                </tr>
                                <tr>
                                    <td className="text-white text-start">Battery:</td>
                                    <td className="text-white text-end">Rechargeable Li-polymer 110mAh</td>
                                </tr>
                                <tr>
                                    <td className="text-white text-start">Nylon strap:</td>
                                    <td className="text-white text-end">Length: 26cm; Width: 2cm; Thickness: +/- 1mm</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col xs={12} md={6}>
                        <Table striped borderless responsive>
                            <tbody>
                                <tr>
                                    <td className="text-white text-start">Casing:</td>
                                    <td className="text-white text-end">316L</td>
                                </tr>
                                <tr>
                                    <td className="text-white text-start">Glass:</td>
                                    <td className="text-white text-end">Sapphire Coated Glass</td>
                                </tr>
                                <tr>
                                    <td className="text-white text-start">Chipset:</td>
                                    <td className="text-white text-end">Nordic BLE</td>
                                </tr>
                                <tr>
                                    <td className="text-white text-start">Bluetooth:</td>
                                    <td className="text-white text-end">BLE (Bluetooth Low Energy) 4.0</td>
                                </tr>
                                <tr>
                                    <td className="text-white text-start">Sensors:</td>
                                    <td className="text-white text-end">MEMS 3-axis accelerometer</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Specs;