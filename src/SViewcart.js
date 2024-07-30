import React, { useEffect, useState, useContext } from 'react';
import './Sviewcart.css';
import { cartContext } from './App';
import Header from './Header';



const SViewcart = () => {
  const { cart, setCart } = useContext(cartContext);

  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(Math.round(cart.reduce((acc, curr) => acc + parseFloat(curr.amt), 0)));
  }, [cart])

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <>
      {/* <Header /> */}
      <h1 className='cart-heading'>Cart Products</h1>
      <div className='cart-container d-flex justify-content-around'>
        {/* {cart.map()=>{
          return()
        }} */}
        {
          cart.map((product) => (
            <div className='cart-product'>
              <div>
                <img src={product.pic} alt='image' className='cart-img' />
              </div>
              <div className='cart-product-details'>
                <h3>{product.name}</h3>
                <p>Price Rs: {product.amt}</p>
              </div>
              <div className='remove-btn'>
                <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
              </div>
            </div>
          ))
        }
      </div>
      <h2 className='cart-amt'>Total Amount Rs:{total}</h2>

    </>

  )
}
export default SViewcart;