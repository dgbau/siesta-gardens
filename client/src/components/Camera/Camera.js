
import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';


class Camera extends Component {

  componentDidMount() {
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth/4, window.innerHeight/4 );

    var camLoc=this.props.location.carsLoc[this.props.camID];

    camera.position.x=camLoc.x;
    camera.position.y=10;
    camera.position.z=camLoc.y;

    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild( renderer.domElement );
    var heading=0;
    var camID=this.props.camID;
    var data=this.props;
    var sceney=this.props.scene;
    var animate = function () {
      requestAnimationFrame( animate );
      //console.log(camera.position);
      var camLoc=data.location.carsLoc[camID];
      camera.position.x=camLoc.x;
      camera.position.y=10;
      camera.position.z=camLoc.y;
      camera.lookAt(new THREE.Vector3(10,10,1));

      renderer.render( sceney, camera );
    };
    animate();
  }
render() {

  return (
    <div ref={ref => (this.mount = ref)} />
  )
}

}

/*
var heading=0;

var animate = function () {
  requestAnimationFrame( animate );
  //console.log(camera.position);
  if(camera.position.x<-100&&heading==0){
    heading=1;
  }
  if(camera.position.z<-100&&heading==1){
    heading=2;
  }
  if(camera.position.x>100&&heading==2){
    heading=3;
  }
  if(camera.position.z>100&&heading==3){
    heading=0;
  }


  switch(heading){
    case 0:
    camera.position.x-=0.2
    break;
    case 1:
    camera.position.z-=0.2
    break;
    case 2:
    camera.position.x+=0.2
    break;
    case 3:
    camera.position.z+=0.2
    break;
  }



  //camera.lookAt(new THREE.Vector3(80,80,1));
  camera.lookAt(new THREE.Vector3(10,10,1));
  //camera.rotation.z=-.5;
  //camera.rotation.x=1;
  renderer.render( scene, camera );
};
animate();
*/
export default Camera;
