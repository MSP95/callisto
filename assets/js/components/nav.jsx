import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Nav, Button,  NavItem, NavbarBrand, Navbar, Collapse, Fade, NavbarToggler } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
function NavBar(props) {
  // console.log(props);

  let navlink = classNames({
    'nav-link':props.location.pathname!=="/",
    'land':props.location.pathname==="/",
    // 'nav-btn-active':props.location.pathname==="/",
  })
  let coll = classNames({
    "navbar-collapse":true,
    'coll':props.location.pathname==="/",
    // 'land':props.location.pathname==="/",
    // 'nav-btn-active':props.location.pathname==="/",
  })
  if(props.navBar.collapse){

  }
  let hamburger1=()=>{
    if (!props.navBar.collapse){
      // $('#nav-icon4').toggleClass('open');
      props.dispatch({type: 'TOGGLE_NAV'})

    }

  }
  let hamburger = ()=>{
    if($('.mobile-navbar').css('display') === 'none')
    {


      // console.log("ok");
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
    <div className="">
      <Navbar color="light" className=" p-0" light expand="md">


        <Fade className={coll} in={props.navBar.collapse}  >

          <Nav className="">
            <NavItem>
              <NavLink to="/" exact activeClassName="nav-btn-active" className={navlink} onClick={hamburger1}>
                <div className="material-icons md-48" >Home</div>
              </NavLink>
            </NavItem>

            <NavItem>


              <NavLink to="/about" exact activeClassName="nav-btn-active" className={navlink} onClick={hamburger}>
                <div className="material-icons md-48" >About</div>
              </NavLink>
              <div className="connector-wrapper">
                <div className={"connector"+(props.location.pathname === "/about"? " connector-active" : "")}></div>
              </div>
            </NavItem>
            <NavItem>
              <NavLink to="/projects" exact activeClassName="nav-btn-active" className={navlink} onClick={hamburger}><div className="material-icons md-48">Projects</div></NavLink>
              <div className="connector-wrapper">
                <div className={"connector"+(props.location.pathname === "/projects"? " connector-active" : "")}></div>
              </div>
            </NavItem>

            <NavItem>

              <NavLink to="/contact" exact activeClassName="nav-btn-active" className={navlink} onClick={hamburger}><div className="material-icons md-48">Contact</div></NavLink>
              <div className="connector-wrapper">
                <div className={"connector"+(props.location.pathname === "/contact"? " connector-active" : "")}></div>
              </div>
            </NavItem>
          </Nav>

        </Fade>
      </Navbar>

    </div>
  );
}


// onMouseEnter={()=>{if ( $( ".sidebar" ).hasClass( "active" )){$('.sidebar').toggleClass('active')}} }
export default withRouter(connect((state)=>state)(NavBar));
// <NavItem>
//
//   <NavLink to="/skills" exact activeClassName="nav-btn-active" className="nav-link" onClick={hamburger}><div className="material-icons md-48">Skills</div></NavLink>
//   <div className="connector-wrapper">
//     <div className={"connector"+(props.location.pathname === "/skills"? " connector-active" : "")}></div>
//   </div>
// </NavItem>
