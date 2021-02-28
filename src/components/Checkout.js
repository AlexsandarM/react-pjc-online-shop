import React from 'react';
import './Checkout.css';
import { useStateValue } from '../context/StateProvider';

// components
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <img className='checkout__ad' src='' alt='advertisment image' />

      {cart?.length === 0 ? (
        <div>
          <h2>Your Shopping Cart is empthy</h2>
          <p>
            You have no items in your cart. To buy one or more items, click "Add
            to Cart" next to the item.
          </p>
        </div>
      ) : (
        <div>
          <h2 className='checkout_title'>Your Shopping Cart</h2>
          {/* List of all products in the shopping cart */}
          {cart.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Checkout;
