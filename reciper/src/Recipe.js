import React, { Component } from 'react';

const Recipe=({title,image,calories,ingredients,url,label})=>{
    return(
        <div className=' '>
            <h1 className="text-center text-wrap m-2">{title}</h1>
            
            <p className="text-center text-wrap m-2">Calories:{Math.round(calories)}</p>
            <img src={image}className='mx-auto rounded d-block m-5' ></img> 
           {/*<a  href={url} className="text-center text-wrap m-200" target="_blank">Recipe:</a>*/}
        </div>
    );
}
export default Recipe;