
import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

var camera;
var renderer;
var sceney;

class Camera extends Component {

  componentDidMount() {
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 50000 );
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth/2.5, window.innerHeight/2.5 );

    window.addEventListener( 'resize', onWindowResize, false );
    function onWindowResize(){
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth/2.5, window.innerHeight/2.5 );
    }
    var camLoc=this.props.location.carLoc;

    camera.position.x=camLoc.x;
    camera.position.y=10;
    camera.position.z=camLoc.y;

    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild( renderer.domElement );
    var heading=0;
    var camID=this.props.camID;
    var data=this.props;
    sceney=this.props.scene;
    this.animate();
  }

  animate = () => {
    requestAnimationFrame( this.animate );
    //console.log(camera.position);
    var data=this.props;
    var camLoc=data.location.carLoc;
    camera.position.x=camLoc.x-3000;
    camera.position.y=17;
    camera.position.z=camLoc.y-3000;
    camera.lookAt(new THREE.Vector3(data.location.dinoLoc.x-3000,10,data.location.dinoLoc.y-3000));

    console.log("HERE");
    console.log(data)
    renderer.render( sceney, camera );
  }

  render() {
    return (
      <div ref={ref => (this.mount = ref)} />
    );
  }

}


export default Camera;
