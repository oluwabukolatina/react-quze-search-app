import React, {Fragment} from 'react';
import {CardDeck, Card, Container} from "react-bootstrap";
import NavBar from "../layouts/NavBar";
import useCourses from "../hooks/useCourses";
import libs from "../utils/libs";

const Home = () => {
    const {courses} = useCourses();

    // "courseId": 19,
    //     "title": "Understanding Machine Learning",
    //     "shortDescription": "Hello! My name is David Chappell, and I'm the author of Understanding Machine Learning here at Pluralsight. Have you ever wondered what machine learning is? That’s what this course is designed to teach you. You’ll explore the open source programming language R, learn about training and testing...",
    //     "url": "https://www.pluralsight.com/courses/understanding-machine-learning",
    //     "imgUrl": "https://pluralsight.imgix.net/course-images/understanding-machine-learning-v1.jpg",
    //     "location": null,
    //     "providerRatings": 4.6,
    //     "extraDetails": null,
    //     "effort": null,
    //     "duration": 0,
    //     "durationPeriod": "h",
    //     "costUsd": null,
    //     "startDate": null,
    //     "provider": "Pluralsight",
    //     "author": "David Chappell",
    //     "level": "Beginner",
    //     "medium": "online",
    //     "language": "English",
    //     "academicProvider": null,
    //     "category": "azure-ml",
    //     "quzeCategory": "Machine Learning",
    //     "programType": "Online course",
    //     "tags": "virl,osi,open-source,python,catia,html,javascript,css,Data Science,git,r,sql,jquery,Machine Learning,Data Structures,algorithms,node.js,azure-ml,machine-learning,artificial-intelligence",
    //     "quzeTags": "Design,Azure,Language,Programming,Machine Learning",
    //     "numUpvotes": 0,
    //     "numRatings": 0,
    //     "avgRatings": 0

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
                                 {libs.truncateWords(course.shortDescription, 65)}
                             </Card.Text>
                         </Card.Body>
                         <Card.Footer>
                             <small className="text-muted">{course.provider}</small>
                         </Card.Footer>
                     </Card>
                 </div>
             ))
        }
        return null
    }

    return (
       <Fragment>
           <NavBar/>
           <Container style={{    marginTop: '3%'}}>
               <div style={{display: 'flex', width: '100%'}}>
                   <CardDeck>
                       {displayCourses()}
                   </CardDeck>
               </div>
           </Container>
       </Fragment>
    );
};

export default Home;