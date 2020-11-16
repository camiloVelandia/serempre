import React from "react";
import GlobalFonts from '../assets/fonts/circular/fonts';
import GlobalSTyle from '../GlobalStyles'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

import {PriceContextProvider} from '../context/PriceContext';

const App = () => {
 

  return (
    <>

    <GlobalSTyle/>
    <GlobalFonts/>
    <PriceContextProvider >
    <Header/>
    <Main/>
    <Footer/>
    </PriceContextProvider>
    </>
  );
};

export default App;
