import React from 'react';
import './Home.css';

// components
import Product from './Product';

const homeImg = 'https://via.placeholder.com/1600x575';
const productImg = 'https://via.placeholder.com/250x120.png?';

const Home = () => {
  return (
    <div className='home'>
      <img className='home__image' src={homeImg} alt='Home Page Img' />

      {/* Products render */}
      <div className='home__row'>
        <Product
          id='123'
          title='New Product'
          price={11.06}
          rating={5}
          image={productImg}
        />
      </div>
    </div>
  );
};

export default Home;
