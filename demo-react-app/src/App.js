import './App.css';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Facebook from './pages/Facebook';
import Fragment from "./pages/Fragment";
import Clipboard from "./pages/Clipboard";
function App() {
  return (
   
      <>
        <Home />
        <About />
        <Contact />
        <Facebook />
        <Fragment />
        <Clipboard/>
      </>
   
  );
}

export default App;
