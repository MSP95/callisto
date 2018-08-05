import React from 'react';
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom';
import { Nav, Button,  NavItem, NavbarBrand, Navbar, Collapse, NavbarToggler } from 'reactstrap';
import Project from './project';



function Projects(props) {

  const ProjectThumb = (name, tech)=>{
    return(
      <div className="project-link"  >
        <div className="project-overlay text-white">
          <div className="overlay-title"> {name} </div>
          <Link className="know-more-btn" to={"/projects/"+ name}> Know More </Link>
          <div className="overlay-footer">
            <div className="">{tech}</div>
            <div className="border-top border-light pt-1">Technologies</div>
          </div>

        </div>
        <div className={"project "+ name}></div>

      </div>);
    }

    return (<div className="projects">
    {ProjectThumb("Spotify ++",  "Java JPA Spring REST API MySQL")}

    {ProjectThumb("Jobs Portal", "React.js Bootstrap Redux Elixir Phoenix PostgreSQL")}
    {ProjectThumb("StormTrader", "React.js Bootstrap Elixir Phoenix PostgreSQL")}
    {ProjectThumb("TaskTracker",  "React.js Bootstrap Elixir Phoenix PostgreSQL")}
    {ProjectThumb("MemoryGame",  "React.js Bootstrap Elixir Phoenix PostgreSQL")}
    {ProjectThumb("ConnectFourAI",  "Python")}
    {ProjectThumb("Oruta",  "Java Swing REST OAuth")}

  </div>

);
}


// onMouseEnter={()=>{if ( $( ".sidebar" ).hasClass( "active" )){$('.sidebar').toggleClass('active')}} }
export default connect((state)=>state)(Projects);
