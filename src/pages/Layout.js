import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../App.scss';

const Layout = () => {
    return (
        <>
        <Navbar className="navbar navbarstyling" variant="dark">
            <div className="nav">
                    <Nav.Link className="nav-link" href="/">Home</Nav.Link>
                    <Nav.Link className="nav-link" href="/about">About</Nav.Link>
                    <Nav.Link className="nav-link" href="/learningreact">Learning React</Nav.Link>
                    <Nav.Link className="nav-link" href="/contact">Contact</Nav.Link>
                    <Nav.Link className="nav-link" href="/highcharts">Highcharts</Nav.Link>
            </div>
        </Navbar> 

        <Outlet />
        </>
    )
}

export default Layout;