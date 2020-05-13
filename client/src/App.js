import React from 'react';
import './App.scss';

// Components
import { Component } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import MainNav from "./components/MainNav/MainNav";
import mockData from "./fakeData"


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: null
    };
  }

  componentDidMount(){
    setInterval(
      () =>
        fetch("http://127.0.0.1:5000/park-state")
          .then((res) => res.json())
          .then((result) => {
            this.setState({
              isLoaded: true,
              data: result,
            });


          }),
      1000
    );
    function distance( x1, y1, x2, y2 ) {

      var 	xs = x2 - x1,
      ys = y2 - y1;

      xs *= xs;
      ys *= ys;

      return Math.sqrt( xs + ys );
    }
  }


  render(){
    return (
      this.state.data ?
      <div className="container-fluid">
      <MainNav></MainNav>
      <Dashboard data={this.state.data}></Dashboard>
      </div> : <div>Loading...</div>
    );
  }
}



export default App;
