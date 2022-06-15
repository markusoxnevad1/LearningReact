import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';

const Layout = () => {
    return (
        <>
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light" variant="dark">
            <ul className="nav nav-tabs">
                <li>
                    <Nav.Link href="/">Home</Nav.Link>
                </li>
                <li>
                    <Nav.Link href="/about">About</Nav.Link>
                </li>
                <li>
                    <Nav.Link href="/learningreact">Learning React</Nav.Link>
                </li>
                <li>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </li>
            </ul>
        </Navbar> 

        <Outlet />
        </>
    )
}

export default Layout;