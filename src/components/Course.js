import React, {useEffect, useState} from 'react';
import { useLocation} from 'react-router-dom'
import NavBar from "../layouts/NavBar";
import {Card, Container} from "react-bootstrap";

const Course = ({history}) => {
    const [single, setSingle] = useState({});

    let location = useLocation();
    useEffect(() => {
        if(location.state && location.state.course){
            const {course} = location.state;

            setSingle(course)
        } else {
            history.push("/")
        }
    }, [location.state, history]);

    return (
        <div>
            <NavBar/>
            <Container>
                <div className="single-product">
                    <Card>
                        <Card.Img variant="top" src={single.imgUrl ? single.imgUrl : "https://via.placeholder.com/150"}/>
                        <hr/>
                        <Card.Body>
                            <Card.Title>{single.title}</Card.Title>
                            <hr/>
                            <Card.Text>

                                {single.shortDescription}
                            </Card.Text>
                            <hr/>
                            <div className="product-details">
                                <Card.Text style={{width: '50%'}}>
                                    Author: {single.author}
                                </Card.Text>
                                <Card.Text style={{width: '50%'}}>
                                    Level: {single.level}
                                </Card.Text>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div style={{display: 'flex'}}>
                                <small style={{width: '50%', textAlign: 'inherit'}} className="text-muted"> Provider: {single.provider}</small>
                            </div>
                        </Card.Footer>
                    </Card>

                </div>
            </Container>
        </div>
    );
};

export default Course;