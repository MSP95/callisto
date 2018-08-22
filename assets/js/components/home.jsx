import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from "react-transition-group";


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from "./nav";
import TextBlock from "./text_block";
import Projects from "./projects";
import About from "./about";
import Ham from "./hamburger";
import Project from "./project"
import Contact from "./contact"

export default function home_init(root, store){
  ReactDOM.render(<Provider store={store}><App state={store.getState()} /></Provider>, root);
}



class Routes extends React.Component{


  componentDidUpdate(prev){
    // if(prev.image.backgroundImage!= this.props.image.backgroundImage){
    //   this.props.dispatch({type:JOBS});
    // }
    // console.log(prev.image);
    // console.log(this.props.image);
    // var height = $(".dcontent-wradpper").height()+$(".navbar").height();
    // console.log(height);
    // $(".container").height(height);
  }
  // componenWillUpdate(){
  //   let imgUrl = this.props.image;
  //   twrapper = {
  //     backgroundImage: "url("+imgUrl+")"
  //   };
  // }

  render(){

    return(
      <Router>
        <div className="wrapper">
          <div className="twrapper">
            <div className="container">
              <NavBar/>
              <div className="content">
                <div className="content-wrapper ">
                  <Route
                    render={({ location }) => (

                      <TransitionGroup className="transition-group">
                        <CSSTransition key={location.key} classNames="fade" timeout={750}>
                          <div className="dcontent-wradpper ">
                            <Switch location={location}>

                              <Route exact path="/" render={()=><div className="Enter"></div>}/>
                              <Route exact path="/about" render={()=><About/>}/>
                              <Route path="/projects" exact render={()=><Projects/>}/>
                              <Route path="/skills" render={()=><div className="content-wradpper "><h1>Skills</h1><TextBlock/></div>}/>
                              <Route path="/contact" render={()=><Contact/>}/>
                              <Route path="/projects/:id" render={(match)=><Project name = {match.match.params.id}/>}/>
                              <Route render={() => <div>Not Found</div>} />
                            </Switch>
                          </div>
                        </CSSTransition>
                      </TransitionGroup>
                    )}/>
                  </div>
                </div>

                <Ham location = {location}/>
              </div>

            <ul className="bg-bubbles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div className="foobar"> Made by Manish Patil.</div>

          </div>

        </div>
      </Router>
    );
  }
}

let App = connect((state)=> state)(Routes);
