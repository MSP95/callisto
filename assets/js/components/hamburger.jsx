import React from 'react';
import { connect } from 'react-redux'
import { NavLink , withRouter} from 'react-router-dom';
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
      // console.log("hi");
    }
  }
  // console.log(props);
  return (<div>{props.location.pathname!=="/"?<div className="mobile-ham">
      <div id="nav-icon4" onClick={hamburger} >

        <span></span>
        <span></span>
        <span></span>


      </div></div>:<div></div>}</div>
    );
  }


  // onMouseEnter={()=>{if ( $( ".sidebar" ).hasClass( "active" )){$('.sidebar').toggleClass('active')}} }
  export default withRouter(connect((state)=>state)(Ham));
