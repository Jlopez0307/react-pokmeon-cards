import React, { useState, useEffect } from 'react';
import {v4 as uuid} from 'uuid';
import axios from 'axios';

//Accepts a URL
const useAxios = (baseUrl) => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    //After the first render, fetch our data
    const getData = async (restOfUrl = "") => {
        if( restOfUrl !== ""){
            const res = await axios.get(`${baseUrl}${restOfUrl}`);
            // console.log(res)
            setResponse(data => [...data, {...res.data, id: uuid()}]);
        } else {
            const res = await axios.get(`${baseUrl}`);
            // console.log(res)
            setResponse(data => [...data, {...res.data, id: uuid()}]);
        }
    }
    // console.log(response)
    return [response, getData];
    
};

export default useAxios;