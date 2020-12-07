import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import { createStructuredSelector } from 'reselect';

import { withRouter } from 'react-router-dom';


import './cart-dropdown.styles.scss';


// connect provide dispatch to the props if we don't have second element for the connect
const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
);


// const mapStateToProps = ({ cart: { cartItems } }) => ({
//     cartItems
// });

// use selectCartItem selector to avoid re-render for the same value (other action cause states change and rerender ) 
// const mapStateToProps = state => ({
//   cartItems: selectCartItems(state)
// });

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});

// all of higher order component return components also take components as argument
// withRouter take the components return from connect call as component argument
// so our component be able to access history/location/match props
export default withRouter(connect(mapStateToProps)(CartDropdown));