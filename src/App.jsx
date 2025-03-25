import React from "react";
import{BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Section1 from "./Pages/Home/Section1";
import Section2 from "./Pages/Home/Section2";
import Section3 from "./Pages/Home/Section3";
import Section4 from "./Pages/Home/Section4";
import Section5 from "./Pages/Home/Section5";
import Section6 from "./Pages/Home/Section6";
import Section7 from "./Pages/Home/Section7";
// import Header from "../src/Components/Layouts/Header"
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Header></Header> */}
        < Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<Section2/>} />
        <Route path="/menu" element={<Section3/>} />
        <Route path="/shop" element={<Section4/>} />
        <Route path="/blog" element={<Section5/>} />
        <Route path="/contact" element={<Section6/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
