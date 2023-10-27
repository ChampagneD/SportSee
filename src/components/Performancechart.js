import React from "react";
import propTypes from "prop-types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import "../styles/charts/Performancechart.css";
import "../styles/dashboard.css";

/**
 *  Renders performance chart using Recharts library.
 * @param {object} data data object
 * @return {ReactNode} jsx injected in DOM element
 */

const Performancechart = ({ data }) => {
  console.log(data);
  const getKindValue = (kindData) => {
    return data.kind[kindData.kind];
  };

  return (
    <div className="chart-performance">
      <ResponsiveContainer className="responsive-container" aspect={1}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.data}>
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            dataKey={getKindValue}
            stroke="white"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
            tickCount={1}
          />
          <PolarRadiusAxis tick={false} tickCount={5} axisLine={false} />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Performancechart;

/*Performancechart.propTypes = {
  data: propTypes.object,
};*/

Performancechart.propTypes = {
  data: propTypes.shape({
    data: propTypes.arrayOf(
      propTypes.shape({
        kind: propTypes.number.isRequired,
        value: propTypes.number.isRequired,
      })
    ).isRequired,
    kind: propTypes.objectOf(propTypes.string).isRequired,
  }).isRequired,
};
