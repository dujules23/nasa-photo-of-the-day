//imports
import React from "react";



export default function Posts (props) {
    //setting up the props which will be used to connect this component to the App.js
    const { post } = props

    
     //layout of the component, returns designated data using jsx
    return (
        <div className="container">
            <img className="App-logo" alt="logo"></img>
            <div>
                <header className="App-header">Photo of the Day </header>
            </div>    
            <div className="img" alt="photo-of-the-day">
                <img src={post.url} alt=""></img>
            </div>
            <div className="img-info">
                <h3> Copyright: {post.copyright}</h3>
                <p>Description: {post.explanation}</p>
                    <p>Date: {post.date} </p>
            </div>
        </div>
    )
  
}  