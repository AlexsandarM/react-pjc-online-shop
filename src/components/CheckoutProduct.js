import React from 'react';
import './CheckoutProduct.css';

import {useStateValue} from '../context/StateProvider'

const CheckoutProduct = props => {
  const { id, title, image, price, rating } = props;

  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    // remove product from the cart
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id
    })
  }

  return (
    <div className='checkoutProduct'>
      <img
        className='checkoutProduct__image'
        src={image}
        alt='Product in Cart Image'
      />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className='checkoutProduct__rating'>
          {Array(rating)
            .fill()
            .map(_ => (
              <p>🌟</p>
            ))}
        </div>

        <button className='checkoutProduct__button' onClick={removeFromCart}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
