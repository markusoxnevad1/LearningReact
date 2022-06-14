import React from 'react';
import '../App.scss';
import Drawing from '../drawing.png';

const Home = () => {
    return (
    <>
        <h1 className="backgroundstyling">Home</h1>
        <div className="App">
            <img src={Drawing} alt="React Logo" />
        </div>
    </>
  )};
  
  export default Home;
  