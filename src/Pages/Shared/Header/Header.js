import React, { useState } from 'react';
import { Container, Button, Nav, Navbar, Offcanvas, Table, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    const userImg = user.photoURL;
    //modal
    const [ModalShow, setModalShow] = useState(false);
    const [ModalShowcart, setModalShowcart] = useState(false);

    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);
    const handleModalClosecart = () => setModalShowcart(false);
    const handleModalShowcart = () => setModalShowcart(true);

    //react-offcanvas
    const [showUser, setShowUser] = useState(false);
    const handleClose = () => setShowUser(false);
    const handleShow = () => setShowUser(true);
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 640) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <div className="">
            <Navbar className={navbar ? 'fixed-top active py-3' : 'bar py-3'} collapseOnSelect expand="lg">
                <Container>
                    <Link className="text-decoration-none" to="/home">
                        <Navbar.Brand className="fs-4 fw-bold text-white"><i className="fas fa-plane-departure me-2 text-white"></i>Travelz</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle className="ms-auto" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} className="text-white text-capitialize" to="/home">Home</Nav.Link>
                            <Nav.Link>
                                <NavHashLink className="text-white text-capitialize text-decoration-none" to="/home#packages">Explore</NavHashLink>
                            </Nav.Link>
                            <Nav.Link as={Link} className="text-white text-capitialize" to="/about">About us</Nav.Link>
                            <Nav.Link as={Link} className="text-white text-capitialize" to="/contact">Contact</Nav.Link>
                        </Nav>
                        <div className="block">
                            <hr className="w-25 mx-auto" />
                            {
                                user.email || userImg ?
                                    <div>
                                        <Button style={{ backgroundImage: `url(${userImg})`, backgroundSize: 'cover', height: '40px', width: '40px', borderRadius: '50%' }} variant="primary" onClick={handleShow} className="text-white">
                                        </Button>
                                        <div className="my-2 mx-auto">
                                            {
                                                user.email &&
                                                <h6>{user.displayName}</h6>
                                            }
                                        </div>
                                        <Offcanvas className="quality" show={showUser} onHide={handleClose} placement="end">
                                            <Offcanvas.Header className="ms-auto" closeButton>
                                            </Offcanvas.Header>
                                            <Offcanvas.Body>
                                                <div className=" d-flex justify-content-center align-items-center">
                                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                                        <div className="user-profile mb-4">
                                                            <img src={userImg} alt="user-profile" />
                                                        </div>
                                                        <h4 className="mb-3">{user.displayName}</h4>
                                                        <p>{user.email}</p>
                                                        <button onClick={logOut} className="px-5 btn btn-danger text-white rounded-pill"> Logout</button>
                                                    </div>
                                                </div>
                                                <Table hover className="mt-5">
                                                    <tbody>
                                                        <Link to=""></Link>
                                                        <tr>
                                                            <td>
                                                                <Link className="text-capitialize text-decoration-none text-color" to="/my-order">My Bookings</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <Link className="text-capitialize text-decoration-none text-color" to="/manage-all-order">Manage All Bookings</Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <Link className="text-capitialize text-decoration-none text-color" to="/add-packages">Add A Package<span class="badge bg-dark rounded-pill ms-2">New</span></Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Offcanvas.Body>
                                        </Offcanvas>
                                    </div>
                                    :
                                    <Link to="/login"><button className="px-3 btn btn-primary text-white shadow rounded-pill"><i className="fas fa-user me-2"></i>Log In</button></Link>
                            }
                            <div className="d-flex justify-content-around align-items-center">
                                <div title="Wishlist" className="me-1">
                                    <Button variant="text" onClick={handleModalShow} className="text-white">
                                        <i className="far fa-heart"></i>
                                    </Button>
                                    <Modal show={ModalShow} onHide={handleModalClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Modal heading</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleModalClose}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={handleModalClose}>
                                                Save Changes
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                                <div title="Cart" className="me-3">
                                    <Button variant="text" onClick={handleModalShowcart} className="text-white">
                                        <i className="fab fa-opencart"></i>
                                    </Button>
                                    <Modal show={ModalShowcart} onHide={handleModalClosecart}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Modal heading</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Woohoo, you're reading cart</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleModalClosecart}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={handleModalClosecart}>
                                                Save Changes
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </Navbar.Collapse>
                    <div className="ms-auto seen">
                        <div className="d-flex justify-content-around align-items-center">
                            <div title="Wishlist" className="me-1">
                                <Button variant="text" onClick={handleModalShow} className="text-white">
                                    <i class="far fa-heart"></i>
                                </Button>
                                <Modal show={ModalShow} onHide={handleModalClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modal heading</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleModalClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={handleModalClose}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                            <div title="Cart" className="me-1">
                                <Button variant="text" onClick={handleModalShowcart} className="text-white">
                                    <i className="fab fa-opencart"></i>
                                </Button>
                                <Modal show={ModalShowcart} onHide={handleModalClosecart}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modal heading</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Woohoo, you're reading cart</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleModalClosecart}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={handleModalClosecart}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                            <div>
                                {
                                    user.email || userImg ?
                                        <div>
                                            <Button style={{ backgroundImage: `url(${userImg})`, backgroundSize: 'cover', height: '40px', width: '40px', borderRadius: '50%' }} variant="primary" onClick={handleShow} className="text-white">
                                            </Button>
                                            <Offcanvas className="quality" show={showUser} onHide={handleClose} placement="end">
                                                <Offcanvas.Header className="ms-auto" closeButton>
                                                </Offcanvas.Header>
                                                <Offcanvas.Body>
                                                    <div className=" d-flex justify-content-center align-items-center">
                                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                                            <div className="user-profile mb-4">
                                                                <img src={userImg} alt="user-profile" />
                                                            </div>
                                                            <h4 className="mb-3">{user.displayName}</h4>
                                                            <p>{user.email}</p>
                                                            <button onClick={logOut} className="px-5 btn btn-danger text-white rounded-pill"> Logout</button>
                                                        </div>
                                                    </div>
                                                    <Table hover className="mt-5">
                                                        <tbody>
                                                            <Link to=""></Link>
                                                            <tr>
                                                                <td>
                                                                    <Link className="text-capitialize text-decoration-none text-color" to="/my-order">My Bookings</Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <Link className="text-capitialize text-decoration-none text-color" to="/manage-all-order">Manage All Bookings</Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <Link className="text-capitialize text-decoration-none text-color" to="/add-packages">Add A Package<span class="badge bg-dark rounded-pill ms-2">New</span></Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </Offcanvas.Body>
                                            </Offcanvas>
                                        </div>
                                        :
                                        <Link to="/login"><button title="login/register" className="px-3 text-dark btn btn-primary shadow text-white rounded-pill"><i className="fas fa-user me-2"></i>Log In</button></Link>
                                }
                            </div>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;