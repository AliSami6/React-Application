import './App.css';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Facebook from './pages/Facebook';
import Fragment from "./pages/Fragment";
import Clipboard from "./pages/Clipboard";
import Base from "./pages/base";
import WelcomeAdmin from './pages/WelcomeAdmin';
import Style from "./pages/Style";

function App() {
  return (
    <>
      <Home />
      <About />
      <Contact />
      <Facebook />
      <Fragment />
      <Clipboard />
      <Base />
      <WelcomeAdmin />
      <Style />
    </>
  );
}

export default App;
