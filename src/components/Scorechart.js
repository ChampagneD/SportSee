import React from "react";
import styled from "styled-components";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import propTypes from "prop-types";

import "../styles/charts/scorechart.css";
import "../styles/dashboard.css";

const Title = styled.h2`
  position: absolute;
  left: 20%;
  top: 10%;
  transform: translate(-50%, -50%);
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  color: #20253a;
  font-weight: 700;
`;

const Text = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 15px;
  line-height: 26px;
  font-weight: 700;
  text-align: center;
  color: #74798c;
`;

const Score = styled.span`
  color: rgba(0, 0, 0, 0.8);
  font-weight: 700;
  font-size: 26px;
`;

/**

A score chart component that displays a pie chart with a score value.
@param {object} data An object with a todayScore or score property
@returns {ReactNode} JSX that gets injected in a DOM element
*/

const Scorechart = ({ data }) => {
  const fakePie = [{ value: 100 }];

  const score = [
    { value: data.todayScore || data.score },
    { value: 1 - data.todayScore || data.score },
  ];

  return (
    <div className="scorechart">
      <Title>Score</Title>
      <ResponsiveContainer className="responsive-container" aspect={1}>
        <PieChart>
          <Pie
            data={fakePie}
            cx="50%"
            cy="50%"
            outerRadius={85}
            dataKey="value"
            fill="#FFFFFF"
          />
          <Pie
            data={score}
            dataKey="value"
            innerRadius={70}
            outerRadius={85}
            startAngle={90}
            endAngle={450}
          >
            {score.map((entry, index) =>
              index === 0 ? (
                <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000" />
              ) : (
                <Cell key={`cell-${index}`} fill="#FBFBFB" />
              )
            )}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <Text>
        <Score>
          {score[0].value * 100}%<br />
        </Score>
        de votre
        <br /> objectif
      </Text>
    </div>
  );
};
export default Scorechart;

/*Scorechart.propTypes = {
  data: propTypes.object,
};*/

Scorechart.propTypes = {
  data: propTypes.shape({
    todayScore: propTypes.number,
    score: propTypes.number,
  }).isRequired,
};
