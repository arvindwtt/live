import React, {Component} from "react";
import AppRouter from "./components/appRouter";
import {DataProvider} from './data/contextproduct';

export default class App extends Component{
  render(){
    return (
      <DataProvider>
        <AppRouter />
      </DataProvider>  
    );
  }  
}
