import {useEffect, useState} from "react";
import axios from 'axios'
import {COURSES_URL} from "../Url";

const useCourses = () => {
    const [courses, setCourses] = useState([]);
    const [name, setName] = useState('')
    const [allCourses, setAllCourses] = useState([]);

    const getCourses = async () =>{
        try {
            const response = await axios.get(`${COURSES_URL}`);
            if(response.data){
                setCourses(response.data);
                setAllCourses(response.data)
            }
        } catch (e) {
            if(e){
                console.log('something went wrong')
            }
        }
    };
    useEffect(() => {
        getCourses()
    }, []);

    const searchWithName = (param) => {
        if(param){
            setCourses(allCourses.filter(res => res.title === param));
        }
    }

    const onNameChange = (e) => {
        const {value} = e.target;
        setName(value)
    }

    return {courses, name, searchWithName, onNameChange}
}

export default useCourses;