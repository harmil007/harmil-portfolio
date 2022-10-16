import React from 'react';
import Nav from './Nav'
import { Outlet } from 'react-router-dom';


export const HeaderComponent = () => {

  // let menuToggle = document.querySelector('.menuToggle');
  // let navbar__right = document.querySelector('.navbar__right');

//   menuToggle.onclick = function(){
//     navbar__right.classList.toggle('active');
// }
  return (
    <>
      <Nav />
      <Outlet/>
    </>
  )
}

export default HeaderComponent;