import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Nav, Button,  NavItem, NavbarBrand, Navbar, Collapse, NavbarToggler } from 'reactstrap';


function Ham(props) {
  let hamburger = ()=>{
    if($('.mobile-navbar').css('display') === 'none')
    {

      //do something
    }
    else
    {
      //something else

      $('#nav-icon4').toggleClass('open');
      props.dispatch({type: 'TOGGLE_NAV'})
    }
  }

  return (
    <div className="mobile-ham">
      <div id="nav-icon2" onClick={hamburger} >

        <span></span>
        <span></span>
        <span></span>


      </div></div>
    );
  }


  // onMouseEnter={()=>{if ( $( ".sidebar" ).hasClass( "active" )){$('.sidebar').toggleClass('active')}} }
  export default connect((state)=>state)(Ham);
