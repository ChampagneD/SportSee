import React from "react";
import "./App.css";
import Nav from "./components/Header";
import Leftbar from "./components/Leftbar";
import Dashboard from "./components/Dashboard";

function App(selected) {
  console.log(selected);
  return (
    <React.Fragment>
      <Nav />
      <div className="contentContainer">
        <Leftbar />
        <div className="Dashboard">
          <Dashboard selected={selected.selected} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
