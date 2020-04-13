import React from 'react';
import {Form, Nav, Navbar, FormControl, Button} from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="light" variant="dark" style={{margin: '1%'}}>
            <div style={{width: '100%', display: 'flex'}}>
                <div style={{width: '50%', }}>
                    <Navbar.Brand href="#home" style={{color: 'black'}}>Navbar</Navbar.Brand>

                </div>
                <div style={{width: '50%'}}>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" style={{width: '25%', color: 'black'}} >Trending</Nav.Link>
                        <Nav.Link href="#features" style={{width: '25%', color: 'black'}}>Mission</Nav.Link>
                        <Nav.Link href="#features" style={{width: '25%', color: 'black'}}>Partners</Nav.Link>
                        <Nav.Link href="#features" style={{width: '25%', color: 'black'}}>Contact Us</Nav.Link>

                    </Nav>

                </div>
            </div>
            {/*<Form inline>*/}
            {/*    <FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
            {/*    <Button variant="outline-info">Search</Button>*/}
            {/*</Form>*/}
        </Navbar>
    );
};

export default NavBar;