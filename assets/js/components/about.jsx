import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Nav, Button,  NavItem, NavbarBrand, Navbar, Collapse, NavbarToggler } from 'reactstrap';
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin, FaGooglePlusG, FaMapMarkerAlt, FaCode} from 'react-icons/fa';

function About(props) {


  return (
    <div className="about">

      <div className="dp-name">

        <div className="name">
          MANISH PATIL
          <div className="sub">
            <FaCode/> Web Developer <br></br>
            <FaMapMarkerAlt/> Boston, MA.<br></br>
              <p>
                <a className="text-white" href="https://github.com/MSP95"><FaGithub className="mediaFa"/></a>&nbsp;
                  <a className="text-white" href="https://www.facebook.com/manishpatil1910"><FaFacebook className="mediaFa"/></a>&nbsp;
                    <a className="text-white" href="https://www.linkedin.com/in/p-manish/"><FaLinkedin className="mediaFa"/></a>&nbsp;
                      <a className="text-white" href="https://twitter.com/patilmanish1910"><FaTwitter className="mediaFa"/></a>&nbsp;

                 </p>
          </div>
        </div>
        <div className="dp-wrapper">
          <div className="dp-border"/>
          <div className="dp" />
        </div>
      </div>
      <div className="about-content">
        <h1>About Me</h1>
        <span className="Hi">Hi, </span>
          I am a Master's student at Northeastern University with a major in Computer Science. I enjoy experimenting and giving life to my ideas by programming. I am also crazy about designing and developing rich web applications
          leveraging a wide range of modern web technologies. My goal is to provide a
          smooth and effortless experience to users.
          <hr/>
          <h1> Hobbies</h1>
          <p>Besides coding, I love swimming, listening to all kinds of music, reading and playing videogames.</p>
        </div>
      </div>
    );
  }


  // onMouseEnter={()=>{if ( $( ".sidebar" ).hasClass( "active" )){$('.sidebar').toggleClass('active')}} }
  export default connect((state)=>state)(About);
