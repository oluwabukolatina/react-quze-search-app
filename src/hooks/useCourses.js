import {useEffect, useState} from "react";
import axios from 'axios'
import {COURSES_URL} from "../services/Url";

const useCourses = () => {
    const [courses, setCourses] = useState([]);
    const [name, setName] = useState('')
    const [allCourses, setAllCourses] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [provider, setProvider] = useState([]);
    const [level, setLevel] = useState([]);
    const [category, setCategory] = useState([]);
    const[loading, setLoading] = useState(false);

    const getCourses = async () =>{
        try {
            setLoading(true)
            const response = await axios.post(`${COURSES_URL}`);
            if (response.data.success === true) {
                setLoading(false)

                setCourses(response.data.hits.hits);
                setAllCourses(response.data.hits.hits);
                setLevel(response.data.hits.hits.map(r =>(r._source.level)).filter((ite, index) =>{return response.data.hits.hits.map(r =>(r._source.level)).indexOf(ite) === index}))
                setCategory(response.data.hits.hits.map(r =>(r._source.category)).filter((ite, index) =>{return response.data.hits.hits.map(r =>(r._source.category)).indexOf(ite) === index}))
                setProvider(response.data.hits.hits.map(r =>(r._source.provider)).filter((ite, index) =>{return response.data.hits.hits.map(r =>(r._source.provider)).indexOf(ite) === index}))
                setAuthors(response.data.hits.hits.map(r =>(r._source.author)).filter((ite, index) =>{return response.data.hits.hits.map(r =>(r._source.author)).indexOf(ite) === index}))


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
            setCourses(allCourses.filter(res => res._source.title === param));
        }
    };

    const onNameChange = (e) => {
        const {value} = e.target;
        setName(value)
    };

    const providerChange = (e)  => {
        const {value} = e.target;
        if(value){
            setCourses(allCourses.filter(c => c._source.provider === value))
        }
    }

    const levelChange = (e)  => {
        const {value} = e.target;
        if(value){
            setCourses(allCourses.filter(c => c._source.level === value))
        }
    }

    const authorChange = (e)  => {
        const {value} = e.target;
        if(value){
            setCourses(allCourses.filter(c => c._source.author === value))
        }
    }

    const categoryChange = (e)  => {
        const {value} = e.target;
        if(value){
            setCourses(allCourses.filter(c => c._source.category === value))
        }
    }


    return {courses, name, searchWithName, onNameChange, authors, provider, level, category, providerChange, levelChange, authorChange, categoryChange, loading}
};

export default useCourses;