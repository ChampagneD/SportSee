import React from "react";
import "./App.css";
import Nav from "./components/Header";
import Leftbar from "./components/Leftbar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <div className="contentContainer">
        <Leftbar />
        <div className="Dashboard">
          <Dashboard />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
