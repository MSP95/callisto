import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Nav, Button,  NavItem, NavbarBrand, Navbar, Collapse, NavbarToggler } from 'reactstrap';


function About(props) {


  return (
    <div className="about">

      <div className="dp-wrapper">
        <div className="dp-border"/>
        <div className="dp" />
      </div>
      <div className="Name">
        <h1>Manish Patil</h1>
      </div>

    </div>
  );
}


// onMouseEnter={()=>{if ( $( ".sidebar" ).hasClass( "active" )){$('.sidebar').toggleClass('active')}} }
export default connect((state)=>state)(About);
