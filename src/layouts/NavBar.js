import React, {useContext} from 'react';
import {Form, Nav, Navbar, FormControl, Button} from "react-bootstrap";
import AppContext from "../context/AppContext";
import {Link} from "react-router-dom";

const NavBar = () => {
    const {name, searchWithName, onNameChange} = useContext(AppContext);
    return (
        <Navbar bg="light" variant="dark" style={{margin: '1%'}}>
            <div style={{width: '100%', display: 'flex'}}>
                <div style={{width: '25%', }}>
                    <Link to="/" style={{textDecoration: 'none', color: 'black'}}>QUZE</Link>

                </div>
                <div style={{width: '75%'}}>
                    <Nav className="mr-auto">
                        <Link to="/" style={{textDecoration: 'none', color: 'black', width: '20%',}}>Trending</Link>
                        <Link to="/" style={{textDecoration: 'none', color: 'black', width: '20%',}}>Contact Us</Link>
                        <Link to="/" style={{textDecoration: 'none', color: 'black', width: '20%',}}>About</Link>
                        <FormControl style={{width: '20%', color: 'black'}} type="text" placeholder="search with course name" name="name" onChange={onNameChange} value={name} className="mr-sm-2" />
                        <Button variant="outline-info" onClick={() => searchWithName(name)}>Search</Button>
                    </Nav>
                </div>
            </div>
        </Navbar>
    );
};

export default NavBar;