import React from 'react';
import './Home.css';

const imgPlaceHolder = 'https://via.placeholder.com/1600x575';

const Home = () => {
  return (
    <div className='home'>
      <img 
      className='home__image'
      src={imgPlaceHolder} alt="Home Page Img"/>
    </div>
  );
};

export default Home;
