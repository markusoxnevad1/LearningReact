import React from 'react';
import '../App.scss';
import Drawing from '../drawing.png'

const Contact = () => {
    return (
      <>
          <h1 className="h1">Contact Me</h1>
          <div className="d-flex">
            <img src={Drawing} alt="React Logo" className='p-2'/>
            <div className='p-2'>
              <h4>Who am I?</h4>
              <p>Greetings! 
                <br />
                My name is Markus. I'm from Stavanger, Norway. I work as an consultant with background as an fullstack developer from the energy and automation industry. 
                I've mainly worked with building management systems (BMS), monitoring energydata. But also gained experience within .NET, C#, JS and other relevant frameworks/programming languages.
                Before this I studied 3 years of economics and 2 years of information science in Bergen.
                <br />
                <br />
                I like to spend my sparetime with friends, making good food and drinking wine. But I also do other activities such as gaming, golf, football, hunting... you name it. 
                I also really like watching movies, especially thrillers, but mostly anything, whether its one of Hitchcock's classics or something more modern, as long as its worth watching.
              </p>
              <h4>Contact information</h4>
              Email: markus.oxnevad@gmail.com <br />
              Phone:  +47 45 45 45 45<br />
              Github: <a href="https://github.com/markusoxnevad1">markusoxnevad1</a>
            </div>
          </div>
      </>
    )
  };
  
export default Contact;