import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Nav, Button,  NavItem, NavbarBrand, Navbar, Collapse, NavbarToggler } from 'reactstrap';

function About(props) {


  return (

    <div className="about">
      <div className="dp-name">

        <div className="name">
          MANISH PATIL
          <div className="sub">
            <i className="fas fa-code"></i> Web Developer <br></br>
            <i className="fas fa-map-marker-alt"></i> Boston, MA.<br></br>
            <p>
              <a className="text-white" href="https://github.com/MSP95"><i className="fab fa-github mediaFa"></i></a>&nbsp;
                <a className="text-white" href="https://www.facebook.com/manishpatil1910"><i className="fab fa-facebook-square mediaFa"></i></a>&nbsp;
                  <a className="text-white" href="https://www.linkedin.com/in/p-manish/"><i className="fab fa-linkedin mediaFa"></i></a>&nbsp;
                    <a className="text-white" href="https://twitter.com/patilmanish1910"><i className="fab fa-twitter mediaFa"></i></a>&nbsp;

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
