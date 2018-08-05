import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Nav, Button,  NavItem, NavbarBrand, Navbar, Collapse, NavbarToggler } from 'reactstrap';
import Description from './projectDescription';
import { FaLongArrowAltLeft } from 'react-icons/fa';


class Project extends React.Component {

  render (){
    const intro = () => {

      switch (this.props.name) {
        case "Spotify ++":
          return <div>
            <p><b>Technologies Used:</b> Java JPA Spring REST API MySQL</p>

          <p><b>Github Link:</b>&nbsp;<a className="text-white" href="https://github.com/husky95msp/cs5200_summer2018_the_wolves">github.com/husky95msp/</a> </p>
          </div>;
        case "Jobs Portal":
          return<div>
            <p><b>Technologies Used:</b>&nbsp; React.js Bootstrap Redux Elixir Phoenix PostgreSQL</p>
              <p><b>Live Link:</b>&nbsp;<a className="text-white" href="http://jobs.manishpatil.net">jobs.manishpatil.net</a> </p>

          <p><b>Github Link:</b>&nbsp;<a className="text-white" href="https://github.com/MSP95/jobPortal">github.com/MSP95/jobPortal</a> </p>
          </div>;

        case "StormTrader":
          return <div>
            <p><b>Technologies Used:</b>&nbsp; React.js Bootstrap Elixir Phoenix PostgreSQL</p>
              <p><b>Live Link:</b>&nbsp;<a className="text-white" href="http://stormtrader.manishpatil.net">jobs.manishpatil.net</a> </p>

          <p><b>Github Link:</b>&nbsp;<a className="text-white" href="https://github.com/MSP95/stormtrader">github.com/MSP95/stormtrader</a> </p>
          </div>

        case "TaskTracker":
          return <div>
            <p><b>Technologies Used:</b>&nbsp; React.js Bootstrap Elixir Phoenix PostgreSQL</p>
              <p><b>Live Link:</b>&nbsp;<a className="text-white" href="http://tasks.manishpatil.net">tasks.manishpatil.net</a> </p>

          <p><b>Github Link:</b>&nbsp;<a className="text-white" href="https://github.com/MSP95/tasktracker3">github.com/MSP95/tasktracker3</a> </p>
          </div>

        case "MemoryGame":
          return <div>
            <p><b>Technologies Used:</b>&nbsp; React.js Bootstrap Elixir Phoenix PostgreSQL</p>
              <p><b>Live Link:</b>&nbsp;<a className="text-white" href="http://memory.manishpatil.net">tasks.manishpatil.net</a> </p>

          <p><b>Github Link:</b>&nbsp;<a className="text-white" href="https://github.com/MSP95/memory">github.com/MSP95/memory</a> </p>
          </div>

        case "ConnectFourAI":
          return <div>
            <p><b>Technologies Used:</b>&nbsp; Python, Adversarial search Techniques</p>


          <p><b>Github Link:</b>&nbsp;<a className="text-white" href="https://github.com/MSP95/Connect4-AI">github.com/MSP95/Connect4-AI</a> </p>
          </div>

        case "Oruta":
          return <div>
            <p><b>Technologies Used:</b>&nbsp;Java Swing REST OAuth</p>


          <p><b>Github Link:</b>&nbsp;<a className="text-white" href="https://github.com/MSP95/Project-Oruta">github.com/MSP95/Project-Oruta</a> </p>
          </div>
      }
    }
    return(
    <div className="p-wrap">
      <div className="p-back"><Link className="text-white" to="/projects"><FaLongArrowAltLeft/></Link></div>
      <div className="p-info">
      <div className="p-title"><h1>{this.props.name}</h1> {intro()}</div>

      <div className="p-poster">
            <div className="jobss"/>
        </div>
        </div>
    <div className="p-body">
      <Description name={this.props.name}/>
      </div>


  </div>
  );
}}


// onMouseEnter={()=>{if ( $( ".sidebar" ).hasClass( "active" )){$('.sidebar').toggleClass('active')}} }
export default connect((state)=>state)(Project);
