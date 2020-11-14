import React from "react";
import GlobalFonts from '../assets/fonts/circular/fonts';
import GlobalSTyle from '../GlobalStyles'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
const App = () => {
  return (
    <>
    <GlobalSTyle/>
    <GlobalFonts/>
    <Header/>
    <Main/>
    <Footer/>
    </>
  );
};

export default App;
