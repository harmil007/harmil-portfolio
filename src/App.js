import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";
import Error from "./components/Error";
import HeaderComponent from "./components/HeaderComponent"
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<HeaderComponent />}>
          <Route path="/" element={<Nav />} />
          <Route index path="/" element={<Banner />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes> */}
      {/* <HeaderComponent /> */}
      <Nav />
      <Banner />
      <Services />
      <About />
    </BrowserRouter>
  );
}

export default App;
