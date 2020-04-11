
import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';


class Camera extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color('#87CEEB');
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth/4, window.innerHeight/4 );
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild( renderer.domElement );


    const loader = new THREE.TextureLoader();



    var cube = new THREE.Mesh(new THREE.BoxGeometry( 10, 20, 10 ),new THREE.MeshBasicMaterial( { color: 0xa83832 } ));
    var plane = new THREE.Mesh(new THREE.BoxGeometry( 1000,1,1000),new THREE.MeshBasicMaterial( { color: 0x00ff00 } ));
    var road1=new THREE.Mesh(new THREE.BoxGeometry(200,2,10),new THREE.MeshBasicMaterial( { color: 0x363636 } ));
    road1.position.x=0;
    road1.position.y=5;
    road1.position.z=100;
    var road2=new THREE.Mesh(new THREE.BoxGeometry(10,2,200),new THREE.MeshBasicMaterial( { color: 0x363636 } ));
    road2.position.x=-100;
    road2.position.y=5;
    road2.position.z=0;

    var road3=new THREE.Mesh(new THREE.BoxGeometry(200,2,10),new THREE.MeshBasicMaterial( { color: 0x363636 } ));
    road3.position.x=0;
    road3.position.y=5;
    road3.position.z=-100;
    var road4=new THREE.Mesh(new THREE.BoxGeometry(10,2,200),new THREE.MeshBasicMaterial( { color: 0x363636 } ));
    road4.position.x=100;
    road4.position.y=5;
    road4.position.z=0;


    scene.add(plane);
    scene.add(road1);
    scene.add(road2);
    scene.add(road3);
    scene.add(road4);
    scene.add(cube);

    camera.position.x=100;
    camera.position.y=10;
    camera.position.z=100;


    //camera.rotation.x=1.3;

    var heading=0;

    var animate = function () {
      requestAnimationFrame( animate );
      // console.log(camera.position);
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
      camera.lookAt(new THREE.Vector3(cube.position.x,cube.position.y,1));
      //camera.rotation.z=-.5;
      //camera.rotation.x=1;
      renderer.render( scene, camera );
    };
    animate();

/*
    // load a resource
    loader.load(
      // resource URL
      './assets/trex.obj',
      // called when resource is loaded
      function ( object ) {

        scene.add( object );
        camera.lookAt(object);

      },
      // called when loading is in progresses
      function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

      },
      // called when loading has errors
      function ( error ) {

        console.error(error);

      }
    );
*/


  }
  render() {
    return (
      <div ref={ref => (this.mount = ref)} />
    )
  }
}


export default Camera;
