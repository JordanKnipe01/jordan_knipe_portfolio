import React from 'react';
import { Feature } from '../../components';
import './whatgpt3.css';
/*
     <div className="gpt3__whatgpt3-feature">
      <Feature title="What do I do?" text="I am an Accomplished, detail-focused and creative Service Professional passionate in Computer Science. I have Quantifiable knowledge and experience in IT, software development, design and illustration software, video editing, computer repair, Photography and Game Development. I have a Creative and flexible approach towards problem solving with the ability to communicate effectively. I Build strong and positive relationships with clients and co-workers. I provide A genuine commitment in providing a high standard of service, a proactive ‘can-do’ attitude, and a disposition well suited to handling pressured situations." />
    </div> */
const ProfessionalPortfolio = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="portfolio">
    
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Professional Profile</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
    <Feature title="About Me" text="I am an Accomplished, detail-focused and creative Service Professional passionate in Computer Science. I have Quantifiable knowledge and experience in IT, software development and Game Development. I have a Creative and flexible approach towards problem solving with the ability to communicate effectively. I Build strong and positive relationships with clients and co-workers." />
      
      <Feature title="Programming" text="I have experience with a variety of languages such as; Java, Javascript(including the use of the Reactjs framework), Python, C#, HTML and CSS." />
      <Feature title="Ecommerce" text="I work as a wordpress manager, where I maintain, update and deploy front-end websites for ecommerce businesses." />
      <Feature title="Computer Science" text="I am currently studying computer science with a highlight in cloud and mobile development." />
    </div>
  </div>)
};

export default ProfessionalPortfolio;
