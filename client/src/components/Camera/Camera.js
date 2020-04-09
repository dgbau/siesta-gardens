/*
import React from "react";
import "./Camera.scss";
import * as THREE from "three";

function Camera(props) {
  setTimeout(setup,1000);
  return (
    <div id={"camera"+props.camID}>

        <h3>Camera {props.camID}</h3>

    </div>
  );


  var cube;
  var scene;
  var camera;

  var renderer;

  var geometry;
  var material;

  function setup(){
    cube = new THREE.Mesh( geometry, material );
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth/1, window.innerHeight /1);
    document.body.appendChild( renderer.domElement );

    geometry = new THREE.BoxGeometry();
    material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

    scene.add( cube );

    camera.position.z = 5;
    animate();
  }



  function animate() {
  	requestAnimationFrame( animate );
  	renderer.render( scene, camera );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  }
}


*/
import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
class Camera extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth/4, window.innerHeight/4 );
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();
  }
  render() {
    return (
      <div ref={ref => (this.mount = ref)} />
    )
  }
}


export default Camera;
