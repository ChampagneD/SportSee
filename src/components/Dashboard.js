import ActivityChart from "../components/ActivityChart";
import SessionChart from "./SessionChart";
import PerformanceChart from "../components/PerformanceChart";
import ScoreChart from "../components/ScoreChart";
import Card from "../components/Card";

import "../styles/dashboard.css";
import { useLoaderData } from "react-router-dom";

/**
 * Dashboard component which displays the user data
 * @returns {JSX} A react component to render on the dashboard page
 */

const Dashboard = () => {
  /*
Fetching data from useLoaderData
@type {{ 
    user: { data: { userInfos: { firstName: string } } },
    activity: { data: { sessions: object } },
    average: { data: { sessions: object } },
    performance: object 
      }}
*/
  const userData = useLoaderData();
  const user = userData.user.data;
  const activity = userData.activity.data;
  const average = userData.average.data;
  const performance = userData.performance.data;

  return (
    <div className="firstcontainer">
      <div className="userContainer">
        {" "}
        <h1 className="username">
          Bonjour{" "}
          <span style={{ color: "red" }}>{user.userInfos.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className="container">
        <div className="leftContainer">
          <ActivityChart data={activity.sessions} />

          <SessionChart data={average.sessions} />
          <PerformanceChart data={performance} />
          <ScoreChart data={user} />
        </div>
        <div className="rightContainer">
          {Object.keys(user.keyData).map((key) => {
            return <Card key={key} Key={key} value={user.keyData[key]} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
