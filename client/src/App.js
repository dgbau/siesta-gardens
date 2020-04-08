import React from 'react';
import './App.scss';

// Components
import Dashboard from "./components/Dashboard/Dashboard";
import MainNav from "./components/MainNav/MainNav";
import mockData from "./fakeData"


function App() {
  return (
    <div className="container-fluid">
      <MainNav></MainNav>
      <Dashboard data={mockData}></Dashboard>
    </div>
  );
}

export default App;
