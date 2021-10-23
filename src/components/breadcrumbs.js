import React, {Component} from "react";
import {DataContext} from '../data/contextproduct';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class BreadCrumbs extends Component{
  constructor(props){
      super(props);
      this.state = {
      }
    }

    static contextType = DataContext;

  render(){
    return(
      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>
    )
  }
}