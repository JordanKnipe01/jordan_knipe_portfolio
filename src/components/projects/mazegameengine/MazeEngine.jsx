import React from 'react';
import './mazegameengine.css';
import game_engine_video from '../../../assets/MazeGameEngine.mp4'
import game_engine_console from '../../../assets/GameEngine.PNG'
const MazeEngine = () => {
  return <div>
      
      
      <body>
      <video controls>
        <source src={game_engine_video} type="video/mp4" ></source>
    </video>
    <h1 className='active-project-header'>Maze Game Engine</h1>
    <div>
    <div className='project-details'>
        <p>
        This project is a Game Engine written in java, it hosts a 2D Maze-like game, where the player selects the difficulty of the game. The player has a set amount of stamina to complete the game and can pick-up apples(green) to gain more stamina.
        <br></br>The player must also avoid traps (red) pick-up coins (yellow) and finish on the black square.
        <br></br>
        <br></br>
        This game engine is written in Java using JavaFX and was done as a solo-uni project.
        <br>
        </br>
        bellow is the console output example of how the list works.
        <img src={game_engine_console} className='game_engine_console'></img>
    </p>
    <p>
    </p>
    </div>
    </div>

    </body>
  </div>
};

export default MazeEngine;
