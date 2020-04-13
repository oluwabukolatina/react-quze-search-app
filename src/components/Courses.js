import React, {Fragment, useContext} from 'react';
import {CardDeck, Card, Container, Form} from "react-bootstrap";
import NavBar from "../layouts/NavBar";
import libs from "../utils/libs";
import AppContext from "../context/AppContext";
import {Link} from "react-router-dom";

const Courses = () => {

    const {courses, authors, provider, level, category, providerChange, levelChange, authorChange, categoryChange} = useContext(AppContext)

    const displayCourses = () => {
        if(courses && courses.length){
            return  courses.map(course => (
                 <div style={{ width: '25%'}} key={course.courseId}>
                     <Card style={{marginBottom: '9%'}}>
                         <Card.Img variant="top" src={course.imgUrl ? course.imgUrl : "https://via.placeholder.com/150"}/>
                         <Card.Body>
                             <Card.Title>{course.title}</Card.Title>
                             <hr/>
                             <Card.Text>
                                 {libs.truncateWords(course.shortDescription, 20)}
                             </Card.Text>
                         </Card.Body>
                         <Card.Footer>
                             <div style={{display: 'flex'}}>
                             <small style={{width: '50%', textAlign: 'inherit'}} className="text-muted">{course.provider}</small>

                                 <Link  style={{textDecoration: 'none',
                                     color: 'black',
                                 }}
                                        to={{
                                            pathname: `/course/${course.title.replace(/ /g, '-').toLowerCase()}`,
                                            state: {
                                                course
                                            }
                                        }}>
                                     <small style={{width: '50%', textAlign: 'end'}} className="text-muted">More Details</small>
                                 </Link>

                             </div>
                         </Card.Footer>
                     </Card>
                 </div>
             ))
        }
        return null
    };

    return (
       <Fragment>
           <NavBar/>
           <Container style={{    marginTop: '3%'}}>
               <div style={{width: '100%', display: 'flex', marginTop: '3%', marginBottom: '3%'}}>
                   <Form style={{width: '25%', padding: '2%'}}>
                       <Form.Control as="select" size="lg" custom
                                     onChange={levelChange}
                                     name="level"
                            >
                           <option value="">Filter By Level</option>
                           {level ? level.map(a => (
                               <option value={a}>{a}</option>
                           )) : null}
                       </Form.Control>
                       {/*</Form.Group>*/}
                   </Form>
                   <Form style={{width: '25%', padding: '2%'}}>
                       <Form.Control as="select" size="lg" custom
                                     onChange={categoryChange}
                                     name="category">
                           <option value="">Filter By Category</option>
                           {category ? category.map(a => (
                               <option value={a}>{a}</option>
                           )) : null}
                       </Form.Control>
                   </Form>
                   <Form style={{width: '25%', padding: '2%'}}>
                       <Form.Control as="select" size="lg" custom
                           onChange={providerChange}
                                     name="provider">
                           <option value="">Filter By Provider</option>
                           {provider ? provider.map(a => (
                               <option value={a}>{a}</option>
                           )) : null}
                       </Form.Control>
                   </Form>
                   <Form style={{width: '25%', padding: '2%'}}>
                       <Form.Control as="select" size="lg" custom
                           onChange={authorChange}
                                     name="author">
                           <option value="">Filter By Author</option>
                           {authors ? authors.map(a => (
                               <option value={a}>{a}</option>
                           )) : null}
                       </Form.Control>
                   </Form>
               </div>

               <div style={{display: 'flex', width: '100%'}}>
                   <CardDeck>
                       {displayCourses()}
                   </CardDeck>
               </div>
           </Container>
       </Fragment>
    );
};

export default Courses;