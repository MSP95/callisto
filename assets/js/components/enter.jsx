import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Nav, Button,  NavItem, NavbarBrand, Navbar, Collapse, NavbarToggler } from 'reactstrap';
import Description from './projectDescription';


class Enter extends React.Component {
constructor(props){
  super(props);
  props.dispatch({type: 'TOGGLE_NAV_TRUE'});
}
  render (){
    return(
    <div></div>
  );
}}


// onMouseEnter={()=>{if ( $( ".sidebar" ).hasClass( "active" )){$('.sidebar').toggleClass('active')}} }
export default connect((state)=>state)(Enter);
