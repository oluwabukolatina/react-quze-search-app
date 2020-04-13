import React, {useContext} from 'react';
import {Form, Nav, Navbar, FormControl, Button} from "react-bootstrap";
import AppContext from "../context/AppContext";

const NavBar = () => {
    const {name, searchWithName, onNameChange} = useContext(AppContext);
    console.log(name)
    return (
        <Navbar bg="light" variant="dark" style={{margin: '1%'}}>
            <div style={{width: '100%', display: 'flex'}}>
                <div style={{width: '25%', }}>
                    <Navbar.Brand href="#home" style={{color: 'black'}}>Navbar</Navbar.Brand>
                </div>
                <div style={{width: '75%'}}>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" style={{width: '20%', color: 'black'}} >Trending</Nav.Link>
                        <Nav.Link href="#features" style={{width: '20%', color: 'black'}}>Partners</Nav.Link>
                        <Nav.Link href="#features" style={{width: '20%', color: 'black'}}>Contact Us</Nav.Link>
                        <FormControl style={{width: '20%', color: 'black'}} type="text" placeholder="Search With Name" name="name" onChange={onNameChange} value={name} className="mr-sm-2" />
                        <Button variant="outline-info" onClick={() => searchWithName(name)}>Search</Button>
                    </Nav>
                </div>
            </div>
        </Navbar>
    );
};

export default NavBar;