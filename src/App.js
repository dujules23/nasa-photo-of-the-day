import React , { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import Posts from "./Posts"


// console.log(useState)
function App( props ) {
  const [post, setPost] = useState({});


  useEffect(() => {
    //axios call
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DCJZcCTd2c7tifAhZjBG0PhseZR6cu0GWj27GgFi`)
  .then(res => {
    setPost(res.data)
    console.log('success')
    console.log(res)
  })
  .catch(err => {
    console.log('reject')
    console.log(err)
  })
  },[]) 

  console.log(post)
  return (
    <div className="App">
      
      <p>
       <Posts post={post}/>
      </p>
    </div>
  );
}


export default App;
