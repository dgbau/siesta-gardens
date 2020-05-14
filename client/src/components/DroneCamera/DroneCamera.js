
import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

class Camera extends Component {

  componentDidMount() {
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 50000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( 300, 245  );
    // window.addEventListener( 'resize', onWindowResize, false );
    // function onWindowResize(){
    //     camera.aspect = window.innerWidth/window.innerHeight;
    //     camera.updateProjectionMatrix();
    //     renderer.setSize( window.innerWidth/4, window.innerHeight/3 );
    // }

    var camLoc=this.props.cam;
    //Initial Camera Location
    camera.position.x=3000;
    camera.position.y=1000;
    camera.position.z=3000;
    var center=new THREE.Vector3(3000,0,3000)
    //camera.lookAt(center);
    console.log(camera.rotation);

    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild( renderer.domElement );
    var heading=0;
    var data=this.props;
    var sceney=this.props.scene;
    var controls = new OrbitControls(camera,renderer.domElement);


    var animate = function () {
      requestAnimationFrame( animate );
      controls.update();
      //console.log(camera.position);
/*
      camera.position.x=camLoc.x;
      camera.position.y=camLoc.y;
      camera.position.z=camLoc.z;
      camera.rotation.x=camLoc.rotX;
      camera.rotation.y=camLoc.rotY;
      camera.rotation.z=camLoc.rotZ;
      */
      //camera.lookAt(new THREE.Vector3(0,0,0));

      renderer.render( sceney, camera );
    };
    animate();

    document.body.addEventListener("keydown", moveCamera);

    function moveCamera(e){
      console.log(e.keyCode);

      if(e.keyCode==87){//Up
        camLoc.x-=Math.sin(camLoc.rotZ);
        camLoc.z-=Math.cos(camLoc.rotZ);
      }
      if(e.keyCode==83){//Down
        camLoc.x+=Math.sin(camLoc.rotZ);
        camLoc.z+=Math.cos(camLoc.rotZ);
      }
      if(e.keyCode==68){//Right
        camLoc.rotZ-=.01;

      }
      if(e.keyCode==65){//Left
        camLoc.rotZ+=.01;
      }

      if(e.keyCode==81){//Go up
        camLoc.y+=1;
      }
      if(e.keyCode==69){//Go down
        camLoc.y-=1;
      }

      if(e.keyCode==73){//Pan up
        camLoc.rotX-=.01;
      }
      if(e.keyCode==75){//Pan down
        camLoc.rotX+=.01;
      }

      /*
      if(e.keyCode==87){//Up
        camLoc.z-=1;
      }
      if(e.keyCode==83){//Down
        camLoc.z+=1;
      }
      if(e.keyCode==68){//Right
        camLoc.x+=1;
      }
      if(e.keyCode==65){//Left
        camLoc.x-=1;
      }

      if(e.keyCode==73){//Pan up
        camLoc.rotX-=.01;
      }
      if(e.keyCode==75){//Pan down
        camLoc.rotX+=.01;
      }

      if(e.keyCode==76){//Pan left
        camLoc.rotZ-=.01;
      }
      if(e.keyCode==74){//Pan right
        camLoc.rotZ+=.01;
      }

      if(e.keyCode==81){//Go up
        camLoc.y+=1;
      }
      if(e.keyCode==69){//Go down
        camLoc.y-=1;
      }
*/


    }
  }
    render() {

      return (
        <div ref={ref => (this.mount = ref)} />
      )
    }

  }


export default Camera;
