import React from 'react';
import './App.scss';

// Components
import { Component } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import MainNav from "./components/MainNav/MainNav";
import mockData from "./fakeData"


class App extends Component{
  componentDidMount(){
    setInterval(
      () =>
        fetch("http://127.0.0.1:5000/locs")
          .then((res) => res.json())
          .then((result) => {
            mockData.locationData.dinoLoc.x=result.dino[0];
            mockData.locationData.dinoLoc.y=result.dino[1];

            console.log(result.car[0]);
            mockData.locationData.carLoc.x=result.car[0];
            mockData.locationData.carLoc.y=result.car[1];


          }),
      1000
    );
    /*
    setInterval(function(){
      //Simulate Dinosaur Moving Around
      mockData.locationData.dinoLoc.heading+=.001*(2*Math.random()-1);
      console.log(mockData);
      if(distance(0,0,mockData.locationData.dinoLoc.x,mockData.locationData.dinoLoc.y)>40){
        mockData.locationData.dinoLoc.heading+=.001;
        if(distance(0,0,
          mockData.locationData.dinoLoc.x+.1*Math.sin(mockData.locationData.dinoLoc.heading,
            mockData.locationData.dinoLoc.y)+.1*Math.cos(mockData.locationData.dinoLoc.heading))
            <40){
          mockData.locationData.dinoLoc.x+=1*Math.sin(mockData.locationData.dinoLoc.heading);
          mockData.locationData.dinoLoc.y+=1*Math.cos(mockData.locationData.dinoLoc.heading);
        }
      }else{
        mockData.locationData.dinoLoc.x+=.1*Math.sin(mockData.locationData.dinoLoc.heading);
        mockData.locationData.dinoLoc.y+=.1*Math.cos(mockData.locationData.dinoLoc.heading);
      }

      //Simulate Cars Moving around
      for(var i=0;i<mockData.locationData.carLoc.length;i++){
        if(mockData.locationData.carLoc[i].x<-100&&mockData.locationData.carLoc[i].heading==0){
          mockData.locationData.carLoc[i].heading=1;
        }
        if(mockData.locationData.carLoc[i].y<-100&&mockData.locationData.carLoc[i].heading==1){
          mockData.locationData.carLoc[i].heading=2;
        }
        if(mockData.locationData.carLoc[i].x>100&&mockData.locationData.carLoc[i].heading==2){
          mockData.locationData.carLoc[i].heading=3;
        }
        if(mockData.locationData.carLoc[i].y>100&&mockData.locationData.carLoc[i].heading==3){
          mockData.locationData.carLoc[i].heading=0;
        }


        switch(mockData.locationData.carLoc[i].heading){
          case 0:
          mockData.locationData.carLoc[i].x-=0.1;
          break;
          case 1:
          mockData.locationData.carLoc[i].y-=0.1;
          break;
          case 2:
          mockData.locationData.carLoc[i].x+=0.1;
          break;
          case 3:
          mockData.locationData.carLoc[i].y+=0.1;
          break;
        }
      }

    },10);
    */
    function distance( x1, y1, x2, y2 ) {

      var 	xs = x2 - x1,
      ys = y2 - y1;

      xs *= xs;
      ys *= ys;

      return Math.sqrt( xs + ys );
    }
  }


  render(){
    this.state=mockData;
    return (
      <div className="container-fluid">
      <MainNav></MainNav>
      <Dashboard data={this.state}></Dashboard>
      </div>
    );
  }
}



export default App;
