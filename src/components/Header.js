import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

import "../styles/navbar.css";

/**
The Nav component is a functional component that returns the navigation bar for the application.
It contains links to the main pages of the application: Home, Profile, Settings, and Community.
@returns {JSX} The JSX of the navigation bar.
*/

const Nav = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
        <p>SportSee</p>
      </div>
      <Link to="/"> Accueil</Link>
      <Link to="#"> Profil</Link>
      <Link to="#"> Réglage</Link>
      <Link to="#"> Communauté</Link>
    </div>
  );
};
export default Nav;
