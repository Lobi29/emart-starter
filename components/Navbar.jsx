import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p>
        <Link href='/'>emart store</Link>
      </p>
      <button type='button' className='cart-icon'>
        <AiOutlineShopping />
        <span className='cart-item-qty'>
          19
        </span>
      </button>
    </div>
  )
}

export default Navbar;