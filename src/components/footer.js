import React, {Component, Fragment} from "react";
import {DataContext} from '../data/contextproduct';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class Footer extends Component{
  constructor(props){
      super(props);
      this.state = {
      }
    }

    static contextType = DataContext;

  render(){
    return(
        <Fragment>
          <footer id="footer" className="footer">
            <div className="copyright">
              &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </footer>
          <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </Fragment>
    )
  }
}