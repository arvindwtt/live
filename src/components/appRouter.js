import React, {Component} from "react";
import {DataContext} from '../data/contextproduct';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./header";
import BreadCrumbs from "./breadcrumbs";
import SideBar from "./sidebar";
import Footer from "./footer";

import Index from "../pages/index";
import VaccineFinder from "../pages/vaccinefinder";

export default class AppRouter extends Component{
	constructor(props){
	    super(props);
	    this.state = {
	    }
	  }

  	static contextType = DataContext;

	render(){
		return(
			<Router>
				<Header />
        		<SideBar />
        		<main id="main" className="main">
        			<BreadCrumbs />
					<Switch>
			          	<Route path="/" exact component={Index} />
			          	<Route path="/vaccine-finder" component={VaccineFinder} />
			        </Switch>
			    </main>
		        <Footer />
	        </Router>
		)
	}
}