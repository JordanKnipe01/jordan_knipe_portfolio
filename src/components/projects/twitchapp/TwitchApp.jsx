import React from 'react';
import './twitchapp.css';
import twitch_game_video from '../../../assets/TwitchGameVid.mp4'
const TwitchApp = () => {
  return <div>
  <body>
      <video controls>
        <source src={twitch_game_video} type="video/mp4" ></source>
    </video>
    <h1 className='active-project-header'>Twitch Application</h1>
    <div>
    <div className='project-details'>
        <p>
    With this project, I wanted to try something more niche.
    So I used the Twitch API to implement the Twitch chat with a unity video game using C# where the users in chat are able to type in the function parameters, for example (Australia, New Zealand) to send a virtual nuclear weapon from one country to another.
    <br></br>
    This was a fun project where the users can battle it out between countries for superiority.
    </p>
    <p>
    </p>
    </div>
    </div>

    </body>
  </div>
};

export default TwitchApp;
