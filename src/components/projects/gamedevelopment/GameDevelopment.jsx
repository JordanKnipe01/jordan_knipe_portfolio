import React from 'react';
import './gamedevelopment.css';
import game_dev_video from '../../../assets/GameProjectShowcase.mp4'
const GameDevelopment = () => {
  return <div>
      
      
      <body>
      <video controls>
        <source src={game_dev_video} type="video/mp4" ></source>
    </video>
    <h1 className='active-project-header'>Game Development</h1>
    <div>
    <div className='project-details'>
        <p>
        Game Development initially got me inspired for programming, It showed me alot of the fun things that is possible. This video showcases a few but definately not all of the mechanics I made during my time learning about C# and Unity.
        <br></br>
        I also learned Graphical Programming Languages such as HLSL and GLSL to help understand how to manipulate graphics in real-time, such as making textures transparent using a raycast to determine when the player is behind an object from the cameras point of view.
    </p>
    <p>
    </p>
    </div>
    </div>

    </body>
  </div>
};

export default GameDevelopment;
