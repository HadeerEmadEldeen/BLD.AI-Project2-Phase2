import React from 'react'
import { useEffect, useState } from "react";
import CoursesContext from './CoursesContext';
import Routers from './Routers';
function FatchData() {
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        fetch('http://localhost:3001/courses')
            .then(response => {
                if(response.ok){
                    return response.json();
                }
                throw response;
            })
            .then(data=>{
                setData(data);
            })
            .catch(error=>{
                console.error("error fetching data",error);
                setError(error);
            })
            .finally(()=>{
                setLoading(false);
            })
    },[])
    if(loading) return "Loading";
    if(error) return "Error";
  return (
    <CoursesContext.Provider value={data}>
     <Routers></Routers>
    </CoursesContext.Provider>
  )
}

export default FatchData