import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap'


class MyNavBar extends Component {
    render() {
        return (
            <Navbar expand="lg">
                <Navbar.Brand>Morley Stuff</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/professional">Professional</Nav.Link>
                        <Nav.Link href="/social">Social</Nav.Link>
                        <Nav.Link href="/profiles">Profiles</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MyNavBar;