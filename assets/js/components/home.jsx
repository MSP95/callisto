import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';



import {BrowserRouter as Router, Route} from 'react-router-dom';

import NavBar from "./nav";
import TextBlock from "./text_block";



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
        <Route path="/about" render={()=><div className="content-wrapper "><h1>Hello world</h1><TextBlock/></div>}/>
        <Route path="/projects" render={()=><div className="content-wrapper "><h1>Projects</h1><TextBlock/></div>}/>
        <Route path="/skills" render={()=><div className="content-wrapper "><h1>Skills</h1><TextBlock/></div>}/>
        <Route path="/contact" render={()=><div className="content-wrapper "><h1>Contact</h1><TextBlock/></div>}/>
      </div>
    </div>
      </Router>
    );
  }
}

let App = connect((state)=> state)(Routes);
