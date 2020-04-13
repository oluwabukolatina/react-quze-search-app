import {useEffect, useState} from "react";
import axios from 'axios'
import {COURSES_URL} from "../Url";

const useCourses = () => {
    const [courses, setCourses] = useState([])

    const getCourses = async () =>{
        try {
            const response = await axios.get(`${COURSES_URL}`);
            console.log(response.data)
            if(response.data){
                setCourses(response.data)
            }
        } catch (e) {
            if(e){
                console.log('something went wrong')
            }
        }
    };
    useEffect(() => {
        getCourses()
    }, [])

    return {courses}
}

export default useCourses;