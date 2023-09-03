import React, { useState } from 'react';
import { useEffect } from 'react';
import Draggable from 'react-draggable';
import './App.css';

let apikey = "MuEhlmtd-8jmoylP1xlwF3dhqWysRM-oLncKlSxr6dM";

function App() {

  const [posts, setPosts] = useState([]);
  const [backImg, setbackImg] = useState("");

  useEffect( () => {
    // fetch('https://api.unsplash.com/photos/random?client_id=' + apikey)
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
        // setbackImg(data.urls.regular);
        setbackImg(data.message);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      {/* <Draggable> */}
        {/* <div className='text' contenteditable="true">{posts.alt_description}</div> */}
      {/* </Draggable> */}
      <div className='bgimg'>
        <img className='backimg' src={backImg} alt='image' />
      </div>
    </>
  );
}

export default App;
