import React from 'react'

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text: "i'm Harmil GOti. I complited my graduation in 2021.",
    line2: "My hobby is to design a website through the codding.",
  });
  const [state] = React.useState([
    { id: 1, title: 'Name:', text: 'Harmil Goti' },
    { id: 2, title: 'Email:', text: 'harmilgoti0@gmail.com' },
    { id: 3, title: 'Linkedin:', text: 'Harmil Goti' },
    { id: 4, title: 'Facebook:', text: 'Harmilgoti' },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text} {header.line2}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="about__row">
          <div className="col-6 left__col">
            <div className='banner__img'>
              <img src={require('../images/myphoto2.png')} alt='logo' className="img__2" />
            </div>
          </div>
          <div className="col-6 right__col">
            <div className="about__info">
              <h1>Hii There</h1>
              <div className="second__paragraph">It's Harmil hear. This is my second reactjs website and this is just a beginning of my IT career and i'm looking forward to it.</div>
              <div className="info__contacts">
                <div className="contact__row">
                  {state.map((info) => (
                    <div className="col-6 about__contact">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About