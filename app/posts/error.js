'use client'

import {useEffect} from "react";

const Error = ({error, reset}) => {

    useEffect(() => {
        console.log(error);
    },[error])

    return(
        <div>
            <h2>Something went Wrong!</h2>
            <button onClick={()=>{
                reset();
            }}>
                Try Again
            </button>
        </div>
    )
}

export default Error;