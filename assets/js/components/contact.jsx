import React from 'react';
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom';
import {Form, FormGroup ,Col, Label, Input, Nav, Button,  NavItem, NavbarBrand, Navbar, Collapse, NavbarToggler } from 'reactstrap';
import Project from './project';



function Contact(props) {
  let submit=(data)=>{
    data.preventDefault();
    console.log(data);
  }

  return (<div className="contacts">
  <h2>
    Please contact me at <a className="text-white" href="mailto:patilmanish1910@gmail.com">patilmanish1910@gmail.com</a> <br></br>
  or reach me on:
</h2>

  <div><h1>
    <a className="text-white" href="https://github.com/MSP95"><i className="fab fa-github mediaFa"></i></a>&nbsp;
      <a className="text-white" href="https://www.facebook.com/manishpatil1910"><i className="fab fa-facebook-square mediaFa"></i></a>&nbsp;
        <a className="text-white" href="https://www.linkedin.com/in/p-manish/"><i className="fab fa-linkedin mediaFa"></i></a>&nbsp;
          <a className="text-white" href="https://twitter.com/patilmanish1910"><i className="fab fa-twitter mediaFa"></i></a>&nbsp;

     </h1></div>

</div>

);
}

//
// <Form className="contact-form">
//   <FormGroup>
//
//
//     <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
//
//   </FormGroup>
//   <FormGroup >
//
//
//     <Input type="text" name="name" id="name" placeholder="Your Name" />
//
//   </FormGroup>
//   <FormGroup>
//
//     <Input type="textarea" name="text" id="exampleText" placeholder="Message"/>
//
//   </FormGroup>
//    <button className="submit-btn" onClick={submit}>Send</button>
// </Form>

export default connect((state)=>state)(Contact);
