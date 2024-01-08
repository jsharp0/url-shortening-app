import React from 'react';
import brandRecognition from './images/icon-brand-recognition.svg';
import detailedRecords from './images/icon-detailed-records.svg';
import fullyCustomizable from './images/icon-fully-customizable.svg';
import StatisticsCard from './statistics-card/StatisticsCard';

import './App.scss';

function App() {
  return (
    <div>
      <div className="advanced-statistics text-center">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="d-grid mt-5">
          <StatisticsCard
            className="align-self-start"
            heading="Brand Recognition"
            icon={brandRecognition}
            description="Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content."
          ></StatisticsCard>
          <div className="card-border"></div>

          <StatisticsCard
            className="align-self-center"
            heading="Detailed Records"
            icon={detailedRecords}
            description="Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content."
          ></StatisticsCard>
          <div className="card-border"></div>

          <StatisticsCard
            className="align-self-end"
            heading="Fully Customizable"
            icon={fullyCustomizable}
            description="Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement."
          ></StatisticsCard>
        </div>
      </div>
      <div className="bg-secondary boost text-center">
        <h2 className="light pb-3">Boost your links today</h2>
        <button className="btn btn-primary rounded">Get Started</button>
      </div>
    </div>
  );
}

export default App;
