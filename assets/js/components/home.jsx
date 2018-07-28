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


export default function home_init(root, store){
  ReactDOM.render(<Provider store={store}><App state={store.getState()} /></Provider>, root);
}

class Routes extends React.Component{
  render(){

    return(
      <Router>
        <div className="twrapper container">
        <NavBar/>
        <div className="content">
          <div className="content-wrapper ">
        <Route
      render={({ location }) => (

       <TransitionGroup className="transition-group">
        <CSSTransition key={location.key} classNames="fade" timeout={1000}>
        <div className="dcontent-wradpper ">
      <Switch location={location}>

        <Route exact path="/" render={()=><About/>}/>
        <Route path="/projects" render={()=><Projects/>}/>
        <Route path="/skills" render={()=><div className="content-wradpper "><h1>Skills</h1><TextBlock/></div>}/>
          <Route path="/contact" render={()=><div className="content-wradpper "><h1>Contact</h1><TextBlock/></div>}/>

      <Route render={() => <div>Not Found</div>} />
  </Switch>
</div>
    </CSSTransition>
    </TransitionGroup>
  )}/>
</div>
</div>

<div className="foobar"></div>
<Ham/>
</div>

    </Router>
    );
  }
}

let App = connect((state)=> state)(Routes);
