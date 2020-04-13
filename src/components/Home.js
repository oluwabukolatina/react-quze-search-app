import React, {Fragment} from 'react';
import {CardDeck, Card, Container} from "react-bootstrap";
import NavBar from "../layouts/NavBar";

const Home = () => {
    return (
       <Fragment>
           <NavBar/>
           <Container style={{    marginTop: '3%'}}>
               <div style={{display: 'flex', width: '100%'}}>
                   <CardDeck>
                       <div style={{ width: '25%'}}>
                           <Card style={{marginBottom: '9%'}}>
                               <Card.Img variant="top" src="https://via.placeholder.com/150" />
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
                       </div>

                       <div style={{ width: '25%'}}>
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
                       </div>

                       <div style={{ width: '25%'}}>
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
                       </div>

                       <div style={{ width: '25%'}}>
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
                       </div>

                       <div style={{ width: '25%'}}>
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
                       </div>

                       <div style={{ width: '25%'}}>
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
                       </div>


                   </CardDeck>
               </div>
           </Container>
       </Fragment>
    );
};

export default Home;