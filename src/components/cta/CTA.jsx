import React, {useState} from 'react';
import './cta.css';
import covid_img from '../../assets/SnapshotCovidApp.PNG.png'
import webshop_img from '../../assets/SnapshotWebshopApp.PNG.png'
import twitchapp_img from '../../assets/SnapshotTwitchApp.PNG.png'
import game_project_img from '../../assets/SnapshotGameProject.PNG.png'
import maze_game_img from '../../assets/SnapshotMazeGame.PNG.png'

import { TwitchApp, GameDevelopment, CovidApp, MazeEngine, TemplateGenerator } from '../../components';

const CTA = () => {

  const [name, setState] = useState('null');
  console.log(name)
  var active_project;
  if (name == 'twitchapp') {
    active_project = <TwitchApp />;
  }
  else if(name == 'gamedevelopment') {
    active_project = <GameDevelopment />;
  }
  else if (name == 'covid19app'){
    active_project = <CovidApp />;
  }
  else if (name == 'templategenerator'){
    active_project = <TemplateGenerator />;
  }else if (name == 'mazeengine'){
    active_project = <MazeEngine />;
    
  }

  return (
    <div>
    <div className="project__section" id="projects">
    <section className="projects" id="projects">
      <h1 className="gradient__text">Recent Projects</h1>
      <div className="projects-container">
        <div className="project-container project-card">
        <a href="#active-project"> <img
            src={covid_img}
            alt="covid-tracker"
            loading="lazy"
            className="project-pic"
            onClick={() => setState('covid19app')}
          /></a>
          <h3 className="project-title">Covid-19 Tracker</h3>
          <p className="project-details">
          This application was developed using Python, HTML and CSS. It was created at the beginning of 2020 to track covid-19 cases
          around the globe. It is sorted by total cases and cases within the last 24 hours by country.
          </p>
   

        </div>
        
        <div className="project-container project-card">
        <a href="#active-project"><img
            src={webshop_img}
            alt="template-generator"
            loading="lazy"
            className="project-pic"
            onClick={() => setState('templategenerator')}
          />
          </a>
          <h3 className="project-title">Template Generator</h3>
          <p className="project-details">
          The Languages used for this project were Python, HTML, CSS and Javascript.
          It was created for a company I worked for to speed up and make the work of other employees easier. It is a GUI with input boxes that once completed,
          generates a HTML and CSS template for ebay, and their E-commerce website.
          </p>
          
          
        </div>
        
        <div className="project-container project-card">
        <a href="#active-project"><img
            src={game_project_img}
            alt="game-development"
            loading="lazy"
            className="project-pic"
            onClick={() => setState('gamedevelopment')}
          /></a>
          <h3 className="project-title">Game Development</h3>
          <p className="project-details">
          I made many personal game projects during my time learning about C# and Unity.
          I also learned Graphical Programming Languages such as HLSL and GLSL to help understand how to manipulate graphics in real-time
          </p>
          
     
        </div>
        <div className="project-container project-card">
        <a href="#active-project"> <img
            src={twitchapp_img}
            alt="twitch-game"
            loading="lazy"
            className="project-pic"
            onClick={() => setState('twitchapp')}
          /></a>
          <h3 className="project-title">Twitch.tv Integrated Game</h3>
          <p className="project-details">
          Twitch API Integration to implement the Twitch chat with a unity video game using C# where the users in chat are able to type in the function parameters
          </p>
         
        </div>
        <div className="project-container project-card">
        <a href="#active-project">
          <img
            src={maze_game_img}
            alt="maze-game"
            loading="lazy"
            className="project-pic"
            onClick={() => setState('mazeengine')}
            id='maze-img'
          /></a>
          <h3 className="project-title">Maze Game Engine</h3>
          <p className="project-details">
          This project is a Maze Game Engine written in Java. It was created during a uni project where we were tasked to design and create a game engine from scratch using Object Orient Progrmaming.
          </p>
        
        </div>
      </div>
      
      
    </section>
    

    </div>
    <div className='active-project' id='active-project'>
  
  <div className='active-project-container'>
    {active_project}

  </div>
</div>
    </div>
  );
};

export default CTA;
