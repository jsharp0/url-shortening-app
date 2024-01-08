import React from 'react';

import './StatisticsCard.scss';

function StatisticsCard(props: {
  heading: string;
  description: string;
  icon: string;
  className: string;
}) {
  return (
    <div className={`statistics-card text-lg-start ${props.className}`}>
      <div className="icon-container bg-secondary mb-4">
        <img src={props.icon} alt="" />
      </div>
      <h3>{props.heading}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default StatisticsCard;
