import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Nav, Button,  NavItem, NavbarBrand, Navbar, Collapse, Fade, NavbarToggler } from 'reactstrap';
import { withRouter } from 'react-router-dom'

function NavBar(props) {
  if(props.navBar.collapse){

  }
  let hamburger = ()=>{
    if($('.mobile-navbar').css('display') === 'none')
    {
      console.log("ok");
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

        <div className="mobile-navbar navbar-toggler p-0 pb-1">
          <div className={"mobile-title nav-link "+(!props.navBar.collapse? "":"")}>
            {props.location.pathname}



            <div className="connector-wrapper-exception">
              <div className="connector-exception connector-active-exception"/>
            </div>

          </div>

        </div>
        <Fade className="navbar-collapse" in={props.navBar.collapse}  >

            <Nav className="">

              <NavItem>


                <NavLink to="/" exact activeClassName="nav-btn-active" className="nav-link" onClick={hamburger}>
                  <div className="material-icons md-48">About</div>
                </NavLink>
                <div className="connector-wrapper">
                  <div className={"connector"+(props.location.pathname === "/"? " connector-active" : "")}></div>
                </div>
              </NavItem>
              <NavItem>
                <NavLink to="/projects" exact activeClassName="nav-btn-active" className="nav-link" onClick={hamburger}><div className="material-icons md-48">Projects</div></NavLink>
                <div className="connector-wrapper">
                  <div className={"connector"+(props.location.pathname === "/projects"? " connector-active" : "")}></div>
                </div>
              </NavItem>
              <NavItem>

                <NavLink to="/skills" exact activeClassName="nav-btn-active" className="nav-link" onClick={hamburger}><div className="material-icons md-48">Skills</div></NavLink>
                <div className="connector-wrapper">
                  <div className={"connector"+(props.location.pathname === "/skills"? " connector-active" : "")}></div>
                </div>
              </NavItem>
              <NavItem>

                <NavLink to="/contact" exact activeClassName="nav-btn-active" className="nav-link" onClick={hamburger}><div className="material-icons md-48">Contact</div></NavLink>
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
// <div className="collapses p-0">
