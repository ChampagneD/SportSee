import { Link } from "react-router-dom";
import woman from "../assets/woman.webp";
import men from "../assets/men.webp";

import "../styles/UserSelection.css";

import MaterialIcons from "./MaterialIcons";

const UserSelection = () => {
  return (
    <div className="UserSelection">
      <Link to={"/user/12"}>
        <div className="User User12">
          <MaterialIcons bgcolor="white" icon={men} />
          <p>Karl</p>
        </div>
      </Link>

      <Link to={"/user/18"}>
        <div className="User User18">
          <MaterialIcons bgcolor="white" icon={woman} />
          <p>Cecilia</p>
        </div>
      </Link>
    </div>
  );
};

export default UserSelection;
