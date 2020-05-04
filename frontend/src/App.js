import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Header from './components/Header';
import Home from './components/Home'
import CSVUpload from './components/CSVUpload'

import './components/style.css';

function App() {
 
  return (
    <div>
        <Header />
        <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        <Route path="/home">
          <Home />
        </Route>
        
        <Route path="/csvupload">
          <CSVUpload />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </div>
  );
}

export default App;
