import React, { Fragment } from 'react';
import './Subtotal.css';

import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../context/StateProvider';
import { getCartTotal } from '../context/contextReducer';

const Subtotal = () => {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={value => (
          <Fragment>
            <p>
              Subtotal ({cart.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </Fragment>
        )}
        decimalScale={2}
        fixedDecimalScale={true}
        value={getCartTotal(cart)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button className='subtotal__button'>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
