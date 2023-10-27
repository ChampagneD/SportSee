import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import propTypes from "prop-types";
import "../styles/charts/activitychart.css";

/**
 * Function that change the x-axis format date and take the first digit
 * @params {string} tickItem - this is the date to be formatted
 * @returns {string} The date formatted
 */

const formatXAxis = (tickItem) => {
  const date = new Date(tickItem);
  return date.getDate();
};

/**
 * CustomTooltip is a function that returns a tooltip with weigth and calories data
 * @params {Boolean} active - Boolean indicating whether the tooltip is active
 * @params {Array} payload - Array of data to be displayed in the tooltip
 * @returns {JSX} -Returns a JSX element if the active prop is true and payload has data,
 * else return null
 */

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length > 0) {
    return (
      <div
        className="custom-tooltip"
        style={{ color: "white", fontSize: "10px" }}
      >
        <p
          style={{ margin: "10px 10px 20px 10px" }}
          className="label"
        >{`${payload[0].value} kg`}</p>
        <p
          style={{ margin: "10px 10px" }}
          className="label"
        >{`${payload[1].value} Kcal`}</p>
      </div>
    );
  }
  return null;
};

/**
 * A functional component that renders a bar chart representing aily activity data
 * @params {array} data - the data to display in the bar chart
 * @returns {JSX} A react component that renders the bar chart
 */

const Activity = ({ data }) => {
  return (
    <div className="Activity">
      <ResponsiveContainer
        className="responsive-container"
        style={{ padding: "20px" }}
      >
        <BarChart data={data} barGap={8}>
          <XAxis
            dataKey="day"
            tickFormatter={formatXAxis}
            tickLine={false}
            tickMargin={15}
            fontSize={20}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={["dataMin - 1", "dataMax +1"]}
            dataKey="kilogram"
            tickMargin={37}
            axisLine={false}
            tickLine={false}
            fontSize={20}
          />
          <YAxis yAxisId="left" dataKey="calories" domain={[0, "auto"]} hide />

          <text
            x={120}
            y={30}
            fill="black"
            textAnchor="middle"
            dominantBaseline="central"
          >
            <tspan className="titleactivity">Activité quotidienne</tspan>
          </text>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Tooltip
            wrapperStyle={{
              backgroundColor: "red",
              outline: "none",
            }}
            content={<CustomTooltip />}
          />
          <Legend
            marginBottom={10}
            align="right"
            wrapperStyle={
              {
                /* paddingTop: "calc(2px + 1.5625vw)" */
              }
            }
            verticalAlign="top"
            iconType="circle"
            iconSize={10}
            height={95}
          />
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            fill="#282D30"
            name="Poids(kg)"
            barSize={10}
            radius={[5, 5, 0, 0]}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            fill="#E60000"
            name="Calories brûlées (kCal)"
            barSize={10}
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Activity;

/*Activity.propTypes = {
  data: propTypes.object.isRequired,
};*/

Activity.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      day: propTypes.string,
      kilogram: propTypes.number,
      calories: propTypes.number,
    })
  ).isRequired,
};
