import React from 'react';
import './brand.css';
import { css,
  html,
  js,
  csharp,
  java,
  python} from './imports'

const Brand = () => {
  return (<div className='gpt3__brand section__padding'>
    <div>
      <img src={python} alt="python"></img>
    </div>
    
    <div>
      <img src={html} alt="html"></img>
    </div>

    <div>
      <img src={css} alt="css"></img>
    </div>

    <div>
      <img src={js} alt="js"></img>
    </div>

    <div>
      <img src={csharp} alt="csharp"></img>
    </div>

    <div>
      <img src={java} alt="java"></img>
    </div>

    

    
  </div>)
};

export default Brand;
