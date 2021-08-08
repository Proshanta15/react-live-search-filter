import React, { useState } from 'react';
import SerImg from './SerImg';


const Search = () =>{

    const [img, setImg] = useState("")

    const inputEvent = (event) =>{
        const data = event.target.value;
        setImg(data);
    }



    return(
        <>
        <div className="main">
        <h1> Type anything to find similar Image</h1> 

        <input type="text" value={img} onChange={inputEvent} placeholder="Enter any Letter or Word" />

        {img === "" ? null : <SerImg name={img}/>}
        
        </div>
            
        </>
    )
}
export default Search;