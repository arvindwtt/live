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
		const {Year, Month, Day, Hour, Min, Sec, AMPM, RealTimeWeather} = this.context;
		return(
			<header id="header" className="header fixed-top d-flex align-items-center">
	          <div className="d-flex align-items-center justify-content-between">
	            <a href="" className="logo d-flex align-items-center">
	              <span className="d-none d-lg-block">Live Status</span>
	            </a>
	          </div>
	          <nav className="header-nav ms-auto">
	          	<ul className="d-flex align-items-center">
	          		<li className="nav-item dropdown pe-3">
		          		{	RealTimeWeather ?
		          			(<>
		          				<a className="nav-link nav-profile d-flex align-items-center pe-0">
					            	<img src={ RealTimeWeather.current.condition.icon } alt="Profile" className="rounded-circle" />
					            	<span className="">{ RealTimeWeather.location.name } / Temp { RealTimeWeather.current.temp_c } c</span>
					          	</a>
		          			</>)
		          			:
		          			(<>Please Allow Your Location</>)
		          		}
			        </li>
	          	</ul>
	          </nav>
	        </header>
		)
	}
}