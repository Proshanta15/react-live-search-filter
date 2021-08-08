import React from 'react';

const SerImg = (props) =>{

    const img = `https://source.unsplash.com/500x400/?${props.name}`
    return(
        <>
            <img src={img} alt="search"/>
        </>
    )
}

export default SerImg;