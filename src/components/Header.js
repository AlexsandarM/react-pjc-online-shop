import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../context/StateProvider';

const Header = () => {
  const [{ cart }] = useStateValue();
  console.log(cart)
  return (
    <nav className='header__nav'>
      <Link className='header__logo' to='/'>
        <i className='fas fa-shopping-bag' /> Online Shop
      </Link>
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__nav'>
        <Link to='/login' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Hello</span>
            <span className='header__optionLineTwo'>Sign In</span>
          </div>
        </Link>
        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Products</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
        </Link>
        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Account</span>
          </div>
        </Link>
        <Link to='/checkout' className='header__link'>
          <div className='header__optionBasket'>
            <ShoppingCartIcon />
            <span className='header__optionLineTwo header__optionBasketCount'>
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
