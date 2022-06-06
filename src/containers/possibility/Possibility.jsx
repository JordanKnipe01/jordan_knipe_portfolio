import React from 'react';
import { Feature } from '../../components';
import './possibility.css';
const possibilityData = [
  {
  title: 'Front-End Developer / Wordpress Manager',
  text:'In this position I manage, update and deploy new features to ecommerce websites. I also optimise webpages and develop software for co-workers to help them automate their job. I also perform all around IT solutions in the office workspace.'
  },
  {
  title: 'Intern Graphic Designer - Sunshine Coast City Council (Arts Festival)',
  text:'In this short-internship, I helped with marketing and design for the horizon arts festival using photoshop and illustrator.'
  },
  {
  title: 'Security Supervisor',
  text:'In this position I was the security and venue supervisor for multiple pubs and clubs along the sunshine coast, where I performed health and safety checks on the premises along with patron management.'
  }
]
const Possibility = () => {
  return ( 
  <div className='jk__features section__padding' id="resume">
    <div className='jk__features-heading'>
      <h1 className='gradient__text'>
        Work Experience
        
      </h1>
      <p>Work Accomplishments</p>
    </div>
    <div className='jk__features-container'>
      {
        possibilityData.map((item,index)=>
        <Feature title={item.title} text={item.text}key={item.title +  index}/>)
      }
    </div>
  </div>

  )
};

export default Possibility;
