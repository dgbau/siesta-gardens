import React, {Component, useState, useEffect} from "react";
import "./Dashboard.scss";
import ClientList from "../ClientList/ClientList";
import Map from "../Map/Map";
import Charts from "../Charts/Charts";
import Camera from "../Camera/Camera";
import DroneCamera from "../DroneCamera/DroneCamera";
import ReactDOM from "react-dom";
import * as THREE from "three";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

class Dashboard extends Component {

  componentDidMount() {

  }

render(){
  var scene = new THREE.Scene();
  scene.background = new THREE.Color('#87CEEB');

  this.sceney=scene;

  var loader = new THREE.TextureLoader();

  loader.load('./assets/metal.jpg',
  function ( texture ) {
    var roadMaterial=new THREE.MeshBasicMaterial({
      map: texture
    });
    var road1=new THREE.Mesh(new THREE.BoxGeometry(200,2,10),roadMaterial);
    road1.position.x=0;
    road1.position.y=5;
    road1.position.z=100;
    var road2=new THREE.Mesh(new THREE.BoxGeometry(10,2,200),roadMaterial);
    road2.position.x=-100;
    road2.position.y=5;
    road2.position.z=0;
    var road3=new THREE.Mesh(new THREE.BoxGeometry(200,2,10),roadMaterial);
    road3.position.x=0;
    road3.position.y=5;
    road3.position.z=-100;
    var road4=new THREE.Mesh(new THREE.BoxGeometry(10,2,200),roadMaterial);
    road4.position.x=100;
    road4.position.y=5;
    road4.position.z=0;

    scene.add(road1);
    scene.add(road2);
    scene.add(road3);
    scene.add(road4);

  },
  undefined,
  function ( err ) {
    console.error( 'An error happened.' );
  }
);


var loader = new THREE.TextureLoader();

loader.load('./assets/grass.jpg',
function ( texture ) {
  var groundMaterial=new THREE.MeshBasicMaterial({
    map: texture
  });
  var plane = new THREE.Mesh(new THREE.BoxGeometry(1000,1,1000),groundMaterial);
  scene.add(plane);



},
undefined,
function ( err ) {
  console.error( 'An error happened.' );
}
);






var loader = new THREE.TextureLoader();

loader.load('./assets/concrete.jpg',
function ( texture ) {
var fenceMaterial=new THREE.MeshBasicMaterial({
  map: texture,
  opacity: 1,
  transparent: true
});
var fence1=new THREE.Mesh(new THREE.BoxGeometry(100,10,2),fenceMaterial);
fence1.position.x=0;
fence1.position.y=5;
fence1.position.z=50;
var fence2=new THREE.Mesh(new THREE.BoxGeometry(2,10,100),fenceMaterial);
fence2.position.x=-50;
fence2.position.y=5;
fence2.position.z=0;
var fence3=new THREE.Mesh(new THREE.BoxGeometry(100,10,2),fenceMaterial);
fence3.position.x=0;
fence3.position.y=5;
fence3.position.z=-50;
var fence4=new THREE.Mesh(new THREE.BoxGeometry(2,10,100),fenceMaterial);
fence4.position.x=50;
fence4.position.y=5;
fence4.position.z=0;

scene.add(fence1);
scene.add(fence2);
scene.add(fence3);
scene.add(fence4);


},
undefined,
function ( err ) {
console.error( 'An error happened.' );
}
);

var data=this.props.data;


var trex;

var mtlLoader = new MTLLoader();
mtlLoader.load('./assets/trex.mtl', function(materials) {
materials.preload();
var objLoader = new OBJLoader();

objLoader.setMaterials(materials);
objLoader.load('./assets/trex.obj', function(object) {
  trex=object;
  object.scale.set(2,2,2);
  object.traverse( function ( child ) {
    if ( child instanceof THREE.Mesh )
        child.material.color.setHex(0xff0000);
    });
  object.position.x=10;
  object.position.y=20;
  object.position.z=10;
  scene.add(object);
}, undefined,function(err){
  console.log(err);
});
});

var cars=[];

//Car 1
var mtlLoader = new MTLLoader();
mtlLoader.load('./assets/trex.mtl', function(materials) {
materials.preload();
var objLoader = new OBJLoader();

objLoader.setMaterials(materials);
objLoader.load('./assets/vehicle.obj', function(object) {
  object.scale.set(5,5,5);
  cars.push(object);
  object.position.x=data.locationData.carsLoc[0].x;
  object.position.y=5;
  object.position.z=data.locationData.carsLoc[0].y;
  scene.add(object);
}, undefined,function(err){
  console.log(err);
});
});

//Car 2
var mtlLoader = new MTLLoader();
mtlLoader.load('./assets/trex.mtl', function(materials) {
materials.preload();
var objLoader = new OBJLoader();

objLoader.setMaterials(materials);
objLoader.load('./assets/vehicle.obj', function(object) {
  object.scale.set(5,5,5);
  cars.push(object);
  object.position.x=data.locationData.carsLoc[1].x;
  object.position.y=5;
  object.position.z=data.locationData.carsLoc[1].y;
  scene.add(object);
}, undefined,function(err){
  console.log(err);
});
});

//Car 3
var mtlLoader = new MTLLoader();
mtlLoader.load('./assets/trex.mtl', function(materials) {
materials.preload();
var objLoader = new OBJLoader();

objLoader.setMaterials(materials);
objLoader.load('./assets/vehicle.obj', function(object) {
  object.scale.set(5,5,5);
  cars.push(object);
  object.position.x=data.locationData.carsLoc[2].x;
  object.position.y=5;
  object.position.z=data.locationData.carsLoc[2].y;
  scene.add(object);
}, undefined,function(err){
  console.log(err);
});
});



var people=[];
var i=0;
//Person 1
var mtlLoader = new MTLLoader();
mtlLoader.load('./assets/trex.mtl', function(materials) {
materials.preload();
var objLoader = new OBJLoader();

objLoader.setMaterials(materials);
objLoader.load('./assets/person.obj', function(object) {
  object.scale.set(.1,.1,.1);
  people.push(object);
  object.position.x=data.locationData.peopleLoc[0].x;
  object.position.y=10;
  object.position.z=data.locationData.peopleLoc[0].y;
  scene.add(object);
}, undefined,function(err){
  console.log(err);
});
});

//Person 2
var mtlLoader = new MTLLoader();
mtlLoader.load('./assets/trex.mtl', function(materials) {
materials.preload();
var objLoader = new OBJLoader();

objLoader.setMaterials(materials);
objLoader.load('./assets/person.obj', function(object) {
  object.scale.set(.1,.1,.1);
  people.push(object);
  object.position.x=data.locationData.peopleLoc[1].x;
  object.position.y=10;
  object.position.z=data.locationData.peopleLoc[1].y;
  scene.add(object);
}, undefined,function(err){
  console.log(err);
});
});

//Person 3
var mtlLoader = new MTLLoader();
mtlLoader.load('./assets/trex.mtl', function(materials) {
materials.preload();
var objLoader = new OBJLoader();

objLoader.setMaterials(materials);
objLoader.load('./assets/person.obj', function(object) {
  object.scale.set(.1,.1,.1);
  people.push(object);
  object.position.x=data.locationData.peopleLoc[2].x;
  object.position.y=10;
  object.position.z=data.locationData.peopleLoc[2].y;
  scene.add(object);
}, undefined,function(err){
  console.log(err);
});
});

//Person 4
var mtlLoader = new MTLLoader();
mtlLoader.load('./assets/trex.mtl', function(materials) {
materials.preload();
var objLoader = new OBJLoader();

objLoader.setMaterials(materials);
objLoader.load('./assets/person.obj', function(object) {
  object.scale.set(.1,.1,.1);
  people.push(object);
  object.position.x=data.locationData.peopleLoc[3].x;
  object.position.y=10;
  object.position.z=data.locationData.peopleLoc[3].y;
  scene.add(object);
}, undefined,function(err){
  console.log(err);
});
});





  //Update Dinosaurs Location

  setTimeout(updateObjs,2000);

  function updateObjs(){

    setInterval(function(){
      //Dinosaur Movement
      trex.position.x=data.locationData.dinoLoc.x;
      trex.position.z=data.locationData.dinoLoc.y;
      trex.rotation.y=data.locationData.dinoLoc.heading;
      //Car Movement
      for(var i=0;i<data.locationData.carsLoc.length;i++){
        cars[i].position.x=data.locationData.carsLoc[i].x;
        cars[i].position.z=data.locationData.carsLoc[i].y;
        cars[i].rotation.y=data.locationData.carsLoc[i].heading*Math.PI/2-Math.PI/2;
      }
    },10);
  }

  return (
    <div className="container">
    <div className="row">
    <div className="col-6">
    <div className="widget">
    <Map data={this.props.data.locationData}></Map>
    </div>
    </div>
    <div className="col-3">
    <div className="widget">
    <Charts data={this.props.data}></Charts>
    </div>
    </div>
    <div className="col-3">
    <div className="widget">
    <ClientList data={this.props.data.clientData.clients}></ClientList>
    </div>
    </div>
    </div>

    <div className="row">
    <div className="col-4">
    <div className="widget">
    <Camera camID="0" scene={this.sceney} location={this.props.data.locationData}></Camera>
    </div>
    </div>
    <div className="col-4">
    <div className="widget">
    <Camera camID="1" scene={this.sceney} location={this.props.data.locationData}></Camera>
    </div>
    </div>
    <div className="col-4">
    <div className="widget">
    <Camera camID="2" scene={this.sceney} location={this.props.data.locationData}></Camera>
    </div>
    </div>
    </div>
    <div id="dronecamera">
      <DroneCamera camID="3" cam={this.props.data.camData} scene={this.sceney} location={this.props.data.locationData}></DroneCamera>
    </div>
    </div>
  );
}

}



export default Dashboard;
