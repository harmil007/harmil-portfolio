import React, { useState } from 'react';


export const Nav = () => {

  const [open, setOpen] = useState(false)

  const openMenu = () => {
    setOpen(!open)
  }

  return (
    <nav className = "navbar" >
      <div className="container" >
        <div className="navbar__container" >
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <img src={require('../images/mylogo.png')} height="50" alt='logo' />
            </div>
          </ul>
          <ul className={ open ? "active" : "navbar__right"}>
            <li><a href='#home'>Home</a></li>
            <li><a href='#service'>Services</a></li>
            <li><a href="#about">About</a></li>
          </ul>

        </div>
      </div>
      <div className="menuToggle" onClick={openMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}

export default Nav