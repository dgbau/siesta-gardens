import React from 'react';
import './App.scss';

// Components
import Dashboard from "./components/Dashboard/Dashboard";
import MainNav from "./components/MainNav/MainNav";
import mockData from "./fakeData"


function App() {
  let testData = {string1: "like json -> ", string2: 123}
  console.log(mockData)
  return (
    <div className="container">
      <MainNav></MainNav>
      <Dashboard data={mockData} data2={testData}></Dashboard>
    </div>
  );
}

export default App;
