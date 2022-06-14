import React from "react";
import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const Layout = () => {
    return (
        <>
        <Nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/learningreact">Learning React</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </Nav>

        <Outlet />
        </>
    )
}

export default Layout;