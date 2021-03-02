import React from 'react';
import './Checkout.css';
import { useStateValue } from '../context/StateProvider';

// components
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const checkoutAdImg =
  'https://via.placeholder.com/1120x90.png?text=Online+Shop+banner+placeholder';

const Checkout = () => {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src={checkoutAdImg}
          alt='advertisment image'
        />

        {cart?.length === 0 ? (
          <div>
            <h2>Your Shopping Cart is empthy</h2>
            <p>
              You have no items in your cart. To buy one or more items, click
              "Add to Cart" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className='checkout__title'>Your Shopping Cart</h2>
            {/* List of all products in the shopping cart */}
            {cart?.map(item => (
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
      {cart.length > 0 && (
        <div className='checkout__right'>
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
