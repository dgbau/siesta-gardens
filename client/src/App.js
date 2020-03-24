import React from 'react';
import './App.scss';

// Components
import Dashboard from "./components/Dashboard/Dashboard";
import MainNav from "./components/MainNav/MainNav";


function App() {
  let testData = {string1: "like json -> ", string2: 123}
  return (
    <div className="container">
      <MainNav></MainNav>
      <Dashboard data="this is any sort of data, input to the <Dashboard> component" data2={testData}></Dashboard>
    </div>
  );
}

export default App;
