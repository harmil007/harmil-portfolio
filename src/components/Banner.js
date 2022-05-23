import React,{useState} from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaPlay
} from "react-icons/fa"

const Banner = () => {
  const [state,setState] = useState({
    title : 'I am Harmil GOti',
    text : "I'm Harmil, i just started my career as a professional web developer in this field",
  })
  console.log(setState,"Set")
  return (
    <header className="header">
      <div className="container">
        <div className='banner__row row'>
          <div className="col-6 left__col">
            <div className="hrader__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li className="fb">
                    <a href="https://www.facebook.com/" target={"_blank"}>
                    <FaFacebookF />
                    </a>
                  </li>
                  <li className="twee">
                    <a href="https://twitter.com/home" target={"_blank"}>
                    <FaTwitter  />
                    </a>
                  </li>
                  <li className="insta">
                    <a href="https://www.instagram.com/" target={"_blank"}>
                    <FaInstagram  />
                    </a>
                  </li>
                  <li className="pin">
                    <a href="">
                    <FaPinterest  />
                    </a>
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <div className="btn-portfolio">
                    <a className="btn btn-outline">My Portfolio</a>
                  </div>
                  <div>
                    <a className="btn btn-smart"><FaPlay className="play" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 right__col">
            <div className='banner__img1'>
              <img src={require('../images/myphoto.png')} alt='logo' />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Banner