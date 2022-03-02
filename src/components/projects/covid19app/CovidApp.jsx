import React from 'react';
import './covid19app.css';
import covid_track_app from '../../../assets/CovidTrackApp.mp4'
const CovidApp = () => {
  return <div>
      
      <body>
      <video controls>
        <source src={covid_track_app} type="video/mp4" ></source>
    </video>
    <h1 className='active-project-header'>Covid Tracking Application</h1>
  
    <div className='project-details'>
      <p>
    At the beginning of 2020 When Coronavirus was popping up around the globe I decided to use my skills and track the cases per country. This application was developed using Python, HTML and CSS.
    I used the leaflet API and Web scraped the coordinates of the countries and the active cases from www.worldometers.info/coronavirus/ using beautifulsoup. The data was converted into a csv file to read from and presented to a leaflet GUI.
    </p>
    </div>
    

    </body>
  </div>
};

export default CovidApp;
