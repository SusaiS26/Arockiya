import './App.css';
import Homepage from './Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { createContext, useState } from 'react';
import SViewcart from './SViewcart';
import Shop from './Shop';
import Header from './Header';
import Gallery from './Gallery';
import Aboutpage from './Aboutpage';
import Footerpage from './Footerpage';
import Contact from './Contact';


export const cartContext = createContext();

function App() {

  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <cartContext.Provider value={{ cart, setCart }}>
        <BrowserRouter>
          {['/', '/shop', '/SViewcart', '/Gallery', '/Aboutpage', '/Contact'].includes(window.location.pathname) && (
            <Header cart={cart} />
          )}

          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path='/Header' element={< Header />} />
            <Route exact path='/SViewcart' element={< SViewcart />} />
            <Route exact path='/Gallery' element={< Gallery />} />
            <Route exact path='/Aboutpage' element={<Aboutpage />} />
            <Route exact path='/Footerpage' element={<Footerpage />} />
            <Route exact path='/Contact' element={<Contact />} />           
          </Routes>
        </BrowserRouter>
      </cartContext.Provider>
    </div>
  );
}

export default App;
