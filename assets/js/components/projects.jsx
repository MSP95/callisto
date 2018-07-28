import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Nav, Button,  NavItem, NavbarBrand, Navbar, Collapse, NavbarToggler } from 'reactstrap';


function Projects(props) {


  return (
    <div className="projects">
      <div className="project r1">
      </div>
      <div className="project r1">
      </div>
      <div className="project r1">
      </div>
      <div className="project r2">
      </div>
      <div className="project r2">
      </div>
      <div className="project r2">
      </div>
    </div>

  );
}


// onMouseEnter={()=>{if ( $( ".sidebar" ).hasClass( "active" )){$('.sidebar').toggleClass('active')}} }
export default connect((state)=>state)(Projects);
