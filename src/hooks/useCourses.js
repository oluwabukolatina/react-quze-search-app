import {useEffect, useState} from "react";
import axios from 'axios'
import {COURSES_URL} from "../Url";

const useCourses = () => {
    const [courses, setCourses] = useState([]);
    const [name, setName] = useState('')
    const [allCourses, setAllCourses] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [provider, setProvider] = useState([]);
    const [level, setLevel] = useState([]);
    const [category, setCategory] = useState([]);

    const getCourses = async () =>{
        try {
            const response = await axios.get(`${COURSES_URL}`);
            if(response.data){
                setCourses(response.data);
                setAllCourses(response.data);
                setLevel(response.data.map(r =>(r.level)).filter((ite, index) =>{return response.data.map(r =>(r.level)).indexOf(ite) === index}))
                setCategory(response.data.map(r =>(r.category)).filter((ite, index) =>{return response.data.map(r =>(r.category)).indexOf(ite) === index}))
                setProvider(response.data.map(r =>(r.provider)).filter((ite, index) =>{return response.data.map(r =>(r.provider)).indexOf(ite) === index}))
                setAuthors(response.data.map(r =>(r.author)).filter((ite, index) =>{return response.data.map(r =>(r.author)).indexOf(ite) === index}))
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
    };

    const onNameChange = (e) => {
        const {value} = e.target;
        setName(value)
    };

    const providerChange = (e)  => {
        const {value} = e.target;
        if(value){
            setCourses(allCourses.filter(c => c.provider === value))
        }
    }

    const levelChange = (e)  => {
        const {value} = e.target;
        if(value){
            setCourses(allCourses.filter(c => c.level === value))
        }
    }

    const authorChange = (e)  => {
        const {value} = e.target;
        if(value){
            setCourses(allCourses.filter(c => c.author === value))
        }
    }

    const categoryChange = (e)  => {
        const {value} = e.target;
        if(value){
            setCourses(allCourses.filter(c => c.category === value))
        }
    }


    return {courses, name, searchWithName, onNameChange, authors, provider, level, category, providerChange, levelChange, authorChange, categoryChange}
};

export default useCourses;