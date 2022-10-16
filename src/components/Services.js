import React from 'react'
import { FaGithub } from "react-icons/fa";

const Services = () => {
  const [header] = React.useState({
    heading:"SERVICES",
    mainheading:"My Services",
    text:"My main services are to create a beautiful and responcive website",
    heading1:"Web Development",
    text21:"I have a knowledge of html, css, bootstrap, c language, c++",
    text22:"and javascript and the knowledge of reactjs."
  });
  return (
    <div className="services" id='service'>
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h4 className="heading">{header.heading}</h4>
            <h1 className="mainHeader">{header.mainheading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>
          <div className="serviceRow">
            <div className='col1'>
              <FaGithub className="github_icon" />
            </div>
            <div className="col2">
              <div className="services__box">
                <h1>{header.heading1}</h1>
                <p>{header.text21} {header.text22}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services