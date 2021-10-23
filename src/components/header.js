import React, {Component} from "react";
import {DataContext} from '../data/contextproduct';

export default class Header extends Component{
	constructor(props){
	    super(props);
	    this.state = {
	    }
	  }

  	static contextType = DataContext;

	render(){
		return(
			<header id="header" className="header fixed-top d-flex align-items-center">
	          <div className="d-flex align-items-center justify-content-between">
	            <a href="" className="logo d-flex align-items-center">
	              <span className="d-none d-lg-block">Live Status</span>
	            </a>
	          </div>
	        </header>
		)
	}
}