import React, { Component, useState, useEffect } from "react";
import "./Dashboard.scss";
import ClientList from "../ClientList/ClientList";
import Map from "../Map/Map";
import Charts from "../Charts/Charts";
import Camera from "../Camera/Camera";
import DroneCamera from "../DroneCamera/DroneCamera";
import ReactDOM from "react-dom";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";

var lift = 10;

var fenceHeight = 10;

class Dashboard extends Component {
  componentDidMount() {}

  render() {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color("#87CEEB");

    this.sceney = scene;

    var loader = new THREE.TextureLoader();

    loader.load(
      "./assets/emptyMap.png",
      function (texture) {
        var groundMaterial = new THREE.MeshBasicMaterial({
          map: texture,
        });
        var plane = new THREE.Mesh(
          new THREE.BoxGeometry(6000, 1, 6000),
          groundMaterial
        );
        plane.position.x = 3000;
        plane.position.z = 3000;
        scene.add(plane);
      },
      undefined,
      function (err) {
        console.error("An error happened.");
      }
    );

    var loader = new THREE.TextureLoader();

    loader.load(
      "./assets/road.jpg",
      function (texture) {
        var roadMaterial = new THREE.MeshBasicMaterial({
          map: texture,
        });
        var road1 = new THREE.Mesh(
          new THREE.BoxGeometry(500, 2, 10),
          roadMaterial
        );
        road1.position.x = 2600 + 500 / 2;
        road1.position.y = lift;
        road1.position.z = 1550;

        var road2 = new THREE.Mesh(
          new THREE.BoxGeometry(10, 2, 2450),
          roadMaterial
        );
        road2.position.x = 3100;
        road2.position.y = lift;
        road2.position.z = 1550 + 2450 / 2;

        var road3 = new THREE.Mesh(
          new THREE.BoxGeometry(707, 2, 10),
          roadMaterial
        );
        road3.position.x = 2600 - 500 / 2;
        road3.position.y = lift;
        road3.position.z = 1550 + 500 / 2;
        road3.rotation.y = 0.78593;

        var road4 = new THREE.Mesh(
          new THREE.BoxGeometry(10, 2, 1900),
          roadMaterial
        );
        road4.position.x = 2100;
        road4.position.y = lift;
        road4.position.z = 2050 + 1900 / 2;

        var road5 = new THREE.Mesh(
          new THREE.BoxGeometry(1000, 2, 10),
          roadMaterial
        );
        road5.position.x = 2100 + 1000 / 2;
        road5.position.y = lift;
        road5.position.z = 3950;

        scene.add(road1);
        scene.add(road2);
        scene.add(road3);
        scene.add(road4);
        scene.add(road5);
      },
      undefined,
      function (err) {
        console.error("An error happened.");
      }
    );

    var loader = new THREE.TextureLoader();

    loader.load(
      "./assets/concrete.jpg",
      function (texture) {
        var fenceMaterial = new THREE.MeshBasicMaterial({
          map: texture,
          opacity: 1,
          transparent: true,
        });
        var fence1 = new THREE.Mesh(
          new THREE.BoxGeometry(950, fenceHeight, 2),
          fenceMaterial
        );
        fence1.position.x = 2125 + 950 / 2;
        fence1.position.y = lift + 5;
        fence1.position.z = 2075;

        var fence2 = new THREE.Mesh(
          new THREE.BoxGeometry(2, fenceHeight, 1850),
          fenceMaterial
        );
        fence2.position.x = 2125;
        fence2.position.y = lift + 5;
        fence2.position.z = 2075 + 1850 / 2;

        var fence3 = new THREE.Mesh(
          new THREE.BoxGeometry(950, fenceHeight, 2),
          fenceMaterial
        );
        fence3.position.x = 2125 + 950 / 2;
        fence3.position.y = lift + 5;
        fence3.position.z = 2075 + 1850;

        var fence4 = new THREE.Mesh(
          new THREE.BoxGeometry(2, fenceHeight, 1850),
          fenceMaterial
        );
        fence4.position.x = 2125 + 950;
        fence4.position.y = lift + 5;
        fence4.position.z = 2075 + 1850 / 2;

        scene.add(fence1);
        scene.add(fence2);
        scene.add(fence3);
        scene.add(fence4);
        /*
var fence21=new THREE.Mesh(new THREE.BoxGeometry(950-10,fenceHeight/2,2),fenceMaterial);
fence21.position.x=2125+950/2+5;
fence21.position.y=lift+5;
fence21.position.z=2075;

var fence22=new THREE.Mesh(new THREE.BoxGeometry(2,fenceHeight/2,1850-10),fenceMaterial);
fence22.position.x=2125+5;
fence22.position.y=lift+5;
fence22.position.z=2075+1850/2+5;

var fence23=new THREE.Mesh(new THREE.BoxGeometry(950-10,fenceHeight/2,2),fenceMaterial);
fence23.position.x=2125+950/2+5;
fence23.position.y=lift+5;
fence23.position.z=2075+1850+5;

var fence24=new THREE.Mesh(new THREE.BoxGeometry(2,fenceHeight/2,1850-10),fenceMaterial);
fence24.position.x=2125+950;
fence24.position.y=lift+5;
fence4.position.z=2075+1850/2+5;

scene.add(fence21);
scene.add(fence22);
scene.add(fence23);
scene.add(fence24);
*/
      },
      undefined,
      function (err) {
        console.error("An error happened.");
      }
    );

    var data = this.props.data;

    var trex;

    var mtlLoader = new MTLLoader();
    mtlLoader.load("./assets/trex.mtl", function (materials) {
      materials.preload();
      var objLoader = new OBJLoader();

      objLoader.setMaterials(materials);
      objLoader.load(
        "./assets/trex.obj",
        function (object) {
          trex = object;
          object.scale.set(2, 2, 2);
          object.traverse(function (child) {
            if (child instanceof THREE.Mesh)
              child.material.color.setHex(0xff0000);
          });
          object.position.x = 10;
          object.position.y = 20;
          object.position.z = 10;
          scene.add(object);
        },
        undefined,
        function (err) {
          console.log(err);
        }
      );
    });

    //Car 1
    var mtlLoader = new MTLLoader();
    mtlLoader.load("./assets/trex.mtl", function (materials) {
      materials.preload();
      var objLoader = new OBJLoader();

      objLoader.setMaterials(materials);
      objLoader.load(
        "./assets/vehicle.obj",
        function (object) {
          object.scale.set(5, 5, 5);
          object.position.x = data.locationData.carLoc.x;
          object.position.y = 5;
          object.position.z = data.locationData.carLoc.y;
          scene.add(object);
        },
        undefined,
        function (err) {
          console.log(err);
        }
      );
    });

    //Update Dinosaurs Location

    setTimeout(updateObjs, 5000);

    function updateObjs() {
      setInterval(function () {
        //Dinosaur Movement
        trex.position.x = data.locationData.dinoLoc.x;
        trex.position.z = data.locationData.dinoLoc.y;
        trex.rotation.y = data.locationData.dinoLoc.heading;
        //Car Movement
      }, 10);
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="widget">
              <Map data={this.props.data.locationData}></Map>
            </div>
          </div>
          <div className="col-4">
            <div className="widget">
              <Charts data={this.props.data}></Charts>
            </div>
          </div>
          <div className="col-3">
            <div className="widget">
              <ClientList
                data={this.props.data.clientData.clients}
              ></ClientList>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div id="dronecamera">
              <DroneCamera
                camID="3"
                cam={this.props.data.camData}
                scene={this.sceney}
                location={this.props.data.locationData}
              ></DroneCamera>
            </div>
          </div>
          <div className="col-6">
              <Camera
                camID="0"
                scene={this.sceney}
                location={this.props.data.locationData}
              ></Camera>
            </div>
        </div>

        <div className="row"></div>
      </div>
    );
  }
}

export default Dashboard;
