import React, {Component} from "react";
import {DataContext} from '../data/contextproduct';
import { Link } from "react-router-dom";

export default class SideBar extends Component{
	constructor(props){
	    super(props);
	    this.state = {
	    }
	  }

  	static contextType = DataContext;

	render(){
		return(
			<aside id="sidebar" className="sidebar">
	          <ul className="sidebar-nav" id="sidebar-nav">
	            <li className="nav-item">
	            	<Link className="nav-link " to="/">
	                	<i className="bi bi-grid"></i>
	                	<span>Dashboard</span>
	              	</Link>
	            </li>
	            <li className="nav-item">
			        <Link className="nav-link collapsed" to="/vaccine-finder">
			        	<i className="bi bi-person"></i>
			        	<span>Vaccine Finder</span>
			        </Link>
			     </li>
	          </ul>
	        </aside>
		)
	}
}