import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
  title: 'Bachelor of Computer Science',
  text:'Expected to graduate June 2023'
  },
  {
  title: 'Diploma of Interactive Digital Media and Games',
  text:'2017'
  },
  {
  title: 'Certificate II in Information Technology and Systems',
  text:'2013'
  }
]
const Features = () => {
  return ( 
  <div className='jk__features section__padding' id="resume">
    <div className='jk__features-heading'>
      <h1 className='gradient__text'>
        Qualifications
        
      </h1>
      <p>Academic Accomplishments</p>
    </div>
    <div className='jk__features-container'>
      {
        featuresData.map((item,index)=>
        <Feature title={item.title} text={item.text}key={item.title +  index}/>)
      }
    </div>
  </div>

  )
};

export default Features;
