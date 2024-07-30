import React, { useState } from 'react';
import data from "./assets/product.json";
import { Sproduct } from './Sproduct';
import './Shop.css';
import Footerpage from './Footerpage';

const Shop = () => {
  const [Sproducts] = useState(data);
  return (
    <>
      <div className="about-section">
        <h1 className="homepageabout">Shop with Us</h1>
        <p>Welcome to the Arockiya Farm Shop! Here, you can explore our wide range of premium,
          sustainably-grown produce and farm products.
          Our shop offers everything from fresh fruits and vegetables to artisanal goods made with care and commitment to quality.</p>
        <p>At Arockiya Farm, we believe in the power of local,
          sustainable agriculture. By shopping with us, you support environmentally friendly farming practices and contribute to the well-being of our community. Our products are carefully cultivated and harvested to ensure the highest standards of freshness and flavor.</p>

      </div>

      <div className='row'>
        <div className="product-container">
          {Sproducts.map((product) => (
            <Sproduct key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footerpage/>
    </>
  );
}

export default Shop;