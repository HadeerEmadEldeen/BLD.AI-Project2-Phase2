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
    if(loading)
    return(
        <> 
        <button class="btn btn-primary" type="button" disabled>
          <span
            class="spinner-border spinner-border-lg"
            role="status"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Loading...</span>
        </button>
        <button class="btn btn-primary" type="button" disabled>
          <span
            class="spinner-border spinner-border-lg"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </button>
      </>
     );
    
   
    if(error) return (
      <>
        <div class="alert alert-danger alert-dismissible fade show ">
          <h4 class="alert-heading">
            <i class="bi-exclamation-octagon-fill"></i> Oops! Something went
            wrong.
          </h4>
          <p>
            Please wait for render a valid value for all the required fields before
            . If you need any help just place the mouse pointer above
            refresh icon .
          </p>
          <hr />
          <p class="mb-0">
            Once you have filled all the details, click on the 'Next' button to
            continue.
          </p>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
          ></button>
        </div>
      </>
    );
  return (
    <CoursesContext.Provider value={data}>
     <Routers></Routers>
    </CoursesContext.Provider>
  )
}

export default FatchData