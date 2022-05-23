import React from 'react'
// import { HiMenu } from "react-icons/hi";

export const Nav = () => {

  let menuToggle = document.querySelector('.menuToggle');
  let navbar__right = document.querySelector('.navbar__right');

//   menuToggle.onclick = function(){
//     navbar__right.classList.toggle('active');
// }
  return (
    <nav className="navbar">
      <div class="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <img src={require('../images/mylogo.png')} height="50" alt='logo' />
            </div>
          </ul>
          {/* {state ? ( */}
            <ul className="navbar__right">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          {/* ) : ("")} */}

        </div>
      </div>
      <div className="menuToggle">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}

export default Nav