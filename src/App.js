
import './App.css';

import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        
        <Switch>
        <Route exact path="/"><News  pageSize={5} category='general' country='in'/></Route>
          
          <Route exact path="/business"><News key="business" pageSize={5} category='business' country='in'/></Route>
          <Route exact path="/entertainment"><News key="entertainment"pageSize={5} category='entertainment' country='in'/></Route>
          <Route exact path="/general"><News key="general" pageSize={5} category='general' country='in'/></Route>
          <Route exact path="/health"><News key="health" pageSize={5} category='health' country='in'/></Route>
          <Route exact path="/science"><News key="science" pageSize={5} category='science' country='in'/></Route>
          <Route exact path="/sports"><News  key=" sports" pageSize={5} category='sports' country='in'/></Route>
          <Route exact path="/technology"><News key="technology" pageSize={5} category='technology' country='in'/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}
