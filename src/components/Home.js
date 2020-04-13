import React, {Fragment} from 'react';
import {CardDeck, Card, Container} from "react-bootstrap";
import NavBar from "../layouts/NavBar";

const Home = () => {
    return (
       <Fragment>
           <NavBar/>
           <Container>
               <CardDeck>
                   <Card>
                       <Card.Img variant="top" src="holder.js/100px160" />
                       <Card.Body>
                           <Card.Title>Card title</Card.Title>
                           <Card.Text>
                               This is a wider card with supporting text below as a natural lead-in to
                               additional content. This content is a little bit longer.
                           </Card.Text>
                       </Card.Body>
                       <Card.Footer>
                           <small className="text-muted">Last updated 3 mins ago</small>
                       </Card.Footer>
                   </Card>
                   <Card>
                       <Card.Img variant="top" src="holder.js/100px160" />
                       <Card.Body>
                           <Card.Title>Card title</Card.Title>
                           <Card.Text>
                               This card has supporting text below as a natural lead-in to additional
                               content.{' '}
                           </Card.Text>
                       </Card.Body>
                       <Card.Footer>
                           <small className="text-muted">Last updated 3 mins ago</small>
                       </Card.Footer>
                   </Card>
                   <Card>
                       <Card.Img variant="top" src="holder.js/100px160" />
                       <Card.Body>
                           <Card.Title>Card title</Card.Title>
                           <Card.Text>
                               This is a wider card with supporting text below as a natural lead-in to
                               additional content. This card has even longer content than the first to
                               show that equal height action.
                           </Card.Text>
                       </Card.Body>
                       <Card.Footer>
                           <small className="text-muted">Last updated 3 mins ago</small>
                       </Card.Footer>
                   </Card>
               </CardDeck>
           </Container>
       </Fragment>
    );
};

export default Home;