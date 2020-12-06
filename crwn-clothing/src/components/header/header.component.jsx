import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { connect } from 'react-redux'; // higher order component to let us to access redux, function take component as arguments, return a new souped up compinenent

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


import {auth} from '../../firebase/firebase.utils';

import './header.styles.scss';

const header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='Logo' />
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>

            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            }
            <CartIcon />
        </div>  
        {hidden ? null :
        <CartDropdown />}
    </div>
)


// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser
// });

// destructure the user and cart
const mapStateToProps = ({user: {currentUser}, cart: { hidden }}) => ({
    currentUser,
    hidden
});


export default connect(mapStateToProps)(header);