//imports
import React , { useState } from "react";





export default function Posts (props) {
    const { post } = props

    
     
    return (
        <div className="container">
            <header>Photo of the Day </header>
            <div className="img">
                <img src={post.hdurl}></img>
            </div>
            <div className="img-info">
                <h3> Copyright: {post.copyright}</h3>
                <p>Description: {post.explanation}</p>
                <p>Date: {post.date} </p>
            </div>
        </div>
    )
  


    
    

}  