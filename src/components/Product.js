import React from 'react';
import './Product.css';
import { useStateValue } from '../context/StateProvider';

const Product = props => {
  const { id, title, image, price, rating } = props;
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    // Add item to cart
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map(_ => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img className='product__img' src={image} alt={title} />
      <button onClick={addToCart} className='product__button'>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
