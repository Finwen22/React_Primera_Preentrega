import React from "react";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget"; 

const NavBar = ({ cartItemCount }) => {
    return (
        <div className="app-container">
            <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Tu Ropita</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                </Navbar.Collapse>
                <div className="navbar-bottom">
                    <Nav.Link href="#home" className="nav-item">
                        Home
                    </Nav.Link>
                    <Nav.Link href="#productos" className="nav-item">
                        Productos
                    </Nav.Link>
                    <Nav.Link href="#contacto" className="nav-item">
                        Contacto
                    </Nav.Link>
                    <div className="d-flex">
                        <CartWidget />
                    </div>
                </div>
            </Navbar>
        </div>
    );
};

export default NavBar;