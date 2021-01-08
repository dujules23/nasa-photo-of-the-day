// imported useState and useEffect
import React , { useState, useEffect } from "react";
import "./App.css";
//imported axios and Posts(component needed to be connected to the main page, app)
import axios from "axios"
import Posts from "./Posts"



//Styling 
// const AppBackground = styled.section`
//   background-image: url/
// `




// console.log(useState)
function App() {
  const [post, setPost] = useState({});

  //useEffect
  useEffect(() => {
    //axios call, pulls out data from the object, don't forget the dependency array!
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
  //return with rending of the Post Component
  return (
    <div>
      
      <p>
       <Posts post={post}/>
      </p>
    </div>
  );
}


export default App;
